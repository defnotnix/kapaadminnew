"use client";

import { variantContainer } from "@/animation/variantContainer";
import {
  variantGeneral,
  variantGeneralDelay,
} from "@/animation/variantGeneral";
import { AnimatedText } from "@/components/AnimatedText";
import { Container, Grid, Paper, SimpleGrid, Stack, Text } from "@mantine/core";

//animation
import { motion } from "framer-motion";

export function _SectionMission({
  sectionData = {
    subheading: "HOW WE OPERATE",
    heading: ["Hows we,", "make the", "events happen."],
    paragraph: [
      `  Targeted sequencing – a significant step in tailored cancer
                    care. But, only a select population have benefited from these
                    advancements.`,
    ],
    events: [
      `  Targeted sequencing – a significant step in tailored cancer
                      care. But, only a select population have benefited from these
                      advancements.`,
      `  Targeted sequencing – a significant step in tailored cancer
                      care. But, only a select population have benefited from these
                      advancements.`,
      `  Targeted sequencing – a significant step in tailored cancer
                      care. But, only a select population have benefited from these
                      advancements.`,
    ],
    image:
      "https://www.isabl.io/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Fisabl%2F5703e0fd-e020-479e-879e-d1ab462511ab__DSC8366.jpg%3Fauto%3Dcompress%2Cformat&w=3840&q=75",
  },
}: any) {
  const { subheading, heading, paragraph, image, events } = sectionData;
  return (
    <>
      <Paper className="has_clip" bg="var(--color-celebrations-primary-300)">
        <Container size="lg" py={100}>
          <SimpleGrid cols={2} spacing="xl">
            <Stack py={100}>
              <div className="celebration-subheader flex-left">
                <AnimatedText text={subheading} />
              </div>
              <div className="celebration-header flex-left">
                {heading.map((item: string, index: number) => (
                  <AnimatedText key={index} text={item} />
                ))}
              </div>
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

              <SimpleGrid cols={2} spacing="xs" pt={32}>
                {events.map((item: string, index: number) => (
                  <motion.div
                    variants={variantGeneralDelay(0)}
                    initial="initial"
                    whileInView={"visible"}
                    viewport={{ once: true }}
                    key={index}
                  >
                    <Paper bg="none">
                      <div className="celebration-subheader flex-left">
                        <AnimatedText text={"Pre-Event"} />
                      </div>
                      <motion.div
                        style={{
                          fontSize: "var(--mantine-font-size-xs)",
                        }}
                        variants={variantGeneralDelay(0.8)}
                        initial="initial"
                        whileInView={"visible"}
                        viewport={{ once: true }}
                      >
                        {events[0]}
                      </motion.div>
                    </Paper>
                  </motion.div>
                ))}
              </SimpleGrid>
            </Stack>
          </SimpleGrid>
        </Container>
      </Paper>
    </>
  );
}
