"use client";

import { variantContainer } from "@/animation/variantContainer";
import {
  variantGeneral,
  variantGeneralDelay,
} from "@/animation/variantGeneral";
import { AnimatedText } from "@/components/AnimatedText";
import { Container, Grid, Space, Stack, Text } from "@mantine/core";
//animation
import { motion } from "framer-motion";

export function _SectionIntro({ sectionData }: any) {
  const {
    subheading = "About",
    heading = [
      "A team of experts,",
      "radically transforming",
      "events & event planning.",
    ],
    paragraph = [
      `  Targeted sequencing – a significant step in tailored cancer
                  care. But, only a select population have benefited from these
                  advancements.`,
      ` Isabl technology unlocks the full potential of genomic medicine
                  – contributing to the advancement of research aiming to provide
                  better outcomes for every patient.`,
    ],
    image = "https://www.isabl.io/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Fisabl%2F5703e0fd-e020-479e-879e-d1ab462511ab__DSC8366.jpg%3Fauto%3Dcompress%2Cformat&w=3840&q=75",
  } = sectionData;

  return (
    <>
      <Container size="lg" py={100}>
        <div className="event-subheader flex-left">
          <AnimatedText text={subheading} />
        </div>

        <Grid>
          <Grid.Col span={{ base: 12, lg: 6 }}>
            <div className="event-header flex-left">
              {heading.map((item: string, index: number) => (
                <AnimatedText key={index} text={item} />
              ))}
            </div>
          </Grid.Col>

          <Grid.Col span={{ base: 12, lg: 4 }} offset={{ base: 0, lg: 2 }}>
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
      </Container>

      <Container>
        <motion.div
          variants={variantGeneralDelay(0.8)}
          initial="initial"
          whileInView={"visible"}
          viewport={{ once: true }}
        >
          <div
            className="has_clip"
            style={{
              height: 800,
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
            }}
          >
            sds
          </div>
        </motion.div>
      </Container>
    </>
  );
}
