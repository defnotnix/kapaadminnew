"use client";

import {
  ActionIcon,
  Button,
  Divider,
  Drawer,
  Group,
  Paper,
  Stack,
  Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import { FormHero, formProps as formHeroProps } from "./forms/hero";
import { FormIntro, formProps as formIntroProps } from "./forms/intro";
import { PropsWithChildren, ReactNode, useEffect, useState } from "react";
//core
import { FormHandler } from "@vsphere/core";
//type
import { getRecords, editRecord } from "@/modules/cms/config/module.api";
import { ArrowLeft, CaretRight, Check, Pen } from "@phosphor-icons/react";

import classes from "./_.module.css";
import { useQuery } from "@tanstack/react-query";
import { FormElement } from "@vsphere/ui";
import { FormPhase } from "./forms/phase";
import { FormApproach, FormApproachImage } from "./forms/approach";

export function ModuleCMSCelebrationsHome() {
  const [opened, handlers] = useDisclosure(false);
  const [active, setActive] = useState<null | any>(null);

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

  const cmsComponents = [
    {
      label: "Hero Section",
      component: (
        <FormHandler
          {...formHeroProps}
          transformDataOnSubmit={(formdata) => {
            return {
              ...formdata,
            };
          }}
          formType="edit"
          apiSubmit={(_data) => {
            console.log(_data);
            editRecord(_data, 1);
          }}
        >
          <FormSubmitHandler id={1}>
            <FormHero />
          </FormSubmitHandler>
        </FormHandler>
      ),
    },
    {
      label: "Introduction",
      component: (
        <FormHandler
          {...formHeroProps}
          transformDataOnSubmit={(formdata) => {
            return {
              text: JSON.stringify({
                heading1: formdata.heading1,
                heading2: formdata.heading2,
                heading3: formdata.heading3,
              }),
            };
          }}
          formType="edit"
          apiSubmit={(_data) => {
            editRecord(_data, 6);
          }}
        >
          <FormSubmitHandler id={6}>
            <FormIntro />
          </FormSubmitHandler>
        </FormHandler>
      ),
    },
    {
      label: "Phase",
      component: (
        <>
          <FormHandler
            {...formHeroProps}
            transformDataOnSubmit={(formdata) => {
              return formdata;
            }}
            formType="edit"
            apiSubmit={(_data) => {
              editRecord(_data, 7);
            }}
          >
            <FormSubmitHandler id={7}>
              <Paper bg="gray.0" p="md">
                <FormElement.SectionTitle
                  isTopElement
                  title="Phase 1 : Pre-Event"
                  description="Pre-Event Details"
                />
              </Paper>

              <FormPhase />
            </FormSubmitHandler>
          </FormHandler>

          <FormHandler
            {...formHeroProps}
            transformDataOnSubmit={(formdata) => {
              return formdata;
            }}
            formType="edit"
            apiSubmit={(_data) => {
              editRecord(_data, 8);
            }}
          >
            <FormSubmitHandler id={8}>
              <Paper bg="gray.0" p="md">
                <FormElement.SectionTitle
                  isTopElement
                  title="Phase 2 : During-Event"
                  description="Pre-Event Details"
                />
              </Paper>
              <FormPhase />
            </FormSubmitHandler>
          </FormHandler>

          <FormHandler
            {...formHeroProps}
            transformDataOnSubmit={(formdata) => {
              return formdata;
            }}
            formType="edit"
            apiSubmit={(_data) => {
              editRecord(_data, 9);
            }}
          >
            <FormSubmitHandler id={9}>
              <Paper bg="gray.0" p="md">
                <FormElement.SectionTitle
                  isTopElement
                  title="Phase 3 : Post-Event"
                  description="Pre-Event Details"
                />
              </Paper>
              <FormPhase />
            </FormSubmitHandler>
          </FormHandler>
        </>
      ),
    },

    {
      label: "Approach",
      component: (
        <>
          <FormHandler
            {...formHeroProps}
            transformDataOnSubmit={(formdata) => {
              return formdata;
            }}
            formType="edit"
            apiSubmit={(_data) => {
              editRecord(_data, 7);
            }}
          >
            <FormSubmitHandler>
              <Paper bg="gray.0" p="md">
                <FormElement.SectionTitle
                  isTopElement
                  title="Section Text-Contents"
                  description="Text Contents Heading/Description"
                />
              </Paper>

              <FormApproach />
            </FormSubmitHandler>
          </FormHandler>

          <FormHandler
            {...formHeroProps}
            transformDataOnSubmit={(formdata) => {
              return formdata;
            }}
            formType="edit"
            apiSubmit={(_data) => {
              editRecord(_data, 8);
            }}
          >
            <FormSubmitHandler>
              <Paper bg="gray.0" p="md">
                <FormElement.SectionTitle
                  isTopElement
                  title="Showcase Images"
                  description="Showcase Images in Cards"
                />
              </Paper>
              <FormApproachImage />
            </FormSubmitHandler>
          </FormHandler>

          <FormHandler
            {...formHeroProps}
            transformDataOnSubmit={(formdata) => {
              return formdata;
            }}
            formType="edit"
            apiSubmit={(_data) => {
              editRecord(_data, 9);
            }}
          >
            <FormSubmitHandler>
              <FormApproachImage />
            </FormSubmitHandler>
          </FormHandler>
          <FormHandler
            {...formHeroProps}
            transformDataOnSubmit={(formdata) => {
              return formdata;
            }}
            formType="edit"
            apiSubmit={(_data) => {
              editRecord(_data, 9);
            }}
          >
            <FormSubmitHandler>
              <FormApproachImage />
            </FormSubmitHandler>
          </FormHandler>
        </>
      ),
    },
  ];

  return (
    <>
      <Paper h="200vh" bg="brand.2" />

      <Button
        size="xl"
        style={{
          position: "fixed",
          bottom: "10px",
          left: "10px",
        }}
        onClick={handlers.open}
        leftSection={<Pen />}
      >
        <Text size="xs">Customize Page</Text>
      </Button>

      <Drawer
        opened={opened}
        onClose={handlers.close}
        title={
          <Text size="sm" tt="uppercase" fw={600}>
            Configure Home Content
          </Text>
        }
        padding="md"
        size="md"
        styles={{
          header: {
            background: "var(--mantine-color-gray-1)",
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
                    py="sm"
                    key={index}
                    className={classes.hovercard}
                    onClick={() => {
                      setActive(item);
                    }}
                  >
                    <Group justify="space-between">
                      <Text size="sm">{item.label}</Text>
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
            onClick={() => {
              setActive(null);
            }}
            leftSection={<ArrowLeft />}
            fullWidth
            radius={0}
            variant="light"
            justify="flex-start"
          >
            Back to Sections
          </Button>
        )}

        {active !== null && <>{active?.component}</>}
      </Drawer>
    </>
  );
}
