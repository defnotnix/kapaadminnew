"use client";

import React, { useEffect, useState } from "react";
//mantine
import {
  Button,
  Container,
  Grid,
  Group,
  Image,
  Paper,
  SimpleGrid,
  Space,
  Stack,
  Text,
} from "@mantine/core";
//icons
import {
  ArrowArcLeft,
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  Play,
  TwitterLogo,
  WhatsappLogo,
} from "@phosphor-icons/react";
//motion
import { animate, motion } from "framer-motion";
//styles
import classes from "./hero.module.css";
import cx from "clsx";
import { GlassFrame } from "./components/GlassFrame";
import { useMouse } from "@mantine/hooks";
import { MotionLilyLeaf } from "@/assets/svg/hero.flower";
import { AnimatedText } from "@/components/AnimatedText";

export function _SectionHero({ sectionData }: { sectionData: any }) {
  // * DEFINITIONS

  const {
    subheading = "The Classics Events",
    tagline = "For your Cherished Moments",
    heading1 = "We are",
    heading2 = "storytelling",
    heading3 = "experts, and our",
    heading4 = "events tell their",
    heading5 = "own stories",
    events = [
      {
        image:
          "https://images.pexels.com/photos/3835638/pexels-photo-3835638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        heading1: "Abhya",
        heading2: " Aayusha",
      },
      {
        image:
          "https://images.pexels.com/photos/1157557/pexels-photo-1157557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        heading1: "Abhya",
        heading2: " Aayusha",
      },
      {
        image:
          "https://images.pexels.com/photos/3835638/pexels-photo-3835638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",

        heading1: "Abhya",
        heading2: " Aayusha",
      },
    ],
  } = sectionData;

  // * CONTEXT

  const [active, setActive] = useState(0);

  // * STATES

  // * PRELOADING

  // * FUNCTIONS

  // * COMPONENTS

  // * ANIMATIONS

  const entryAnimation = async () => {
    await animate("#flower_container", {
      opacity: 1,
      transform: "rotate(-30deg)",
    });
  };

  const slideChange = async (value: any) => {
    if (value !== active) {
      await animate("#heromain", {
        filter: "blur(8px)",
      });

      setActive(value);

      await animate("#heromain", {
        filter: "blur(0px)",
      });
    }
  };

  useEffect(() => {
    if (sectionData) {
      entryAnimation();
    }
  }, []);

  return (
    <>
      <section className={classes.root} id="heromain">
        <div
          className={classes.media_background}
          style={{
            backgroundImage: `url(${events[active]?.image})`,
          }}
        />

        <motion.div
          initial={{ opacity: 0, transform: "rotate(0)" }}
          id="flower_container"
          className={classes.glass_frame_container}
        >
          <div className={classes.glass_frame_top}>
            <GlassFrame />
          </div>
          <div className={classes.glass_frame_bot}>
            <GlassFrame />
          </div>

          <div className={classes.dynamic_circle} />
        </motion.div>

        <div className={classes.flower_svg}>
          <MotionLilyLeaf />
        </div>

        <Container
          pos="relative"
          style={{
            zIndex: 5,
          }}
        >
          <Grid>
            <Grid.Col
              span={{ base: 12, lg: 4 }}
              pt={200}
              h={{ base: "auto", lg: "100vh" }}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Stack>
                <div
                  className="event-subheader flex-left"
                  style={{
                    color: "var(--mantine-color-gray-0)",
                  }}
                >
                  <AnimatedText text={subheading} />
                </div>

                <div
                  className="event-header flex-left"
                  style={{
                    color: "var(--mantine-color-gray-0)",
                  }}
                >
                  <AnimatedText text={heading1} />
                  <AnimatedText text={heading2} />
                  <AnimatedText text={heading3} />
                  <AnimatedText text={heading4} />
                </div>

                <div
                  className="event-subheader flex-left"
                  style={{
                    color: "var(--mantine-color-gray-0)",
                    opacity: 0.3,
                  }}
                >
                  <AnimatedText text={subheading} />
                </div>
              </Stack>

              <Group gap="3rem">
                <Text c="gray.0" size="xs" opacity={0.5}>
                  THE CLASSICS
                  <br /> PROJECTS
                </Text>

                <div>
                  <Group>
                    <WhatsappLogo color="white" />
                    <InstagramLogo color="white" />
                    <FacebookLogo color="white" />
                    <TwitterLogo color="white" />
                    <LinkedinLogo color="white" />
                  </Group>
                </div>
              </Group>
            </Grid.Col>

            <Grid.Col
              span={{ base: 12, lg: 4 }}
              h={{ base: "auto", lg: "100vh" }}
              style={{
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "center",
              }}
            >
              <Text c="gray.0" size="xs" opacity={0.5} ta="center">
                {tagline}
              </Text>
            </Grid.Col>

            <Grid.Col span={{ base: 12, lg: 4 }} pt={400}>
              <Group>
                <div
                  style={{
                    fontSize: "10rem",
                    color: "var(--mantine-color-gray-0)",
                  }}
                >
                  <AnimatedText text={"0" + String(active + 1)} />
                </div>
                <Stack gap="xs">
                  <div
                    className="events-subheader"
                    style={{
                      fontSize: "var(--mantine-font-size-xs)",
                      color: "var(--mantine-color-gray-0)",
                    }}
                  >
                    {events[active]?.subheading}
                  </div>
                  <div
                    className="event-header flex-left"
                    style={{
                      fontSize: "2rem",
                      lineHeight: "2rem",
                      color: "var(--mantine-color-gray-0)",
                    }}
                  >
                    {events[active]?.heading || ""}
                  </div>
                </Stack>
              </Group>

              <Space h="3rem" />

              <SimpleGrid cols={3} spacing="xs">
                {events.map((item: any, index: number) => {
                  return (
                    <motion.div className={classes.eventcard} key={index}>
                      <Paper
                        p={2}
                        pb="xs"
                        onClick={() => {
                          slideChange(index);
                        }}
                      >
                        <Image src={item.image} h={180} />
                      </Paper>
                    </motion.div>
                  );
                })}
              </SimpleGrid>
            </Grid.Col>
          </Grid>
        </Container>

        <Group pos="fixed" bottom={16} right={16} gap={4}>
          <Button color="dark" variant="outline">
            <ArrowArcLeft />
          </Button>
          <Button color="dark">
            <Play />
          </Button>
        </Group>
      </section>
    </>
  );

  return (
    <section className={classes.root}>
      <div
        className={classes.media_background}
        style={{
          backgroundImage: `url(https://images.pexels.com/photos/3835638/pexels-photo-3835638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
        }}
      />
    </section>
  );
}
