"use client";

import React, { useState } from "react";

//mantine
import {
  Box,
  Center,
  Container,
  Grid,
  Image,
  Paper,
  Space,
  Stack,
  Text,
} from "@mantine/core";
import { useInViewport, useWindowScroll } from "@mantine/hooks";
//animation
import { variantContainer } from "@/animation/variantContainer";
import { AnimatedText } from "@/components/AnimatedText";
//styles
import classes from "./phase.module.css";
import cx from "clsx";
//framer
import { motion } from "framer-motion";
import { MotionPhaseFlowerMain } from "@/animation/svg/phase.flowermain";
import { MotionPhaseFlowerRight } from "@/animation/svg/phase.flowerright";
//assets

const old_sectionData = {
  subheading: "WE L.E.A.D. - LISTEN, EXECUTE, ANTICIPATE & DELIVER",
  title: [
    "From Dreamy Beginnings to Joyful",
    "Endings - We perfect every monment",
    "before, during & after.",
  ],
  images: [
    "https://media2.giphy.com/media/SplixfSo45RzpeqrBY/giphy.gif?cid=6c09b952ieokiq2g0yno39y4ktqi47512r7d7nga031pp1fq&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g",
    "https://arabiaweddings.wordpress.com/wp-content/uploads/2014/08/3.gif",
    "https://media-api.xogrp.com/images/f0e052c7-886a-461d-bbe1-ca5536c655ed~rs_768.h",
  ],
  phaseInfo: [
    "We plan with precision, understanding your vision to bring every detail to life.",
    "We plan with precision, understanding your vision to bring every detail to life.",
    "We plan with precision, understanding your vision to bring every detail to life.",
  ],
  phasePhoto: [
    [
      "https://images.prismic.io/marie-guillaume/83fab8b1-97be-4cb8-8938-87578d0428e2_Coralie-et-Alexandre-Marrakech-01.jpg?fm=webp&w=500&q=auto",
      "https://images.prismic.io/marie-guillaume/37adbc45-0de0-42c4-9440-28f25f789917_Coralie-et-Alexandre-Marrakech-23.jpg?fm=webp&w=500&q=auto",
    ],
    [
      "https://images.prismic.io/marie-guillaume/83fab8b1-97be-4cb8-8938-87578d0428e2_Coralie-et-Alexandre-Marrakech-01.jpg?fm=webp&w=500&q=auto",
      "https://images.prismic.io/marie-guillaume/37adbc45-0de0-42c4-9440-28f25f789917_Coralie-et-Alexandre-Marrakech-23.jpg?fm=webp&w=500&q=auto",
    ],
    [
      "https://images.prismic.io/marie-guillaume/83fab8b1-97be-4cb8-8938-87578d0428e2_Coralie-et-Alexandre-Marrakech-01.jpg?fm=webp&w=500&q=auto",
      "https://images.prismic.io/marie-guillaume/37adbc45-0de0-42c4-9440-28f25f789917_Coralie-et-Alexandre-Marrakech-23.jpg?fm=webp&w=500&q=auto",
    ],
  ],
};

export function SectionPhase({ sectionData }: any) {
  // * DEFINITIONS

  const refPhotoLeft = React.useRef(null);

  const refPhotoRight = React.useRef(null);

  // * STATES

  const [active, setActive] = useState(0);

  const PhaseShowcase = () => {
    return (
      <motion.div
        initial={{
          opacity: 0,
          transform: "translateY(100px)",
        }}
        whileInView={{
          opacity: 1,
          transform: "translateY(0px)",
        }}
        viewport={{ once: true }}
      >
        <Paper
          withBorder
          p="4px"
          radius="md"
          w="100%"
          pos="absolute"
          style={{
            zIndex: 2,
            top: 0,
            left: 0,
            transform: "rotate(1deg)",
          }}
        >
          <Image
            radius="md"
            src={sectionData?.phase[active]?.image}
            h={600}
            w="100%"
          />
          <Center
            h={600}
            w="100%"
            style={{
              position: "absolute",
              top: 0,
              zIndex: 3,
            }}
          >
            <Paper
              h={120}
              w={120}
              radius={120}
              bg="none"
              className={classes.showcase_circle}
            />
          </Center>
          <Text ta="center" size="xs" py="xs">
            {active == 0 ? "PRE-EVENT" : active == 1 ? "DURING" : "POST-EVENT"}
          </Text>
        </Paper>
      </motion.div>
    );
  };

  return (
    <section className={classes.root}>
      <Container
        py={{
          base: 100,
          lg: 160,
        }}
        pos="relative"
      >
        <Grid gutter={"2rem"} pt="5rem">
          <Grid.Col
            span={{ base: 12, lg: 2 }}
            offset={{ base: 0, lg: 2 }}
            pt={100}
          >
            <Box
              className={classes.phasebox}
              opacity={active == 0 ? 1 : 0.3}
              style={{
                transition: ".3s ease-in-out",
              }}
            >
              <Stack gap="xs">
                <Text
                  size="sm"
                  fw={700}
                  ta="right"
                  c="var(--color-celebrations-primary-700)"
                >
                  PRE-EVENT
                </Text>
                <Text size="xs" ta="right">
                  {sectionData?.phase[0]?.text}
                </Text>
              </Stack>
            </Box>

            <Space h={300} />

            <Box
              className={classes.phasebox}
              opacity={active == 2 ? 1 : 0.3}
              style={{
                transition: ".3s ease-in-out",
              }}
            >
              <Stack gap="xs">
                <Text size="xs" ta="right">
                  {sectionData?.phase[2]?.text}
                </Text>
                <Text
                  size="sm"
                  fw={600}
                  ta="right"
                  c="var(--color-celebrations-primary-700)"
                >
                  POST-EVENT
                </Text>
              </Stack>
            </Box>
          </Grid.Col>
          <Grid.Col span={{ base: 12, lg: 4 }} pos="relative">
            <PhaseShowcase />
            <div className={classes.flowerRight}>
              <MotionPhaseFlowerRight />
            </div>
          </Grid.Col>
          <Grid.Col span={{ base: 12, lg: 2 }}>
            <Box
              opacity={active == 1 ? 1 : 0.3}
              style={{
                transition: ".3s ease-in-out",
              }}
            >
              <Stack gap="xs" pt={200}>
                <Text
                  size="sm"
                  fw={600}
                  c="var(--color-celebrations-primary-700)"
                >
                  DURING
                </Text>
                <Text size="xs"> {sectionData?.phase[1]?.text}</Text>
              </Stack>
            </Box>
          </Grid.Col>
        </Grid>

        <Space h={100} />
      </Container>

      <div className={classes.flower_container}>
        <MotionPhaseFlowerMain />
      </div>

      <section className={classes.photo_overlay}>
        <div className={classes.overlay_left}>
          <motion.div
            initial={{
              x: -600,
            }}
            animate={{
              x: 10,
              transform: "rotate(4deg)",
            }}
            viewport={{ once: true }}
          >
            <Paper withBorder p="2px" pb="md" pos="absolute">
              <Image
                src={old_sectionData?.phasePhoto[active][0]}
                h={300}
                w={250}
              />
            </Paper>
          </motion.div>
        </div>

        <div className={classes.overlay_right}>
          <motion.div
            initial={{
              x: 800,
            }}
            animate={{
              x: 10,
              transform: "rotate(-8deg)",
            }}
            viewport={{ once: true }}
          >
            <Paper
              withBorder
              p="2px"
              pb="md"
              pos="absolute"
              style={{
                right: 0,
              }}
            >
              <Image
                src={old_sectionData?.phasePhoto[active][1]}
                h={300}
                w={250}
              />
            </Paper>
          </motion.div>
        </div>
      </section>
    </section>
  );
}
