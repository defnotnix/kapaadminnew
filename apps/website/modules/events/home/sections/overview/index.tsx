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

export function _SectionOverview() {
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
                    <Paper
                      shadow="lg"
                      radius="lg"
                      pos="relative"
                      h={500}
                      style={{
                        transform: "rotate(-8deg)",
                        zIndex: 3,
                        background:
                          "url(https://foxeventnepal.com/uploads/image/19-08-02-83222.jpg)",
                        backgroundSize: "cover",
                      }}
                    />

                    <Paper
                      shadow="lg"
                      radius="lg"
                      h={500}
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
                  <Paper
                    shadow="lg"
                    radius="lg"
                    h={300}
                    style={{
                      transform: "rotate(8deg)",
                      background:
                        "url(https://www.1923lv.com/wp-content/uploads/2024/01/Corporate-Events-Las-Vegas-1923-Prohibition-Bar.jpeg)",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                </motion.div>
                <motion.div
                  variants={variantGeneralDelay(0.4)}
                  initial="initial"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <Paper
                    shadow="lg"
                    radius="lg"
                    h={250}
                    style={{
                      transform: "rotate(4deg)",
                      background:
                        "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaIkkE68C7rUuMsswyLbpCOpW8Y6bMUBjD8Q&s)",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
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
                <AnimatedText text="The Classics" />
              </div>
            </Group>
            <div className="event-header flex-left">
              <AnimatedText text="Focus on Your" />
              <AnimatedText text="Meeting, Not the" />
              <AnimatedText text="Hosting – Let Us" />
              <AnimatedText
                text="Handle the
              Details!"
              />
            </div>
            <motion.div
              variants={variantGeneralDelay(0.4)}
              initial="initial"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              <Text size="sm" w={400}>
                Stay engaged in your meeting while we manage every detail, from
                setup to wrap-up, for a seamless experience.
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
              <AnimatedText text="Elevate Your" />
              <AnimatedText text="Experience: Where" />
              <AnimatedText text="Unforgettable Moments" />
              <AnimatedText text="Begin." />
            </div>
            <motion.div
              variants={variantGeneralDelay(0.4)}
              initial="initial"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              <Text size="sm" w={400}>
                From breathtaking décor to flawless coordination, we
                meticulously craft every detail to perfection, ensuring your
                event is seamless, memorable, and leaves a lasting impression on
                all who attend.
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
                  <Paper
                    shadow="lg"
                    radius="lg"
                    h={300}
                    style={{
                      transform: "rotate(-8deg)",
                      background:
                        "url(https://www.shutterstock.com/editorial/image-editorial/M2TeUcwcM7z1E8w4MDk1NDI=/nepali-cosplayers-attend-otaku-jatra-annual-event-440nw-14886624o.jpg)",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                </motion.div>
                <motion.div
                  variants={variantGeneralDelay(0.1)}
                  initial="initial"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <Paper
                    shadow="lg"
                    radius="lg"
                    h={250}
                    bg="gray.3"
                    style={{ transform: "rotate(-4deg)" }}
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
                    <Paper
                      shadow="lg"
                      radius="lg"
                      pos="relative"
                      h={500}
                      bg="gray.3"
                      style={{
                        transform: "rotate(8deg)",
                        zIndex: 3,
                        background:
                          "url(https://storage.firstindia.co.in/public/news/November2024/173115503598.webp)",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    />
                    <Paper
                      shadow="lg"
                      radius="lg"
                      h={500}
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
