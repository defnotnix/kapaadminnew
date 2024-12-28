"use client";

import {
  ActionIcon,
  Avatar,
  Badge,
  Box,
  Button,
  Center,
  Container,
  Divider,
  Grid,
  Group,
  Loader,
  Paper,
  SimpleGrid,
  Space,
  Stack,
  Text,
  UnstyledButton,
} from "@mantine/core";
import {
  ArrowLeft,
  Chat,
  Clock,
  Pen,
  Trash,
  Warning,
} from "@phosphor-icons/react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useParams, usePathname, useRouter } from "next/navigation";
import { deleteRecord, getSingleRecord } from "../../module.api";
import { configModule } from "../../module.config";
import { triggerNotification } from "@vsphere/ui";
import { modals } from "@mantine/modals";

export function _Profile() {
  // * DEFINITION

  const Params = useParams();
  const Router = useRouter();
  const Pathname = usePathname();

  // * CONTEXT

  const { data, isFetching } = useQuery({
    queryKey: ["admin", "company", "profile", Params.id],
    queryFn: async () => {
      const res = await getSingleRecord(configModule.endpoint, Params.id);
      console.log(res);
      return res;
    },
  });

  // * STATES

  // * PRELOADS

  // * FUNCTIONS

  const mutationDelete = useMutation({
    mutationFn: async (delId) => {
      triggerNotification.form.isLoading({});

      const res = await deleteRecord(configModule.endpoint, delId);
      return res;
    },
    onSuccess: (res: any, delId: any) => {
      triggerNotification.form.isSuccess({});
      Router.push("/admin/company");
    },
    onError: (err: any) => {
      triggerNotification.form.isError({});
    },
  });

  const handleDelete = (id: any) => {
    modals.openConfirmModal({
      title: (
        <Group>
          <ActionIcon size="sm" color="red" variant="light">
            <Warning size={12} />
          </ActionIcon>
          <Text
            size="sm"
            style={{
              fontWeight: 600,
            }}
          >
            Please confirm your action
          </Text>
        </Group>
      ),
      children: (
        <>
          <Text size="xs" my="md">
            This might result unexpected deletion of other dependent records
            under it.
            <br />
            <br />
            <span
              style={{
                fontWeight: 600,
              }}
            >
              Are you sure you want to proceed?
            </span>
          </Text>
          <Space h="6px" />
        </>
      ),
      labels: { confirm: "Confirm", cancel: "Cancel" },
      confirmProps: {
        color: "red",
        size: "xs",
      },
      cancelProps: {
        size: "xs",
      },
      onCancel: () => {},
      onConfirm: () => {
        mutationDelete.mutate(Params.id);
      },
      styles: {
        header: {
          background: "var(--mantine-color-red-1)",
        },
      },
      size: "sm",
    });
  };

  // * COMPONENTS

  const InfoBox = ({ title, value }: { title: string; value: string }) => (
    <Paper withBorder p="sm" key={value}>
      <Text size="10px" tt="uppercase" mb="4px" opacity={0.5}>
        {title}
      </Text>
      <Text size="sm">{value}</Text>
    </Paper>
  );

  return (
    <>
      <Paper
        radius={0}
        style={{
          borderBottom: "1px solid var(--mantine-color-gray-3)",
        }}
      >
        <Group h={40} justify="space-between" pr="xs">
          <Group gap={0}>
            <Button
              size="xs"
              leftSection={<ArrowLeft />}
              variant="subtle"
              p={0}
              h={40}
              px="sm"
            >
              Back to List View
            </Button>

            <Divider orientation="vertical" size="xs" pr="sm" />

            <Text size="xs">Company Profile</Text>
            <Divider orientation="vertical" size="xs" mx="sm" />

            <Text size="xs">{data?.name}</Text>
          </Group>

          <Group gap="xs">
            <Button
              leftSection={<Trash />}
              size="xs"
              variant="light"
              color="red"
              onClick={() => {
                handleDelete(Params.id);
              }}
            >
              Delete Company
            </Button>
          </Group>
        </Group>
      </Paper>

      {isFetching ? (
        <Center h={300}>
          <Loader size={24} />
        </Center>
      ) : (
        <>
          <Container size="md">
            <Group wrap="nowrap" py={"xl"} justify="space-between">
              <Group>
                <Avatar src={data?.logo} />
                <Box>
                  <Text size="2rem" mb="xs">
                    {data?.name}
                  </Text>
                  <Text size="xs" opacity={0.5}>
                    {data?.description}
                  </Text>
                </Box>
              </Group>

              <Badge variant="dot" color="teal">
                ACTIVE
              </Badge>
            </Group>

            <Stack gap="xs">
              <Paper withBorder p="md">
                <Stack gap="xs">
                  <Group justify="space-between">
                    <Text size="10px" tt="uppercase" fw={700} opacity={0.3}>
                      General Details
                    </Text>
                    <Button
                      size="xs"
                      variant="light"
                      leftSection={<Pen />}
                      onClick={() => {
                        Router.push(Pathname + "/edit/" + Params.id);
                      }}
                    >
                      Configure Details
                    </Button>
                  </Group>

                  <SimpleGrid cols={2} mt="sm" spacing="xs">
                    <InfoBox title="Address" value={data.address} />
                    <InfoBox title="PAN/VAT" value={data.pan} />

                    <SimpleGrid cols={2} spacing="xs">
                      <InfoBox title="Primary Contact" value={data.contact1} />
                      <InfoBox
                        title="Secondary Contact"
                        value={data.contact2}
                      />
                    </SimpleGrid>
                    <InfoBox title="Email Address" value={data.email} />
                  </SimpleGrid>
                </Stack>
              </Paper>

              <Paper withBorder p="md">
                <Stack gap="xs">
                  <Group justify="space-between">
                    <Text size="10px" tt="uppercase" fw={700} opacity={0.3}>
                      Office Hours
                    </Text>
                    <Button
                      size="xs"
                      variant="light"
                      leftSection={<Pen />}
                      onClick={() => {
                        Router.push("/admin/company-hours/" + Params.id);
                      }}
                    >
                      Configure Hours
                    </Button>
                  </Group>
                </Stack>
              </Paper>

              <Paper withBorder p="md">
                <Stack gap="xs">
                  <Group justify="space-between">
                    <Text size="10px" tt="uppercase" fw={700} opacity={0.3}>
                      Testimonials
                    </Text>
                    <Button
                      size="xs"
                      variant="light"
                      leftSection={<Pen />}
                      onClick={() => {
                        Router.push("/admin/testimonials/" + Params.id);
                      }}
                    >
                      Configure Testimonials
                    </Button>
                  </Group>
                </Stack>
              </Paper>
            </Stack>
          </Container>
        </>
      )}
    </>
  );
}
