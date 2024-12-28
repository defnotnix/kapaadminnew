"use client";

import React, { useEffect, useRef, useState } from "react";
//mantine
import {
  ActionIcon,
  Box,
  Button,
  Center,
  Group,
  Image,
  Overlay,
  Paper,
  Space,
  Stack,
  Text,
  Title,
} from "@mantine/core";
//styles
import classes from "./projects.module.css";
import cx from "clsx";

import { MotionProjectFlower } from "./motion/project.flower";
import {
  ArrowUpRight,
  CaretLeft,
  CaretRight,
  Heart,
} from "@phosphor-icons/react";

import { animate, motion } from "framer-motion";
import { setupFsCheck } from "next/dist/server/lib/router-utils/filesystem";
import { variantGeneralDelay } from "@/animation/variantGeneral";
import { AnimatedText } from "@/components/AnimatedText";

const projects = [
  {
    background: "#BDCCFF",
    titlehead: "Purna Rai",
    titletail: "& Dajubhairharu",
    title: "",
    videourl: "https://www.youtube.com/embed/LgMbITJUdM0?si=tRtybE0arabFUH6U",
  },
];

export function ModuleEventsEvents() {
  // * DEFINITION

  const [active, setActive] = useState(0);
  const [showText, setShowText] = useState(false);

  // * CONTEXT

  //  * ANIMATIONS

  // * STATE

  const animateEntry = () => {
    setTimeout(() => {
      setShowText(true);
    }, 500);
  };

  const animateExit = (index: number) => {
    setTimeout(() => {
      setShowText(false);
    }, 500);
  };

  const animateSwitch = () => {};

  useEffect(() => {
    animateEntry();
  }, []);

  return (
    <>
      <section
        className={classes.root}
        style={{
          transition: ".5s ease-in-out",
          background: `${projects[active].background}aa`,
          position: "relative",
        }}
      >
        <div
          className={cx(classes.video_container, classes.has_clip)}
          style={{
            background: `${projects[active].background}`,
          }}
        >
          <iframe
            src={
              projects[active].videourl +
              "&autoplay=1&loop=1&controls=0&mute=1&hd=1&start=0"
            }
            title="YouTube video player"
            allow="autoplay; loop; mute"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className={classes.hero_video}
          />

          <Overlay
            style={{
              zIndex: 5,
            }}
          />

          <Group
            justify="flex-start"
            align="flex-end"
            h={"calc(100vh)"}
            w="100%"
            pos="absolute"
            p="4rem"
            style={{
              zIndex: 5,
              bottom: 0,
              left: 0,
            }}
          >
            <Title
              size="5rem"
              fw={600}
              c={"var(--mantine-color-gray-0)"}
              style={{
                display: "flex",
                lineHeight: "5rem",
                flexDirection: "column",
                alignItems: "flex-start",
                fontFamily: "var(--font-events-heading)",
              }}
            >
              <AnimatedText
                animate={showText}
                text={projects[active].titlehead}
              />
              <Group>
                <AnimatedText
                  animate={showText}
                  text={projects[active].titletail}
                />
              </Group>
            </Title>
          </Group>
        </div>
        <div className={classes.actions}>
          <Stack>
            <motion.div
              variants={variantGeneralDelay(0.1)}
              initial="initial"
              animate={showText ? "visible" : ""}
            >
              <Text size="xs" opacity={0.6} ta="right">
                Hosted at Magical Venue in Gairidhara, Kathmandu
                <br />
                24 May, 2022
              </Text>
            </motion.div>
            <Space h="sm" />
            <motion.div
              variants={variantGeneralDelay(0.2)}
              initial="initial"
              animate={"visible"}
            >
              <Group>
                <Button
                  size="xl"
                  variant="white"
                  color="var(--color-events-primary-500)"
                  tt="uppercase"
                  fw={600}
                  rightSection={<ArrowUpRight />}
                >
                  View full details
                </Button>
                <ActionIcon
                  size={62}
                  variant="light"
                  color="var(--color-events-primary-500)"
                  onClick={() => {
                    animateExit(0);
                  }}
                >
                  <CaretLeft />
                </ActionIcon>
                <ActionIcon
                  onClick={() => {
                    animateExit(1);
                  }}
                  size={62}
                  variant="white"
                  color="var(--color-events-primary-500)"
                >
                  <CaretRight />
                </ActionIcon>
              </Group>
            </motion.div>
          </Stack>
        </div>
      </section>
    </>
  );
}
