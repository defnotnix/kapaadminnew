"use client";

import { ReactNode, useEffect, useState } from "react";
//mantine
import {
  Accordion,
  ActionIcon,
  Button,
  Divider,
  Drawer,
  Group,
  Paper,
  Stack,
  Text,
} from "@mantine/core";
import { Container } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
//query
import { useQuery } from "@tanstack/react-query";
import { getRecords, editRecord } from "@/modules/cms/config/module.api";
import {
  ArrowLeft,
  CaretRight,
  Check,
  Hash,
  House,
} from "@phosphor-icons/react";

import { cmsComponents } from "./home.sections";
//styles
import classes from "./_.module.css";
import { FormHandler } from "@vsphere/core";

export function ModuleCMSCelebrationHome() {
  // * DEFINITIONS

  // * ROUTERS

  const [opened, handlers] = useDisclosure(false);
  const [active, setActive] = useState<null | any>(null);

  // *

  const queryData = useQuery({
    queryKey: ["test"],
    queryFn: async () => {
      const res = await getRecords({ endpoint: "/cms/content/" });
      return res;
    },
  });

  const FormSubmitHandler = ({
    children,
    id = 0,
  }: {
    children: ReactNode;
    id?: number;
  }) => {
    const form = FormHandler.useForm();
    const { current, handleSubmit, handleStepBack, handleStepNext } =
      FormHandler.usePropContext();

    useEffect(() => {
      if (id) {
        const data = queryData.data.find((item: any) => item.id == id);

        try {
          form.setValues({
            ...data,
            ...JSON.parse(data.text),
          });
        } catch (err) {
          form.setValues({
            ...data,
          });
        }
      }
    }, []);

    return (
      <>
        {children}

        <Group justify="flex-end" py="sm" gap="xs" px="md">
          <Button color="teal" leftSection={<Check />} onClick={handleSubmit}>
            Submit
          </Button>
        </Group>
      </>
    );
  };

  return (
    <>
      <Paper h="100vh" bg="brand.1" />

      <Group
        gap="xs"
        style={{
          position: "fixed",
          bottom: "1rem",
          left: "1rem",
        }}
      >
        <ActionIcon color="dark" size={64} radius="xl">
          <House />
        </ActionIcon>
        <Button
          loading={queryData.isFetching}
          radius="xl"
          h={64}
          w={250}
          onClick={handlers.open}
          rightSection={<CaretRight size={16} />}
          styles={{
            loader: {
              fontSize: 16,
            },
          }}
        >
          <Text size="xs">Customize Page Contents</Text>
        </Button>
      </Group>

      <Drawer
        opened={opened}
        onClose={handlers.close}
        title={
          <Text size="xs" tt="uppercase" fw={600}>
            Configure - Home Contents
          </Text>
        }
        padding="md"
        size="md"
        styles={{
          header: {
            background: "var(--mantine-color-brand-1)",
          },
          body: {
            padding: 0,
          },
        }}
      >
        <Divider />
        {active == null && (
          <>
            <Stack gap={0}>
              {cmsComponents.map((item: any, index: number) => {
                return (
                  <Paper
                    px="md"
                    py="md"
                    key={index}
                    className={classes.hovercard}
                    onClick={() => {
                      setActive(item);
                    }}
                  >
                    <Group justify="space-between" wrap="nowrap">
                      <Group wrap="nowrap">
                        <item.icon size={12} weight="duotone" />
                        <Stack gap={3}>
                          <Text size="xs" fw={600}>
                            {item.label}
                          </Text>
                          <Text size="xs" opacity={0.5}>
                            {item.description}
                          </Text>
                        </Stack>
                      </Group>
                      <ActionIcon variant="subtle">
                        <CaretRight />
                      </ActionIcon>
                    </Group>
                  </Paper>
                );
              })}
            </Stack>
          </>
        )}

        {active !== null && (
          <Button
            p="md"
            onClick={() => {
              setActive(null);
            }}
            leftSection={<ArrowLeft />}
            fullWidth
            radius={0}
            variant="light"
            justify="flex-start"
            h={60}
            color="teal"
          >
            Back to Sections
          </Button>
        )}

        {active !== null && (
          <Accordion defaultValue="0">
            {active?.components.map((item: any, index: number) => {
              return (
                <Accordion.Item key={index} value={String(index)}>
                  <Accordion.Control>
                    <Group>
                      <Hash size={12} />
                      <Text size="xs" fw={600}>
                        {item.header || "No Header"}
                      </Text>
                    </Group>
                  </Accordion.Control>
                  <Accordion.Panel>
                    <FormHandler
                      transformDataOnSubmit={(formdata) => {
                        return {
                          ...formdata,
                        };
                      }}
                      {...item.config}
                      formType="edit"
                      apiSubmit={(_data) => {
                        editRecord(_data, item.id);
                      }}
                    >
                      <FormSubmitHandler id={item.id}>
                        <item.module />
                      </FormSubmitHandler>
                    </FormHandler>
                  </Accordion.Panel>
                </Accordion.Item>
              );
            })}
          </Accordion>
        )}
      </Drawer>
    </>
  );
}
