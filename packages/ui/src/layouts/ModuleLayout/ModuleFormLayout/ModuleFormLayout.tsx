// @ts-nocheck

"use client";

import React from "react";
//nextjs
import { usePathname, useRouter } from "next/navigation";
//mantine
import {
  ActionIcon,
  Breadcrumbs,
  Button,
  Container,
  Grid,
  Group,
  Paper,
  Stack,
  Text,
  ThemeIcon,
} from "@mantine/core";
//icons
import { ArrowLeft, CaretRight, Check, Info } from "@phosphor-icons/react";
//core
import { FormHandler } from "@vsphere/core";
//type
import { PropModuleFormLayout } from "./ModuleFormLayout.type";

export function ModuleFormLayout({
  moduleConfig,
  //
  size = "lg",
  //type
  variant = "new",
  //steps
  steps = [],
  withStepper = true,
  //hints
  withHint = false,
  hintDetails,
  //loading
  isLoading = true,
  //children
  children,
}: PropModuleFormLayout) {
  // * DEFINITIONS
  const Pathname = usePathname();
  const Router = useRouter();

  // * CONTEXT

  const form = FormHandler.useForm();
  const { current, handleSubmit, handleStepBack, handleStepNext } =
    FormHandler.usePropContext();

  // * STATES

  // * FUNCTIONS

  // * COMPONENTS

  return (
    <>
      <Paper
        px="md"
        py="xs"
        style={{
          borderBottom: "1px solid var(--mantine-color-gray-3)",
        }}
      >
        <Group justify="space-between">
          <Group>
            <ActionIcon
              onClick={() => {
                Router.push(Pathname.slice(0, -3));
              }}
            >
              <ArrowLeft />
            </ActionIcon>
            <Text size="xs" fw={600}>
              Back to {moduleConfig.moduleName}
            </Text>
          </Group>

          <Button size="xs" variant="light" leftSection={<Info />}>
            Need help? Read the guide here
          </Button>
        </Group>
      </Paper>

      <Container size={size} py="md">
        <Grid align="center" gutter="xs">
          <Grid.Col span={{ base: 12, lg: 6 }} pl="lg">
            <div>
              <Text size="lg" fw={600} tt="capitalize">
                {variant} {moduleConfig.moduleName}
              </Text>
              <Group justify="space-between">
                <Text size="xs" opacity={0.5}>
                  {moduleConfig.moduleDescription.new}
                </Text>
              </Group>
            </div>
          </Grid.Col>
          <Grid.Col span={{ base: 12, lg: 6 }}>
            {withHint && (
              <Paper withBorder p="sm">
                <Group wrap="nowrap">
                  <ThemeIcon variant="light">
                    <Info />
                  </ThemeIcon>
                  <Stack gap={0}>
                    <Text size="xs">{hintDetails?.title}</Text>
                    <Text size="xs" opacity={0.5}>
                      {hintDetails?.description}
                    </Text>
                  </Stack>
                </Group>
              </Paper>
            )}
          </Grid.Col>
        </Grid>
      </Container>

      <Container size={size} py="xs">
        {children}

        {!isLoading && (
          <Group justify="flex-end" py="sm" gap="xs">
            {withStepper && (
              <Button
                onClick={handleStepBack}
                disabled={current == 0}
                leftSection={<ArrowLeft />}
                variant="light"
              >
                Back
              </Button>
            )}

            {withStepper && current < steps.length - 1 && (
              <Button onClick={handleStepNext} rightSection={<CaretRight />}>
                Next
              </Button>
            )}

            {(current + 1 == steps.length || !withStepper) && (
              <Button
                color="teal"
                leftSection={<Check />}
                onClick={handleSubmit}
              >
                Submit
              </Button>
            )}
          </Group>
        )}
      </Container>
    </>
  );
}
