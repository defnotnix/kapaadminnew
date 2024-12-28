"use client";

import React, { useEffect, useRef, useState } from "react";
//mantine
import {
  Box,
  Center,
  Container,
  Group,
  Image,
  Loader,
  Paper,
  SimpleGrid,
  Space,
  Stack,
  Text,
} from "@mantine/core";
//styles
import cx from "clsx";
import classes from "./entry.module.css";
//images
import imgLogoCelebration from "@/assets/images/brand/celebrations.png";
import imgLogoEvents from "@/assets/images/brand/events.png";
import imgLogoSocieties from "@/assets/images/brand/societies.png";
import imgLogoCreations from "@/assets/images/brand/creations.png";
import imgMain from "@/assets/images/brand/theclassics.png";
//motion
import { AnimatePresence, motion, useTime } from "framer-motion";
import { useRouter } from "next/navigation";

import { animate } from "framer-motion";
import { useHover } from "@mantine/hooks";

import { _MotionIntroFlower } from "./motion/intro.flower";

const branches = [
  {
    id: 1,
    label: "Celebrations",
    description: "Celebrations with your loved ones",
    quote: "For your cherished moments",
    url: "/celebrations",
    image: imgLogoCelebration,
    background: "var(--color-celebrations-cream)",
  },
  {
    id: 2,
    label: "Events",
    description: "Memorable events to cherish forever",
    quote: "For Your Public and Corporate Events",
    url: "/events",
    image: imgLogoEvents,
    background: "var(--mantine-color-brand-0)",
  },
  {
    id: 3,
    label: "Societies",
    description: "Connecting communities worldwide",
    quote: "For Unique Event Goods & Décor",
    url: "/societies",
    image: imgLogoSocieties,
    background: "var(--mantine-color-sky-3)",
  },
  {
    id: 4,
    label: "Creations",
    description: "Innovative designs and masterpieces",
    quote: "For Meaningful Social Causes",
    url: "/creative",
    image: imgLogoCreations,
  },
];

export function ModuleEntry() {
  // * DECLARATIONS

  const Router = useRouter();

  // * DEFINITIONS

  const overlayRef = useRef(null);
  const mainRef = useRef(null);

  // * CONTEXTS

  // * FUNCTIONS

  useEffect(() => {
    setTimeout(() => {
      animate(mainRef.current, {
        display: "block",
      });
    }, 2000);
    setTimeout(() => {
      animate(overlayRef.current, {
        display: "none",
      });
    }, 3000);
  }, []);

  // * ANIMATION

  // * COMPONENTS

  const renderCompanyItems = branches.map((company, index) => {
    const { hovered, ref } = useHover();

    useEffect(() => {
      setTimeout(() => {}, 3000);
    }, []);

    return (
      <motion.div key={index} ref={ref}>
        <div
          className={classes.companyBox}
          onClick={() => {
            setTimeout(() => {
              Router.push(company.url);
            }, 1000);
          }}
        >
          <Text size="xs"></Text>
          <Stack>
            <Center h={100}>
              <Image src={company.image.src} h={100} />
            </Center>

            <Stack gap={0}>
              <Text tt="uppercase" ta="center" size="sm">
                KaPa
              </Text>
              <Text
                tt="uppercase"
                ta="center"
                size="lg"
                fw={600}
                style={{
                  letterSpacing: "4px",
                }}
              >
                {company.label}
              </Text>
            </Stack>
          </Stack>

          <Stack>
            <Text
              ta="center"
              size="xs"
              fw={600}
              className={classes.branchQuote}
            >
              {company.quote}
            </Text>
          </Stack>
        </div>

        {index == 0 && (
          <AnimatePresence>
            {hovered && (
              <div
                key={index + 2}
                style={{
                  position: "absolute",
                  left: -460,
                  top: 300,
                  zIndex: 10,
                }}
              >
                <_MotionIntroFlower />
              </div>
            )}

            {hovered && (
              <div
                key={index + 3}
                style={{
                  position: "absolute",
                  right: -460,
                  top: 300,
                  transform: "rotate(180deg)",
                  zIndex: 10,
                }}
              >
                <_MotionIntroFlower />
              </div>
            )}
          </AnimatePresence>
        )}

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: hovered ? 1 : 0 }}
          style={{
            position: "absolute",
            top: 0,
            left: "-100vw",
            width: "300vw",
            height: "100vh",
            overflow: "hidden",
            zIndex: 0,
            background: company.background || "",
          }}
        />
      </motion.div>
    );
  });

  const renderMobile = branches.map((company, index) => {
    return (
      <Stack key={index}>
        <Center h={100}>
          <Image src={company.image.src} h={50} />
        </Center>

        <Stack gap={0}>
          <Text tt="uppercase" ta="center" size="xs">
            KaPa
          </Text>
          <Text
            tt="uppercase"
            ta="center"
            size="10px"
            fw={600}
            style={{
              letterSpacing: "4px",
            }}
          >
            {company.label}
          </Text>
        </Stack>
      </Stack>
    );
  });

  return (
    <div>
      <motion.section
        ref={overlayRef}
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ delay: 2 }}
      >
        <section className={classes.animationOverlay}>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {Array.from({ length: 11 }).map((_, index) => (
              <motion.div
                key={index}
                animate={{
                  x: (index - 4) * 180,

                  opacity: 1 - Math.abs((index - 5) / 5),
                }}
                transition={{
                  delay: 1,
                }}
              >
                <Paper
                  key={index}
                  className={classes.loaderCircle}
                  style={{
                    background:
                      index == 4
                        ? "var(--mantine-color-gray-0)"
                        : "var(--mantine-color-gray-3)",
                  }}
                >
                  <Center>{index == 4 && <Image src={imgMain.src} />}</Center>
                </Paper>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 1,
            }}
          >
            <Group
              style={{
                position: "absolute",
                top: "2rem",
                marginLeft: "-40px",
              }}
            >
              <Text size="xs" tt="uppercase" fw={600}>
                The Classics Projects
              </Text>
            </Group>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 1,
            }}
          >
            <Text
              size="xs"
              tt="uppercase"
              fw={600}
              style={{
                position: "absolute",
                bottom: "2rem",
                marginLeft: "-40px",
              }}
            >
              The Classics Projects
            </Text>
          </motion.div>
        </section>
      </motion.section>

      <motion.section
        ref={mainRef}
        initial={{ opacity: 0, display: "none" }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
      >
        <section className={classes.root}>
          <Container size="md">
            <Box
              h="20vh"
              style={{
                position: "absolute",
                zIndex: 11,
                width: "100vw",
                left: 0,
                top: 0,
              }}
            >
              <Stack pt="xl">
                <Center>
                  <Image h={50} src={imgMain.src} />
                </Center>
                <Text
                  fw={600}
                  size="xs"
                  ta="center"
                  style={{
                    letterSpacing: "2px",
                  }}
                >
                  CLASSICS PROJECTS
                </Text>

                <Space h={{ base: 0, lg: "xl" }} />

                <Group justify="center" visibleFrom="lg">
                  <Text size="md">WE CREATE, YOU</Text>
                  <Text
                    size="2.7rem"
                    style={{
                      fontFamily: "WindSong",
                    }}
                  >
                    celebrate
                  </Text>
                </Group>

                <Group justify="center" hiddenFrom="lg">
                  <Text size="xs">WE CREATE, YOU</Text>
                  <Text
                    size="1.5rem"
                    style={{
                      fontFamily: "WindSong",
                    }}
                  >
                    celebrate
                  </Text>
                </Group>
              </Stack>
            </Box>

            <AnimatePresence>
              <SimpleGrid
                key={"1"}
                visibleFrom="lg"
                pt="20vh"
                pos="relative"
                style={{
                  zIndex: 10,
                }}
                cols={{ base: 1, lg: 4 }}
              >
                {renderCompanyItems}
              </SimpleGrid>

              <SimpleGrid key={"2"} cols={1} hiddenFrom="lg" pt={200}>
                {renderMobile}
              </SimpleGrid>
            </AnimatePresence>
          </Container>
        </section>
      </motion.section>
    </div>
  );
}
