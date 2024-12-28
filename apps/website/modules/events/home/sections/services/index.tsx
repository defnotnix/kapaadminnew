"use client";

import React from "react";

//next
import {} from "next/navigation";
//mantine
import { Container, Group, Paper, Stack, Text } from "@mantine/core";
//styles
import cx from "clsx";
import classes from "./services.module.css";

export function _SectionServices() {
  // * DEFINITIONS

  // * CONTEXTS

  // * STATES

  // * PRELOADING

  // * FUNCTIONS

  // * COMPONENTS

  return (
    <>
      <Container py={160}>
        <Text size="sm" fw={600} ta="center">
          We manage a diverse array of events.
        </Text>

        <Stack py={50}>
          <Group justify="center">
            <Text size="4rem" fw={800} tt="uppercase">
              Seminars
            </Text>
            <Text size="4rem" fw={800} tt="uppercase">
              Events
            </Text>
          </Group>
          <Group justify="center">
            <Text size="4rem" fw={800} tt="uppercase">
              Award
            </Text>
            <Text size="4rem" fw={800} tt="uppercase">
              Ceremonies
            </Text>
            <Text size="4rem" fw={800} tt="uppercase">
              Workshops
            </Text>
          </Group>
          <Group justify="center">
            <Text size="4rem" fw={800} tt="uppercase">
              PRODUCT DEMONSTRATIONS
            </Text>
          </Group>
          <Group justify="center">
            <Text size="4rem" fw={800} tt="uppercase">
              Concerts
            </Text>
            <Text size="4rem" fw={800} tt="uppercase">
              Brand Launch
            </Text>
          </Group>
          <Group justify="center">
            <Text size="4rem" fw={800} tt="uppercase">
              Shows
            </Text>
            <Text size="4rem" fw={800} tt="uppercase">
              Fundraisers
            </Text>
            <Text size="4rem" fw={800} tt="uppercase">
              Webminars
            </Text>
          </Group>
          <Group justify="center">
            <Text size="4rem" fw={800} tt="uppercase">
              Conferences
            </Text>
            <Text size="4rem" fw={800} tt="uppercase">
              Fundraisers
            </Text>
          </Group>
          <Group justify="center">
            <Text size="4rem" fw={800} tt="uppercase">
              Networking Events
            </Text>
          </Group>
        </Stack>

        <Text size="sm" fw={600} ta="center" opacity={0.5}>
          Our Offerings
        </Text>
      </Container>
    </>
  );
}
