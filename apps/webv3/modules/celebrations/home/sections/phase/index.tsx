"use client";

import React, { useEffect, useState } from "react";
//mantine
import {
  ActionIcon,
  Box,
  Center,
  Container,
  Divider,
  Group,
  Image,
  Paper,
  SimpleGrid,
  Space,
  Stack,
  Text,
} from "@mantine/core";
//icons
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
//motion
import { animate, motion } from "framer-motion";
//styles
import { useCelebrationContext } from "@/layouts/celebrations/celebration.context";
//components
import { AnimatedText } from "@/components/AnimatedText";
import { variantGeneralDelay } from "@/animation/variantGeneral";
//styles
import classes from "./phase.module.css";
//assets
import { _MotionIntroFlower } from "@/assets/svg/intro.flower";
import { MotionLilyLeaf } from "@/assets/svg/hero.flower";

const colorTheory = [
  {
    light: "#F1B4B5",
    dark: "linear-gradient( -45deg, var(--color-celebrations-primary-900), var(--color-celebrations-primary-600) )",
    card: "#C15556",
  },
  {
    light: "#FCC696",
    dark: "linear-gradient( -45deg, #201614, #745944 )",
    card: "#806A58",
  },
  {
    light: "#F2B79D",
    dark: "linear-gradient( -45deg, #221004,#EE7D32 )",
    card: "#BA6933",
  },
];

export function _SectionPhase() {
  // * CONTEXT

  const { state } = useCelebrationContext();

  // * STATES

  const [active, sActive] = useState(0);
  const [animateBase, setAnimateBase] = useState(false);

  const [sectionData, setSectionData] = useState<any | null>(null);

  // * PRERENDER

  function getFormattedData() {
    const _dataSource = state.preData?.cms;

    const _data = _dataSource.filter((item: any) =>
      [16, 17, 18].includes(item.id)
    );

    return {
      phases: _data.map((item: any) => {
        const _textData = JSON.parse(item.text);

        return {
          ...item,
          ..._textData,
        };
      }),
    };
  }

  // * FUNCTION

  function setActive(value: any) {
    if (value !== active) {
      setAnimateBase(true);
      setTimeout(() => {
        setAnimateBase(false);
        sActive(value);
      }, 500);
    }
  }

  const animateLeft = {
    initial: {
      x: "90%",
    },
    animate: {
      x: 0,
    },
  };
  const animateRight = {
    initial: {
      x: "-90%",
    },
    animate: {
      x: 0,
    },
  };

  const animateMid = {
    initial: {},
    animate: {
      y: -32,
    },
  };

  useEffect(() => {
    setAnimateBase(false);
    setTimeout(() => {
      setActive(0);
    }, 1000);

    if (state.preData?.cms?.length > 0) {
      setSectionData(getFormattedData());
    }
  }, []);

  if (!sectionData) {
    return <></>;
  }

  return (
    <section
      className={classes.root}
      style={{
        width: "100vw",
        overflow: "hidden",
      }}
    >
      <Container py={100} visibleFrom="lg">
        <SimpleGrid cols={3} spacing="xs">
          <motion.div
            variants={animateLeft}
            initial="initial"
            animate={animateBase == false ? "animate" : {}}
          >
            <Paper
              h={650}
              id="phasecard-left"
              pos="relative"
              py="3rem"
              px="5rem"
              className={classes.designcard}
              radius="xl"
              style={{
                zIndex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                transform: "rotate(-5deg)",
                background: colorTheory[active]?.dark,
              }}
            >
              <Stack gap={8}>
                <Group
                  align="flex-start"
                  style={{
                    position: "relative",
                    zIndex: 3,
                  }}
                >
                  <Text size={"8px"} c="gray.0" tt="uppercase" w={50}>
                    {sectionData?.phases[active]?.quote1}
                  </Text>

                  <Text size={"8px"} c="gray.0" tt="uppercase" w={50}>
                    {sectionData?.phases[active]?.quote2}
                  </Text>

                  <Text size={"8px"} c="gray.0" tt="uppercase" w={50}>
                    {sectionData?.phases[active]?.quote3}
                  </Text>

                  <Text size={"8px"} c="gray.0" tt="uppercase" w={50}>
                    {sectionData?.phases[active]?.quote4}
                  </Text>
                </Group>

                <Text size={"8px"} c="gray.0" ta="right">
                  THE CLASSICS PROJECTS
                </Text>

                <Divider opacity={0.5} />
              </Stack>

              <Stack
                gap="3rem"
                style={{
                  lineHeight: "2rem",
                  position: "relative",
                  zIndex: 3,
                }}
              >
                <Text
                  size="2rem"
                  style={{
                    lineHeight: "2rem",
                  }}
                  tt="uppercase"
                  fw={200}
                  c="yellow.3"
                >
                  {sectionData?.phases[active]?.quote1}
                </Text>

                <Text
                  tt="uppercase"
                  ta="center"
                  size="2rem"
                  style={{
                    lineHeight: "2rem",
                    letterSpacing: "1rem",
                  }}
                  fw={200}
                  c="yellow.3"
                >
                  {sectionData?.phases[active]?.tagline_main}
                </Text>

                <Group justify="flex-end">
                  <Text
                    tt="uppercase"
                    ta="right"
                    size="1rem"
                    style={{
                      lineHeight: "1rem",
                    }}
                    fw={200}
                    c="gray.0"
                    w={100}
                  >
                    {sectionData?.phases[active]?.quote2}
                  </Text>
                </Group>
              </Stack>

              <div
                className={classes.window_oval}
                style={{
                  background:
                    colorTheory[active]?.card || colorTheory[active]?.light,
                }}
              />
              <div
                className={classes.window_rect}
                style={{
                  background:
                    colorTheory[active]?.card || colorTheory[active]?.light,
                }}
              />

              <Stack
                style={{
                  position: "relative",
                  zIndex: 3,
                }}
              >
                <Group>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Text key={index} size="8px" c="gray.0" opacity={0.5}>
                      PHASE
                    </Text>
                  ))}
                </Group>

                <Group>
                  <Text size="md" c="gray.0">
                    01
                  </Text>
                  <Divider w={80} />
                  <Text size="md" c="gray.0" opacity={0.3}>
                    02
                  </Text>
                  <Text size="md" c="gray.0" opacity={0.5}>
                    03
                  </Text>
                </Group>
              </Stack>
            </Paper>
          </motion.div>

          <motion.div
            style={{
              zIndex: 2,
            }}
            variants={animateMid}
            initial="initial"
            animate={animateBase == false ? "animate" : {}}
          >
            <Paper
              shadow="xl"
              id="phasecard-mid"
              p="3rem"
              radius="xl"
              pos="relative"
              bg={colorTheory[active]?.light}
              h={650}
              style={{
                transition: ".3 s ease-in-out",
              }}
            >
              <Stack>
                <Text size="xs">HOW WE OPERATE</Text>

                <div
                  className="celebration-header flex-left"
                  style={{
                    fontSize: "2.5rem",
                    lineHeight: "3rem",
                  }}
                >
                  <AnimatedText text="Mastering the three" />
                  <AnimatedText text="phases of event" />
                  <AnimatedText text="planning. To host" />
                  <AnimatedText
                    text="the
              perfect event."
                  />
                </div>
              </Stack>

              <Space h={300} />

              <div className={classes.flower_svg}>
                <MotionLilyLeaf />
              </div>
            </Paper>
          </motion.div>

          <motion.div
            variants={animateRight}
            initial="initial"
            animate={animateBase == false ? "animate" : {}}
            transition={{
              delay: 0.1,
            }}
          >
            <Paper
              id="phasecard-right"
              radius="xl"
              p="3rem"
              style={{
                zIndex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                transform: "rotate(5deg)",
              }}
              h={650}
            >
              <Text size="xs" ta="center" tt="uppercase" fw={700}>
                {active == 0
                  ? "Pre-Event"
                  : active == 1
                    ? "During-Event"
                    : "Post-Event"}
                <br />
                {sectionData?.phases[active]?.detailed_tagline}
              </Text>

              <Stack>
                <Image
                  fit="contain"
                  h={300}
                  src={sectionData?.phases[active]?.image}
                />

                <Text
                  ta="center"
                  size="xl"
                  style={{
                    fontFamily:"var(--font-cursive)",
                  }}
                >
                  {sectionData?.phases[active]?.detailed_quote}
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
                    {sectionData?.phases[active]?.detailed_services}
                  </Text>
                </Group>
              </Stack>
            </Paper>
          </motion.div>
        </SimpleGrid>

        <Group justify="center" mt="xl">
          <ActionIcon
            color="var(--color-celebrations-primary-500)"
            disabled={active == 0}
            variant="subtle"
            onClick={() => {
              setActive(active - 1);
            }}
          >
            <CaretLeft />
          </ActionIcon>

          <Group
            gap="0"
            opacity={active == 0 ? 1 : 0.3}
            onClick={() => {
              setActive(0);
            }}
            style={{
              cursor: "pointer",
            }}
          >
            <Text size="sm" fw={600}>
              01
            </Text>
            <motion.div
              style={{
                height: 20,
                overflow: "hidden",
              }}
              initial={{
                width: 0,
                opacity: 0,
              }}
              animate={
                active == 0
                  ? {
                      width: 100,
                      opacity: 1,
                    }
                  : {}
              }
            >
              <Text size="sm" fw={600} pos="absolute">
                - PRE-EVENT
              </Text>
            </motion.div>
          </Group>

          <Group
            gap="0"
            opacity={active == 1 ? 1 : 0.3}
            onClick={() => {
              setActive(1);
            }}
            style={{
              cursor: "pointer",
            }}
          >
            <Text size="sm" fw={600}>
              02
            </Text>
            <motion.div
              style={{
                height: 20,
                overflow: "hidden",
              }}
              initial={{
                width: 0,
                opacity: 0,
              }}
              animate={
                active == 1
                  ? {
                      width: 100,
                      opacity: 1,
                    }
                  : {}
              }
            >
              <Text size="sm" fw={600} pos="absolute">
                - PRE-EVENT
              </Text>
            </motion.div>
          </Group>

          <Group
            gap="0"
            opacity={active == 2 ? 1 : 0.3}
            onClick={() => {
              setActive(2);
            }}
            style={{
              cursor: "pointer",
            }}
          >
            <Text size="sm" fw={600}>
              03
            </Text>
            <motion.div
              style={{
                height: 20,
                overflow: "hidden",
              }}
              initial={{
                width: 0,
                opacity: 0,
              }}
              animate={
                active == 2
                  ? {
                      width: 100,
                      opacity: 1,
                    }
                  : {}
              }
            >
              <Text size="sm" fw={600} pos="absolute">
                - PRE-EVENT
              </Text>
            </motion.div>
          </Group>

          <ActionIcon
            color="var(--color-celebrations-primary-500)"
            disabled={active == 2}
            variant="subtle"
            onClick={() => {
              setActive(active + 1);
            }}
          >
            <CaretRight />
          </ActionIcon>
        </Group>
      </Container>

      <Container py={100} hiddenFrom="lg">
        <SimpleGrid
          cols={2}
          spacing="xs"
          style={{
            width: "200vw",
            marginLeft: "-100vw",
          }}
        >
          <motion.div
            style={{
              zIndex: 3,
            }}
            variants={animateLeft}
            initial="initial"
            animate={animateBase == false ? "animate" : {}}
          >
            <Paper
              h={650}
              id="phasecard-left"
              pos="relative"
              py="3rem"
              px="5rem"
              className={classes.designcard}
              radius="xl"
              style={{
                marginRight: -20,
                zIndex: 2,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                transform: "rotate(-5deg)",
                background: colorTheory[active]?.dark,
              }}
            >
              <Stack gap={8}>
                <Group
                  align="flex-start"
                  style={{
                    position: "relative",
                    zIndex: 3,
                  }}
                >
                  <Text size={"8px"} c="gray.0" tt="uppercase" w={50}>
                    {sectionData?.phases[active]?.quote1}
                  </Text>

                  <Text size={"8px"} c="gray.0" tt="uppercase" w={50}>
                    {sectionData?.phases[active]?.quote2}
                  </Text>

                  <Text size={"8px"} c="gray.0" tt="uppercase" w={50}>
                    {sectionData?.phases[active]?.quote3}
                  </Text>

                  <Text size={"8px"} c="gray.0" tt="uppercase" w={50}>
                    {sectionData?.phases[active]?.quote4}
                  </Text>
                </Group>

                <Text size={"8px"} c="gray.0" ta="right">
                  THE CLASSICS PROJECTS
                </Text>

                <Divider opacity={0.5} />
              </Stack>

              <Stack
                gap="3rem"
                style={{
                  lineHeight: "2rem",
                  position: "relative",
                  zIndex: 3,
                }}
              >
                <Text
                  size="2rem"
                  style={{
                    lineHeight: "2rem",
                  }}
                  tt="uppercase"
                  fw={200}
                  c="yellow.3"
                >
                  {sectionData?.phases[active]?.quote1}
                </Text>

                <Text
                  tt="uppercase"
                  ta="center"
                  size="2rem"
                  style={{
                    lineHeight: "2rem",
                    letterSpacing: "1rem",
                  }}
                  fw={200}
                  c="yellow.3"
                >
                  {sectionData?.phases[active]?.tagline_main}
                </Text>

                <Group justify="flex-end">
                  <Text
                    tt="uppercase"
                    ta="right"
                    size="1rem"
                    style={{
                      lineHeight: "1rem",
                    }}
                    fw={200}
                    c="gray.0"
                    w={100}
                  >
                    {sectionData?.phases[active]?.quote2}
                  </Text>
                </Group>
              </Stack>

              <div
                className={classes.window_oval}
                style={{
                  background:
                    colorTheory[active]?.card || colorTheory[active]?.light,
                }}
              />
              <div
                className={classes.window_rect}
                style={{
                  background:
                    colorTheory[active]?.card || colorTheory[active]?.light,
                }}
              />

              <Stack
                style={{
                  position: "relative",
                  zIndex: 3,
                }}
              >
                <Group>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Text key={index} size="8px" c="gray.0" opacity={0.5}>
                      PHASE
                    </Text>
                  ))}
                </Group>

                <Group>
                  <Text size="md" c="gray.0">
                    01
                  </Text>
                  <Divider w={80} />
                  <Text size="md" c="gray.0" opacity={0.3}>
                    02
                  </Text>
                  <Text size="md" c="gray.0" opacity={0.5}>
                    03
                  </Text>
                </Group>
              </Stack>
            </Paper>
          </motion.div>

          <motion.div
            style={{
              zIndex: 1,
            }}
            variants={animateRight}
            initial="initial"
            animate={animateBase == false ? "animate" : {}}
            transition={{
              delay: 0.1,
            }}
          >
            <Paper
              id="phasecard-right"
              radius="xl"
              p="3rem"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                transform: "rotate(5deg)",
              }}
              h={650}
            >
              <Text size="xs" ta="center" tt="uppercase" fw={700}>
                {active == 0
                  ? "Pre-Event"
                  : active == 1
                    ? "During-Event"
                    : "Post-Event"}
                <br />
                {sectionData?.phases[active]?.detailed_tagline}
              </Text>

              <Stack>
                <Image
                  fit="contain"
                  h={300}
                  src={sectionData?.phases[active]?.image}
                />

                <Text
                  ta="center"
                  size="xl"
                  style={{
                    fontFamily:"var(--font-cursive)",
                  }}
                >
                  {sectionData?.phases[active]?.detailed_quote}
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
                    {sectionData?.phases[active]?.detailed_services}
                  </Text>
                </Group>
              </Stack>
            </Paper>
          </motion.div>
        </SimpleGrid>

        <Group justify="center" mt="xl">
          <ActionIcon
            color="var(--color-celebrations-primary-500)"
            disabled={active == 0}
            variant="subtle"
            onClick={() => {
              setActive(active - 1);
            }}
          >
            <CaretLeft />
          </ActionIcon>

          <Group
            gap="0"
            opacity={active == 0 ? 1 : 0.3}
            onClick={() => {
              setActive(0);
            }}
            style={{
              cursor: "pointer",
            }}
          >
            <Text size="sm" fw={600}>
              01
            </Text>
            <motion.div
              style={{
                height: 20,
                overflow: "hidden",
              }}
              initial={{
                width: 0,
                opacity: 0,
              }}
              animate={
                active == 0
                  ? {
                      width: 100,
                      opacity: 1,
                    }
                  : {}
              }
            >
              <Text size="sm" fw={600} pos="absolute">
                - PRE-EVENT
              </Text>
            </motion.div>
          </Group>

          <Group
            gap="0"
            opacity={active == 1 ? 1 : 0.3}
            onClick={() => {
              setActive(1);
            }}
            style={{
              cursor: "pointer",
            }}
          >
            <Text size="sm" fw={600}>
              02
            </Text>
            <motion.div
              style={{
                height: 20,
                overflow: "hidden",
              }}
              initial={{
                width: 0,
                opacity: 0,
              }}
              animate={
                active == 1
                  ? {
                      width: 100,
                      opacity: 1,
                    }
                  : {}
              }
            >
              <Text size="sm" fw={600} pos="absolute">
                - PRE-EVENT
              </Text>
            </motion.div>
          </Group>

          <Group
            gap="0"
            opacity={active == 2 ? 1 : 0.3}
            onClick={() => {
              setActive(2);
            }}
            style={{
              cursor: "pointer",
            }}
          >
            <Text size="sm" fw={600}>
              03
            </Text>
            <motion.div
              style={{
                height: 20,
                overflow: "hidden",
              }}
              initial={{
                width: 0,
                opacity: 0,
              }}
              animate={
                active == 2
                  ? {
                      width: 100,
                      opacity: 1,
                    }
                  : {}
              }
            >
              <Text size="sm" fw={600} pos="absolute">
                - PRE-EVENT
              </Text>
            </motion.div>
          </Group>

          <ActionIcon
            color="var(--color-celebrations-primary-500)"
            disabled={active == 2}
            variant="subtle"
            onClick={() => {
              setActive(active + 1);
            }}
          >
            <CaretRight />
          </ActionIcon>
        </Group>
      </Container>
    </section>
  );
}
