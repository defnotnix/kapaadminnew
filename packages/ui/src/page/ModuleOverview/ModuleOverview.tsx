// @ts-nocheck

"use client";

import {
  Badge,
  Box,
  Button,
  Container,
  Group,
  Paper,
  SimpleGrid,
  Space,
  Stack,
  Text,
  Title,
} from "@mantine/core";
//type
import { PropPageModuleOverview } from "./ModuleOverview.type";
//

export function PageModuleOverview({
  title = "",
  description = "",
  importName = "",
  importURL = "",
  baseUrl = "",
  dependencies = [],
  //*
  children,
}: PropPageModuleOverview) {
  return (
    <>
      <Paper bg="gray.2">
        <Container size="lg" pt="2rem" pb="3rem">
          <Text size="xl" fw={700}>
            {title}
          </Text>
          <Text size="xs" opacity={0.5}>
            {description}
          </Text>

          <Space h="xl" />

          <Stack gap="xs">
            <Group>
              <Text size="xs" w={100} opacity={0.5}>
                Import
              </Text>
              <Text size="xs">
                import{" "}
                <span
                  style={{
                    color: "var(--mantine-color-dark-9)",
                  }}
                >
                  {`{`}{" "}
                </span>
                <span
                  style={{
                    color: "var(--mantine-color-orange-8)",
                  }}
                >
                  {importName}
                </span>{" "}
                <span
                  style={{
                    color: "var(--mantine-color-dark-9)",
                  }}
                >{`}`}</span>{" "}
                from{" "}
                <span
                  style={{
                    color: "var(--mantine-color-indigo-8)",
                  }}
                >
                  '{importURL}'
                </span>
              </Text>
            </Group>

            <Group>
              <Text size="xs" w={100} opacity={0.5}>
                Source
              </Text>
              <Text size="xs">{importURL}</Text>
            </Group>
            <Group>
              <Text size="xs" w={100} opacity={0.5}>
                Dependencies
              </Text>
              <Text size="xs">
                {dependencies.map((item: any, index: number) => (
                  <span key={index}>
                    {item}
                    {index != dependencies.length - 1 ? ", " : ""}
                  </span>
                ))}
              </Text>
            </Group>

            <Group>
              <Text size="xs" w={100} opacity={0.5}>
                Base URL
              </Text>
              <Text size="xs">{baseUrl}</Text>
            </Group>

            <Group wrap="nowrap" align="flex-start">
              <Text size="xs" w={100} opacity={0.5}>
                Sub-Modules
              </Text>
            </Group>
          </Stack>
        </Container>
      </Paper>

      <Container size="lg" py="xl">
        {children}
      </Container>
    </>
  );
}
