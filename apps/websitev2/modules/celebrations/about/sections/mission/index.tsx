"use client";

import { variantContainer } from "@/animation/variantContainer";
import {
  variantGeneral,
  variantGeneralDelay,
} from "@/animation/variantGeneral";
import { AnimatedText } from "@/components/AnimatedText";
import {
  Container,
  Grid,
  Group,
  Image,
  Paper,
  SimpleGrid,
  Stack,
  Text,
} from "@mantine/core";

//animation
import { motion } from "framer-motion";
import { useState } from "react";

export function _SectionMission({ sectionData }: any) {
  const [active, sAct] = useState<null | any>(null);
  const [animateBase, setAnimateBase] = useState(false);

  function setActive(value: any) {
    if (value !== active) {
      setAnimateBase(true);
      setTimeout(() => {
        setAnimateBase(false);
        sAct(value);
      }, 500);
    }
  }

  const {
    subheading = "HOW WE OPERATE",
    heading = ["Hows we,", "make the", "events happen."],
    paragraph = [
      `  Targeted sequencing – a significant step in tailored cancer
                    care. But, only a select population have benefited from these
                    advancements.`,
    ],

    phases = [],
    events = [],
    image = "https://www.isabl.io/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Fisabl%2F5703e0fd-e020-479e-879e-d1ab462511ab__DSC8366.jpg%3Fauto%3Dcompress%2Cformat&w=3840&q=75",
  } = sectionData;

  return (
    <>
      <section
        style={{
          position: "relative",
        }}
      >
        <Paper className="has_clip" bg="var(--color-celebrations-primary-300)">
          <Container size="lg" py={100} pos="relative">
            <SimpleGrid cols={{ base: 1, lg: 2 }} spacing="xl">
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

                <SimpleGrid cols={1} spacing="xl" pt={32}>
                  {phases.map((item: any, index: number) => (
                    <motion.div
                      variants={variantGeneralDelay(0)}
                      initial="initial"
                      whileInView={"visible"}
                      viewport={{ once: true }}
                      key={index}
                      onMouseEnter={() => setActive(index)}
                    >
                      <Group wrap="nowrap">
                        <div
                          style={{
                            width: 300,
                          }}
                          className="celebration-subheader flex-left"
                        >
                          <AnimatedText
                            text={
                              index == 0
                                ? "Pre-Event"
                                : index == 1
                                  ? "During-Event"
                                  : "Post-Event"
                            }
                          />
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
                          {item?.description}
                        </motion.div>
                      </Group>
                    </motion.div>
                  ))}
                </SimpleGrid>

                <Text size="xs" opacity={0.5}>
                  HOVER FOR EFFECT
                </Text>
              </Stack>
            </SimpleGrid>
          </Container>
        </Paper>

        <motion.div
          style={{
            position: "absolute",
            top: "20%",
            left: "60%",
            transform: "rotate(-2deg)",
          }}
          initial={{
            opacity: 0,
            x: 50,
          }}
          animate={
            animateBase == false
              ? {
                  opacity: 1,
                  x: 0,
                  transform: "scale(1.05) rotate(-8deg)",
                }
              : {}
          }
        >
          <Paper
            shadow="xl"
            w={450}
            h={600}
            radius="xl"
            p="3rem"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Text size="xs" ta="center" tt="uppercase" fw={700}>
              {active == 0
                ? "Pre-Event"
                : active == 1
                  ? "During-Event"
                  : "Post-Event"}
              <br />
              {events[active]?.detailed_tagline}
            </Text>

            <Stack>
              <Image fit="contain" h={300} src={events[active]?.image} />

              <Text
                ta="center"
                size="xl"
                style={{
                  fontFamily:"var(--font-cursive)",
                }}
              >
                {events[active]?.detailed_quote}
              </Text>
            </Stack>

            <Stack gap="8px">
              <Group justify="center" gap="xs" px="xl">
                <Text
                  style={{
                    lineHeight: "12px",
                  }}
                  size="10px"
                  fw={400}
                  tt="uppercase"
                  ta="center"
                  w={"80%"}
                >
                  {events[active]?.detailed_services}
                </Text>
              </Group>
            </Stack>
          </Paper>
        </motion.div>
      </section>
    </>
  );
}
