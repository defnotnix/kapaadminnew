"use client";

import React, { useEffect, useState } from "react";
//mantine
import {
  Box,
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
import classes from "./mobile.module.css";
import cx from "clsx";
//components
import { GlassFrame } from "../components/GlassFrame";
import { MotionLilyLeaf } from "@/assets/svg/hero.flower";
import { AnimatedText } from "@/components/AnimatedText";
import { useEventContext } from "@/layouts/events/event.context";
//animations

//components

export function _SectionHeroMobile() {
  // * CONTEXT

  const { state } = useEventContext();

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
      return [44, 45, 46].includes(item.id);
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
    return <></>;
  }

  return (
    <section className={classes.root} id="heromain">
      <div
        className={classes.media_background}
        style={{
          backgroundImage: `url(${sectionData?.events[active]?.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <motion.div
        initial={{ opacity: 0, transform: "rotate(0)" }}
        id="flower_container"
        className={classes.glass_frame_container}
        style={{
          transform: "rotate(0)",
        }}
      >
        <div
          className={classes.glass_frame_top}
          style={{
            transform: "scale(2) rotate(180deg)",
          }}
        >
          <GlassFrame />
        </div>
        <div
          className={classes.glass_frame_bot}
          style={{
            transform: "scale(2)",
          }}
        >
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
                <AnimatedText text={sectionData?.subheading} />
              </div>

              <div
                className="event-header flex-left"
                style={{
                  color: "var(--mantine-color-gray-0)",
                  fontSize: "2.5rem",
                  lineHeight: "3rem",
                }}
              >
                <AnimatedText text={sectionData?.heading1} />
                <AnimatedText text={sectionData?.heading2} />
                <AnimatedText text={sectionData?.heading3} />
                <AnimatedText text={sectionData?.heading4} />
              </div>
            </Stack>
          </Grid.Col>
        </Grid>

        <Box
          style={{
            position: "absolute",
            top: "calc(100vh - 300px)",
          }}
        >
          <Group align="flex-start">
            <div
              style={{
                fontSize: "2rem",
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
                {sectionData?.events[active]?.subheading}
              </div>
              <div
                className="event-header flex-left"
                style={{
                  fontSize: "2rem",
                  lineHeight: "2rem",
                  color: "var(--mantine-color-gray-0)",
                }}
              >
                {sectionData?.events[active]?.heading || ""}
              </div>
            </Stack>
          </Group>
        </Box>

        <SimpleGrid
          cols={3}
          spacing="xs"
          style={{
            position: "absolute",
            top: "calc(100vh - 200px)",
          }}
        >
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
      </Container>
    </section>
  );
}
