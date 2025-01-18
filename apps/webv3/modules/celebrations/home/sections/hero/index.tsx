"use client";

import React, { useEffect, useState } from "react";
//mantine
import {
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
//context
import { useCelebrationContext } from "@/layouts/celebrations/celebration.context";
//components
import { GlassFrame } from "./components/GlassFrame";
import { MotionLilyLeaf } from "@/assets/svg/hero.flower";
import { AnimatedText } from "@/components/AnimatedText";

//animations

//components

export function _SectionHero() {
  // * CONTEXT

  const { state } = useCelebrationContext();

  // * STATES

  const [active, setActive] = useState(0);
  const [sectionData, setSectionData] = useState<any | null>(null);

  // * ANIMATIONS

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

  // * PRERENDER

  function getFormattedData() {
    const _dataSource = state.preData?.cms;

    const _data = _dataSource?.find((item: any) => item.id == 14);

    const _textData = JSON.parse(_data.text);

    const _eventData = _dataSource?.filter((item: any) => {
      return [10, 11, 12].includes(item.id);
    });

    return {
      ..._textData,

      events: _eventData.map((item: any) => {
        const _parsed = JSON.parse(item.text);

        return {
          ...item,
          ..._parsed,
          heading: _parsed?.heading ? _parsed.heading.split(" ") : [],
        };
      }),
    };
  }

  useEffect(() => {
    if (state.preData?.cms?.length > 0) {
      setSectionData(getFormattedData());
    }
  }, []);

  if (!sectionData) {
    return (
      <section
        style={{
          display: "block",
          height: "100vh",
        }}
      ></section>
    );
  }

  return (
    <section className={classes.root} id="heromain">
      <div
        className={classes.media_background}
        style={{
          backgroundImage: `url(${sectionData?.events[active]?.image})`,
        }}
      />

      <motion.div
        initial={{ opacity: 0, transform: "rotate(0)" }}
        animate={
          sectionData
            ? {
                opacity: 1,
                transform: "rotate(-30deg)",
              }
            : {}
        }
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
                className="celebration-subheader flex-left"
                style={{
                  color: "var(--mantine-color-gray-0)",
                }}
              >
                <AnimatedText text={sectionData?.subheading} />
              </div>

              <div
                className="celebration-header flex-left"
                style={{
                  color: "var(--mantine-color-gray-0)",
                }}
              >
                <AnimatedText text={sectionData?.heading1} />
                <AnimatedText text={sectionData?.heading2} />
                <AnimatedText text={sectionData?.heading3} />
                <AnimatedText text={sectionData?.heading4} />
              </div>

              <div
                className="celebration-subheader flex-left"
                style={{
                  color: "var(--mantine-color-gray-0)",
                  opacity: 0.3,
                }}
              >
                <AnimatedText text={sectionData?.subheading} />
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
              {sectionData?.tagline}
            </Text>
          </Grid.Col>

          <Grid.Col span={{ base: 12, lg: 4 }} pt={400}>
            <Group>
              <div
                style={{
                  fontSize: "10rem",
                  color: "var(--mantine-color-gray-0)",
                  fontFamily: "var(--font-events-heading)",
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
                  {sectionData?.events[active]?.subheading}
                </div>
                <div
                  className="celebration-header flex-left"
                  style={{
                    fontSize: "2rem",
                    lineHeight: "2rem",
                    color: "var(--mantine-color-gray-0)",
                  }}
                >
                  <Stack gap={0}>
                    {sectionData?.events[active]?.heading
                      .filter((e: any) => {
                        return e !== "&";
                      })
                      .map((e: string, index: number) => {
                        return (
                          <div key={index}>
                            {sectionData?.events[active]?.heading[index] ==
                              "&" && "& "}
                            {e}
                          </div>
                        );
                      })}
                  </Stack>
                </div>
              </Stack>
            </Group>

            <Space h="3rem" />

            <SimpleGrid cols={3} spacing="xs">
              {sectionData?.events.map((item: any, index: number) => {
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
    </section>
  );
}
