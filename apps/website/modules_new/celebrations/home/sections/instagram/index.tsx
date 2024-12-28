"use client";

import React, { useEffect } from "react";
//next
import { useRouter } from "next/navigation";
//mantine
import {
  Container,
  Grid,
  Paper,
  SimpleGrid,
  Space,
  Stack,
  Text,
  Title,
} from "@mantine/core";
//styles
import cx from "clsx";
import classes from "./instagram.module.css";
import { AnimatedText } from "@/components/AnimatedText";
import { motion } from "framer-motion";
import {
  variantGeneral,
  variantGeneralDelay,
} from "@/animation/variantGeneral";
import { useHover, useWindowScroll } from "@mantine/hooks";
import { MotionHeroFlower } from "./motion/hero.flower";
import { variantContainer } from "@/animation/variantContainer";

function RenderCards() {
  const { hovered, ref } = useHover();
  return (
    <Container
      size="xl"
      mt={{ base: 0, lg: -100 }}
      ref={ref}
      pos="relative"
      h={900}
    >
      <SimpleGrid cols={3}>
        <motion.div
          variants={variantGeneralDelay(0.1)}
          initial="initial"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <Paper
            px="xs"
            pb="md"
            pt="xs"
            shadow="lg"
            radius="lg"
            mt={{ base: 0, lg: 220 }}
            style={{
              transition: ".3s ease-in-out",
              position: "absolute",
              top: !hovered ? 50 : 0,
              left: !hovered ? 200 : 0,
              transform: !hovered ? "rotate(-10deg)" : "rotate(-20deg)",
              cursor: "pointer",
              background:
                "url(https://images.prismic.io/marie-guillaume/c817cf24-866b-4d09-be81-c4b976630a06_Charlotte-et-Maxime-Ilede-Re-01.jpg?fm=webp&w=1400&q=auto)",
              backgroundSize: "cover",
            }}
            h={500}
            w="33.33%"
          ></Paper>
        </motion.div>
        <motion.div
          variants={variantGeneralDelay(0.2)}
          initial="initial"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <Paper
            px="xs"
            pb="md"
            pt="xs"
            shadow="lg"
            radius="lg"
            style={{
              transition: ".3s ease-in-out",
              position: "absolute",
              cursor: "pointer",
              background:
                "url(https://images.prismic.io/marie-guillaume/c359fe54-bd2b-416d-8e4d-311de8fda5b8_Charlotte-et-Maxime-Ilede-Re-04.jpg?fm=webp&w=900&q=auto)",
              backgroundSize: "cover",
            }}
            h={500}
            w="33.33%"
            mt={{ base: 0, lg: 100 }}
          ></Paper>
        </motion.div>
        <motion.div
          variants={variantGeneralDelay(0.3)}
          initial="initial"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <Paper
            shadow="lg"
            radius="lg"
            h={500}
            style={{
              transition: ".3s ease-in-out",
              position: "absolute",
              top: !hovered ? -30 : 0,
              transform: !hovered ? "rotate(8deg)" : "rotate(10deg)",
              right: !hovered ? 200 : 0,
              cursor: "pointer",
              background:
                "url(https://images.prismic.io/marie-guillaume/bf358c33-1910-45d4-afe5-8ddc5e00cf0e_Charlotte-et-Maxime-Ilede-Re-15.jpg?fm=webp&w=1400&q=auto)",
              backgroundSize: "cover",
            }}
            w="33.33%"
          ></Paper>
        </motion.div>
      </SimpleGrid>
    </Container>
  );
}

export function SectionInstagram({
  sectionData = {
    subheading: "The Approach",
    heading: [
      "A team of experts,",
      "radically transforming",
      "events & event planning.",
    ],
    paragraph: [
      `  Targeted sequencing – a significant step in tailored cancer
                  care. But, only a select population have benefited from these
                  advancements.`,
      ` Isabl technology unlocks the full potential of genomic medicine
                  – contributing to the advancement of research aiming to provide
                  better outcomes for every patient.`,
    ],
    image:
      "https://www.isabl.io/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Fisabl%2F5703e0fd-e020-479e-879e-d1ab462511ab__DSC8366.jpg%3Fauto%3Dcompress%2Cformat&w=3840&q=75",
  },
}: any) {
  const { subheading, heading, paragraph, image } = sectionData;

  // * DEFINITIONS

  const Router = useRouter();

  // * CONTEXTS

  // * STATES

  // * PRELOADING

  // * FUNCTIONS

  // * COMPONENTS

  return (
    <>
      <Container size="xl" py={100} pos="relative">
        <div className="celebration-subheader flex-left">
          <AnimatedText text={subheading} />
        </div>
        <Grid my="xl" gutter="xl">
          <Grid.Col span={{ base: 12, lg: 6 }}>
            <div className="celebration-header flex-left">
              {heading.map((item: string, index: number) => (
                <AnimatedText key={index} text={item} />
              ))}
            </div>
          </Grid.Col>
          <Grid.Col span={{ base: 12, lg: 5 }} offset={{ base: 0, lg: 1 }}>
            <motion.div layout variants={variantContainer}>
              <Stack gap="md">
                {paragraph.map((item: string, index: number) => (
                  <motion.div
                    className="general-text"
                    variants={variantGeneral}
                    initial="initial"
                    whileInView={"visible"}
                    viewport={{ once: true }}
                    key={index}
                  >
                    {paragraph[index]}
                  </motion.div>
                ))}
              </Stack>
            </motion.div>
          </Grid.Col>
        </Grid>

        <Space h="xl" />

        <section className={classes.flower_content}>
          <MotionHeroFlower />
        </section>
        <section className={classes.flower_content_bot}>
          <MotionHeroFlower />
        </section>
      </Container>

      <RenderCards />
    </>
  );
}
