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

export function _SectionMissionMobile({ sectionData }: any) {
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
        <Paper bg="var(--color-celebrations-primary-300)">
          <Container size="lg" py={0} pos="relative">
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

                <Stack pt={32}>
                  {Array.from({ length: 3 }).map((item: any, index: number) => (
                    <Paper
                      key={index}
                      shadow="xl"
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
                        {events[index]?.detailed_tagline}
                      </Text>

                      <Stack>
                        <Image
                          fit="contain"
                          h={300}
                          src={events[index]?.image}
                        />

                        <Text
                          ta="center"
                          size="xl"
                          style={{
                            fontFamily:"var(--font-cursive)",
                          }}
                        >
                          {events[index]?.detailed_quote}
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
                            {events[index]?.detailed_services}
                          </Text>
                        </Group>
                      </Stack>
                    </Paper>
                  ))}
                </Stack>
              </Stack>
            </SimpleGrid>
          </Container>
        </Paper>
      </section>
    </>
  );
}
