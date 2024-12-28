"use client";

import React from "react";
//
import { useRouter } from "next/navigation";
//mantine
import {
  Box,
  Container,
  Grid,
  Group,
  Paper,
  SimpleGrid,
  Stack,
  Text,
} from "@mantine/core";
//styles
import cx from "clsx";
import classes from "./featuredcard.module.css";

const paperElementConfig = {
  radius: 0,
  bg: "var(--color-events-primary-200)",
};

export function FeaturedSectionCard({
  year,
  category,
  title,
  url,
  image,
}: any) {
  // * DEFINITIONS

  const Router = useRouter();

  // * CONTEXTS

  // * STATES

  // * PRELOADING

  // * FUNCTIONS

  // * COMPONENTS

  return (
    <>
      <Paper
        radius="lg"
        h={{ base: 300, md: 400, lg: 550 }}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: `url(${image})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <Box>
          <Group gap={0} align="flex-start">
            <Paper
              p="md"
              radius={0}
              bg={paperElementConfig.bg}
              style={{
                borderBottomRightRadius: `var(--mantine-radius-${"md"})`,
              }}
            >
              <Text size="sm" fw={800}>
                01
              </Text>
            </Paper>
            <Paper
              {...paperElementConfig}
              h={40}
              w={30}
              className={classes.top_1}
            />
          </Group>
          <Paper
            {...paperElementConfig}
            h={40}
            w={30}
            className={classes.top_1}
          />
        </Box>

        <Box>
          <Group justify="flex-end">
            <Paper
              {...paperElementConfig}
              h={40}
              w={30}
              className={classes.bot_2}
            />
          </Group>
          <Group justify="flex-end" align="flex-end" gap={0}>
            <Paper
              {...paperElementConfig}
              h={40}
              w={30}
              className={classes.bot_2}
            />
            <Paper
              bg={paperElementConfig.bg}
              style={{
                borderTopLeftRadius: `var(--mantine-radius-${"md"})`,
              }}
              p="sm"
              radius={0}
            >
              <Text size="xs" fw={600}>
                TED TALK NEPAL - SEMINAR - AUG 2023
              </Text>
            </Paper>
          </Group>
        </Box>
      </Paper>
    </>
  );
}
