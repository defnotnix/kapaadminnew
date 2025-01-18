"use client";

import React, { useEffect, useState } from "react";
//mantine
import {
  Box,
  Center,
  Container,
  Grid,
  Group,
  Image,
  Paper,
  SimpleGrid,
  Stack,
  Text,
} from "@mantine/core";
//icons
import {} from "@phosphor-icons/react";
//motion
import { animate, motion } from "framer-motion";
//styles
//components
import { AnimatedText } from "@/components/AnimatedText";
import {
  variantGeneral,
  variantGeneralDelay,
} from "@/animation/variantGeneral";
//styles
import classes from "./intro.module.css";
//assets
import { _MotionIntroFlower } from "@/assets/svg/intro.flower";
import { variantContainer } from "@/animation/variantContainer";
import { useEventContext } from "@/layouts/events/event.context";

export function _SectionMissionMobile() {
  // * CONTEXT

  const { state } = useEventContext();

  // * STATES

  const [active, setActive] = useState(0);
  const [animateBase, setAnimateBase] = useState(false);

  const [sectionData, setSectionData] = useState<any | null>(null);

  // * PRERENDER

  function getFormattedData() {
    const _dataSource = state.preData?.cms;

    const _phasedata = _dataSource.filter((item: any) =>
      [30, 31, 32].includes(item.id)
    );
    const _eventData = _dataSource.filter((item: any) =>
      [16, 17, 18].includes(item.id)
    );

    const _data = _dataSource.find((item: any) => item.id == 29);

    const _textData = JSON.parse(_data.text);

    return {
      ..._textData,
      heading: [_textData?.heading1, _textData?.heading2, _textData?.heading3],
      paragraph: [_textData?.paragraph1],
      events: _eventData.map((item: any) => {
        return {
          ...item,
          ...JSON.parse(item.text),
        };
      }),
      phases: _phasedata.map((item: any) => {
        const _tdata = JSON.parse(item.text);

        return {
          ...item,
          ..._tdata,
          heading: [_tdata?.heading1, _tdata?.heading2, _tdata?.heading3],
          paragraph: [_tdata?.paragraph1],
        };
      }),
    };
  }

  useEffect(() => {
    console.log(state.preData);
    if (state.preData?.cms?.length > 0) {
      setSectionData(getFormattedData());
    }
  }, []);

  if (!sectionData) {
    return <></>;
  }

  return (
    <>
      <section
        style={{
          position: "relative",
        }}
      >
        <Paper className="has_clip" bg="var(--color-events-primary-300)">
          <Container size="lg" py={100} pos="relative">
            <SimpleGrid cols={{ base: 1, lg: 2 }} spacing="xl">
              <Stack py={100}>
                <div className="event-subheader flex-left">
                  <AnimatedText text={sectionData?.subheading} />
                </div>
                <div className="event-header flex-left">
                  {sectionData?.heading?.map((item: string, index: number) => (
                    <AnimatedText key={index} text={item} />
                  ))}
                </div>
                <motion.div layout variants={variantContainer}>
                  <Stack gap="md">
                    {sectionData?.paragraph?.map(
                      (item: string, index: number) => (
                        <motion.div
                          className="general-text"
                          variants={variantGeneral}
                          initial="initial"
                          whileInView={"visible"}
                          viewport={{ once: true }}
                          key={index}
                        >
                          {sectionData?.paragraph[index]}
                        </motion.div>
                      )
                    )}
                  </Stack>
                </motion.div>

                <SimpleGrid cols={1} spacing="xl" pt={32}>
                  {sectionData?.phases.map((item: any, index: number) => (
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
                          className="event-subheader flex-left"
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
              {sectionData?.events[active]?.detailed_tagline}
            </Text>

            <Stack>
              <Image
                fit="contain"
                h={300}
                src={sectionData?.events[active]?.image}
              />

              <Text
                ta="center"
                size="xl"
                style={{
                  fontFamily:"var(--font-cursive)",
                }}
              >
                {sectionData?.events[active]?.detailed_quote}
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
                  {sectionData?.events[active]?.detailed_services}
                </Text>
              </Group>
            </Stack>
          </Paper>
        </motion.div>
      </section>
    </>
  );
}
