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
  Title,
} from "@mantine/core";
//styles
import cx from "clsx";
import classes from "./featurecard.module.css";

const paperElementConfig = {
  radius: 0,
  bg: "var(--color-celebrations-cream-dark)",
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
      <div style={{ position: "relative" }}>
        <Paper
          className="has_clip_featurecard"
          radius="lg"
          h={{ base: 300, md: 400, lg: 550 }}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            background: `url(${image})`,
            backgroundSize: "cover",
          }}
        />

        <Paper
          pos="absolute"
          top={0}
          w="100%"
          h={{ base: 300, md: 400, lg: 550 }}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            background: `none`,
            backgroundSize: "cover",
          }}
        >
          <Box>
            <Group justify="flex-end" gap={0}>
              <Text size="xs" fw={800} pr="lg">
                2024
              </Text>
            </Group>
          </Box>

          <Box>
            <Paper
              {...paperElementConfig}
              h={40}
              w={30}
              className={classes.top_round_1}
              style={{
                transform: "rotate(180deg)",
                marginBottom: "-10px",
              }}
            />

            <Group gap={0} align="flex-end">
              <Paper
                radius={0}
                h={100}
                w={150}
                bg="var(--color-celebrations-cream-dark)"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                }}
              >
                <Stack gap="4px">
                  <Title size="1.3rem" lh="1.5rem" fw={600}>
                    Saurav &<br />
                    Nisima
                  </Title>
                </Stack>
              </Paper>
              <Paper
                radius={0}
                h={100}
                w={60}
                bg="var(--color-celebrations-cream-dark)"
                style={{
                  clipPath: "polygon(0 0, 0 100%, 100% 100%)",
                }}
              />
              <Paper
                {...paperElementConfig}
                h={40}
                w={30}
                className={classes.top_round_1}
                style={{
                  transform: "rotate(180deg)",
                  marginBottom: "-10px",
                  marginLeft: "-8px",
                }}
              />
            </Group>
          </Box>
        </Paper>
      </div>
    </>
  );
}
