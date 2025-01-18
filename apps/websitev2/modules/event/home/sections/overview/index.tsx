"use client";

import React from "react";
//next
import {} from "next/navigation";
//mantine
import {
  Box,
  Button,
  Container,
  Grid,
  Group,
  Image,
  Paper,
  Space,
  Stack,
  Text,
  Title,
} from "@mantine/core";
//styles
import cx from "clsx";
import classes from "./overview.module.css";
//motion
import { motion } from "framer-motion";
import { variantGeneralDelay } from "@/animation/variantGeneral";
import { AnimatedText } from "@/components/AnimatedText";

export function _SectionOverview({ sectionData }: any) {
  const {
    top = {
      heading: [],
      images: [],
    },
    bot = {
      heading: [],
      images: [],
    },
  } = sectionData;

  return (
    <Container size="xl" py={100}>
      <Grid>
        <Grid.Col span={{ base: 12, lg: 6 }}>
          <Grid gutter={32}>
            <Grid.Col span={7}>
              <Space h={32} />
              <Stack>
                <motion.div
                  variants={variantGeneralDelay(0)}
                  initial="initial"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <Box pos="relative">
                    <Image
                      pos="relative"
                      radius="lg"
                      h={{ base: 300, lg: 500 }}
                      src={top.images[0]?.image}
                      fit="cover"
                      style={{
                        transform: "rotate(-8deg)",
                        zIndex: 1,
                      }}
                    />

                    <Paper
                      shadow="lg"
                      radius="lg"
                      h={{ base: 300, lg: 500 }}
                      mt={16}
                      ml={-16}
                      w={"100%"}
                      bg="var(--color-events-primary-600)"
                      pos="absolute"
                      style={{ top: 0, transform: "rotate(-10deg)", zIndex: 0 }}
                    />
                  </Box>
                </motion.div>
              </Stack>
            </Grid.Col>
            <Grid.Col span={5} pl="lg">
              <Stack>
                <motion.div
                  variants={variantGeneralDelay(0.3)}
                  initial="initial"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <Image
                    radius="lg"
                    h={{ base: 100, lg: 300 }}
                    fit="cover"
                    src={top.images[1]?.image}
                    style={{
                      transform: "rotate(8deg)",
                    }}
                  />
                </motion.div>
                <motion.div
                  variants={variantGeneralDelay(0.4)}
                  initial="initial"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <Image
                    radius="lg"
                    h={{ base: 150, lg: 250 }}
                    fit="cover"
                    src={top.images[1]?.image}
                    style={{
                      transform: "rotate(4deg)",
                    }}
                  />
                </motion.div>
              </Stack>
            </Grid.Col>
          </Grid>
        </Grid.Col>
        <Grid.Col span={{ base: 12, lg: 5 }} offset={{ base: 0, lg: 1 }}>
          <Stack gap="lg" mt={64}>
            <Group>
              <div className="event-subheader flex-left">
                <AnimatedText text={top?.subheading || ""} />
              </div>
            </Group>
            <div className="event-header flex-left">
              {top?.heading.map((item: any, index: number) => (
                <AnimatedText key={index} text={item || ""} />
              ))}
            </div>
            <motion.div
              variants={variantGeneralDelay(0.4)}
              initial="initial"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              <Text size="sm" w={400}>
                {top?.paragraph}
              </Text>
            </motion.div>
            <motion.div
              variants={variantGeneralDelay(0.5)}
              initial="initial"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              <Group>
                <Button>Inquire Now</Button>
              </Group>
            </motion.div>
          </Stack>
        </Grid.Col>

        <Grid.Col span={{ base: 12, lg: 5 }}>
          <Stack gap="lg" mt={100}>
            <Group>
              <div className="event-subheader flex-left">
                <AnimatedText text="Galas & Events." />
              </div>
            </Group>
            <div className="event-header flex-left">
              {bot?.heading.map((item: any, index: number) => (
                <AnimatedText key={index} text={item || ""} />
              ))}
            </div>
            <motion.div
              variants={variantGeneralDelay(0.4)}
              initial="initial"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              <Text size="sm" w={400}>
                {bot?.paragraph}
              </Text>
            </motion.div>
            <motion.div
              variants={variantGeneralDelay(0.5)}
              initial="initial"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              <Group>
                <Button>Inquire Now</Button>
              </Group>
            </motion.div>
          </Stack>
        </Grid.Col>

        <Grid.Col span={{ base: 12, lg: 6 }} offset={{ base: 0, lg: 1 }}>
          <Grid gutter={32}>
            <Grid.Col span={5}>
              <Stack>
                <motion.div
                  variants={variantGeneralDelay(0)}
                  initial="initial"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <Image
                    radius="lg"
                    h={{ base: 150, lg: 250 }}
                    fit="cover"
                    src={bot.images[0]?.image}
                    style={{
                      transform: "rotate(-8deg)",
                    }}
                  />
                </motion.div>
                <motion.div
                  variants={variantGeneralDelay(0.1)}
                  initial="initial"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <Image
                    radius="lg"
                    h={{ base: 150, lg: 250 }}
                    fit="cover"
                    src={bot.images[1]?.image}
                    style={{
                      transform: "rotate(-4deg)",
                    }}
                  />
                </motion.div>
              </Stack>
            </Grid.Col>
            <Grid.Col span={7} pl="lg">
              <Space h={32} />
              <Stack>
                <motion.div
                  variants={variantGeneralDelay(0.3)}
                  initial="initial"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <Box pos="relative">
                    <Image
                      pos="relative"
                      radius="lg"
                      h={{ base: 300, lg: 500 }}
                      fit="cover"
                      src={bot.images[2]?.image}
                      style={{
                        transform: "rotate(8deg)",
                        zIndex: 3,
                      }}
                    />

                    <Paper
                      shadow="lg"
                      radius="lg"
                      h={{ base: 300, lg: 500 }}
                      mt={-16}
                      ml={16}
                      w={"100%"}
                      bg="var(--color-events-primary-600)"
                      pos="absolute"
                      style={{
                        top: 0,
                        transform: "rotate(10deg)",
                        zIndex: 0,
                        background:
                          "url(https://web.nepalnews.com/storage/story/1024/DSC_00681640862171_1024.jpg)",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    />
                  </Box>
                </motion.div>
              </Stack>
            </Grid.Col>
          </Grid>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
