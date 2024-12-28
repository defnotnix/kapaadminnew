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
  Paper,
  Space,
  Stack,
  Text,
  Title,
} from "@mantine/core";
//styles
import classes from "./events.module.css";
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

const projects: any[] = [
  {
    background: "#EEDACE",
    titlehead: "Bipul",
    titletail: "& Anjali",
    images: [
      "https://images.prismic.io/marie-guillaume/c3554ec4-911b-4ce4-b603-7d3066179e59_coralie-et-alexandre-marrakech16.jpg?fm=webp&w=1100&q=45",
      "https://images.prismic.io/marie-guillaume/67292da6-2a18-41ea-8381-b96383730b9c_Coralie-et-Alexandre-Marrakech-04.jpg?fm=webp&w=1400&q=auto",
      "https://images.prismic.io/marie-guillaume/cd6707b5-2627-4f57-ab8a-fccbac96a3f4_Coralie-et-Alexandre-Marrakech-21.jpg?fm=webp&w=900&q=auto",
      "https://albertpalmerphotography.com/wp-content/uploads/2024/11/portfolio24-001.jpg",
      "https://albertpalmerphotography.com/wp-content/uploads/2024/11/portfolio24-004.jpg",

      "https://albertpalmerphotography.com/wp-content/uploads/2024/11/portfolio24-010.jpg",
      "https://albertpalmerphotography.com/wp-content/uploads/2024/11/portfolio24-016.jpg",
      "https://albertpalmerphotography.com/wp-content/uploads/2024/11/portfolio24-002.jpg",

      "https://albertpalmerphotography.com/wp-content/uploads/2024/11/portfolio24-009.jpg",
    ],
  },
  {
    background: "#C6D7E7",
    text: "#133352",
    titlehead: "Kabin",
    titletail: "& Udita",
    images: [
      "https://images.prismic.io/marie-guillaume/6a78f935-1f01-4640-bc17-b086efe1900f_Charlotte-et-Maxime-Ilede-Re-11.jpg?fm=webp&w=500&q=auto&rect=1000,0,1111,1667&",
      "https://images.prismic.io/marie-guillaume/67a2bb9b-8a43-4bfa-8fae-fd08910fc5dd_Charlotte-et-Maxime-Ilede-Re-12.jpg?fm=webp&w=500&q=auto&rect=633,0,1107,1667&",
      "https://images.prismic.io/marie-guillaume/e7eead49-f1df-406f-9744-1f4f3de3a884_Charlotte-et-Maxime-Ilede-Re-13.jpg?fm=webp&w=1400&q=auto",
      "https://images.prismic.io/marie-guillaume/6a9f3940-5b7d-4f74-ba86-f0a8fc4a98fb_Charlotte-et-Maxime-Ilede-Re-17.jpg?fm=webp&w=1400&q=auto",
      "https://images.prismic.io/marie-guillaume/4a55f9fa-f97e-4f38-9327-996f15015c55_Charlotte-et-Maxime-Ilede-Re-08.jpg?fm=webp&w=1400&q=auto",
      "https://images.prismic.io/marie-guillaume/11a2b906-1b5f-4aab-81b7-71e46c4f07d8_Charlotte-et-Maxime-Ilede-Re-06.jpg?fm=webp&w=1000&q=auto&rect=560,0,1112,1667&",
    ],
  },
  {
    background: "#F1D1D1",
    text: "#B95050",
    titlehead: "Winnie",
    titletail: "& Benny",
    images: [
      "https://images.prismic.io/marie-guillaume/8f1f6922-bd6a-4123-b547-086675148a62_Winnie-et-James-Belgique-04.jpg?fm=webp&w=500&q=auto",
      "https://images.prismic.io/marie-guillaume/bc96b3fd-4f85-4d3d-957d-8838523c38ab_Winnie-et-James-Belgique-03.jpg?fm=webp&w=500&q=auto",
      "https://images.prismic.io/marie-guillaume/cd14c891-763d-406a-9047-0e8efae8ae50_Winnie-et-James-Belgique-01.jpg?fm=webp&w=1000&q=auto",
      "https://images.prismic.io/marie-guillaume/18ef697b-2c6d-4877-b40d-62b155d76065_Winnie-et-James-Belgique-17.jpg?fm=webp&w=1400&q=auto",
      "https://images.prismic.io/marie-guillaume/5d46754b-5c77-4163-923c-dc461a2e393a_Winnie-et-James-Belgique-18.jpg?fm=webp&w=500&q=auto",
      "https://images.prismic.io/marie-guillaume/15ea0985-8632-4baa-a4b2-9b85aeff9d9a_Winnie-et-James-Belgique-12.jpg?fm=webp&w=500&q=auto",
    ],
  },
];

export function ModuleCelebrationsEvents() {
  // * DEFINITION

  const [active, setActive] = useState(0);
  const [showText, setShowText] = useState(false);

  // * CONTEXT

  //  * ANIMATIONS

  // * STATE

  const animateEntry = () => {
    animate(
      refImage1.current,
      {
        opacity: 1,
        y: 0,
      },
      {
        duration: 0.3,
        ease: "easeInOut",
      }
    );
    animate(
      refImage2.current,
      {
        opacity: 1,
        y: 0,
      },
      {
        delay: 0.1,
        duration: 0.3,
        ease: "easeInOut",
      }
    );
    animate(
      refImage3.current,
      {
        opacity: 1,
        y: 0,
      },
      {
        delay: 0.1,
        duration: 0.3,
        ease: "easeInOut",
      }
    );
    animate(
      refImage4.current,
      {
        opacity: 1,
        y: 0,
      },
      {
        delay: 0.1,
        duration: 0.3,
        ease: "easeInOut",
      }
    );
    animate(
      refImage5.current,
      {
        opacity: 1,
        y: 0,
      },
      {
        delay: 0.1,
        duration: 0.3,
        ease: "easeInOut",
      }
    );

    animate(
      refImage6.current,
      {
        opacity: 1,
        y: 0,
      },
      {
        delay: 0.2,
        duration: 0.3,
        ease: "easeInOut",
      }
    ).then(() => {
      setShowText(true);
    });
  };

  const animateExit = (index: number) => {
    setShowText(false);
    animate(refImage1.current, {
      opacity: 0,
      y: -500,
    });
    animate(
      refImage2.current,
      {
        opacity: 0,
        y: -700,
      },
      {
        delay: 0.1,
      }
    );
    animate(
      refImage3.current,
      {
        opacity: 0,
        y: -700,
      },
      {
        delay: 0.1,
      }
    );
    animate(
      refImage4.current,
      {
        opacity: 0,
        y: -700,
      },
      {
        delay: 0.1,
      }
    );
    animate(
      refImage5.current,
      {
        opacity: 0,
        y: -700,
      },
      {
        delay: 0.1,
      }
    );
    animate(
      refImage6.current,
      {
        opacity: 0,
        y: -700,
      },
      {
        delay: 0.1,
      }
    );

    animate(
      refImage6.current,
      {
        opacity: 0,
        y: -900,
      },
      {
        delay: 0.2,
      }
    ).then(() => {
      setActive(
        (index = 0
          ? active == 0
            ? projects.length - 1
            : active - 1
          : active + 1 == projects.length
            ? 0
            : active + 1)
      );
      animateEntry();
    });
  };

  const animateSwitch = () => {};

  const refImage1 = useRef(null);
  const refImage2 = useRef(null);
  const refImage3 = useRef(null);
  const refImage4 = useRef(null);
  const refImage5 = useRef(null);
  const refImage6 = useRef(null);
  const refImage7 = useRef(null);
  const refImage8 = useRef(null);
  const refImage9 = useRef(null);
  const refSVG = useRef(null);
  const refSubText = useRef(null);
  const refMainText = useRef(null);

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
          <Group justify="flex-end" h={"calc(100vh - 10rem)"}>
            <Stack px="5%">
              <Title
                size="6rem"
                fw={500}
                c={
                  projects[active].text ||
                  "var(--color-celebrations-primary-500)"
                }
                style={{
                  display: "flex",
                  fontFamily: "var(--font-celebrations-heading)",
                  flexDirection: "column",
                  lineHeight: "5rem",
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
            </Stack>
          </Group>

          <div className={classes.imageContainer}>
            <Stack gap={-160}>
              <motion.div
                ref={refImage1}
                initial={{
                  opacity: 0,
                  y: -500,
                }}
              >
                <Paper
                  p="xs"
                  radius="md"
                  withBorder
                  shadow="xl"
                  mb={-50}
                  w={300}
                  h={400}
                  style={{
                    transform: "rotate(-10deg)",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    radius="md"
                    h={380}
                    src={projects[active]?.images[0]}
                  />
                </Paper>
              </motion.div>
              <motion.div
                ref={refImage2}
                initial={{
                  opacity: 0,
                  y: -700,
                }}
              >
                <Paper
                  p="xs"
                  radius="md"
                  withBorder
                  mb={-50}
                  ml={200}
                  shadow="xl"
                  w={300}
                  h={400}
                  style={{
                    transform: "rotate(-5deg)",
                  }}
                >
                  <Image
                    radius="md"
                    h={380}
                    src={projects[active]?.images[1]}
                  />
                </Paper>
              </motion.div>
              <motion.div
                ref={refImage3}
                initial={{
                  opacity: 0,
                  y: -900,
                }}
              >
                <Paper
                  p="xs"
                  radius="md"
                  withBorder
                  shadow="xl"
                  w={300}
                  h={400}
                  style={{
                    transform: "rotate(10deg)",
                  }}
                >
                  {" "}
                  <Image
                    radius="md"
                    h={380}
                    src={projects[active]?.images[2]}
                  />
                </Paper>
              </motion.div>
            </Stack>
          </div>

          <div className={classes.imageContainer_left}>
            <Stack gap={-160}>
              <motion.div
                ref={refImage4}
                initial={{
                  opacity: 0,
                  y: -500,
                }}
              >
                <Paper
                  p="xs"
                  radius="md"
                  withBorder
                  shadow="xl"
                  mb={-50}
                  w={300}
                  h={400}
                  style={{
                    transform: "rotate(10deg)",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    radius="md"
                    h={380}
                    src={projects[active]?.images[3]}
                  />
                </Paper>
              </motion.div>
              <motion.div
                ref={refImage5}
                initial={{
                  opacity: 0,
                  y: -700,
                }}
              >
                <Paper
                  p="xs"
                  radius="md"
                  withBorder
                  mb={-50}
                  ml={200}
                  shadow="xl"
                  w={300}
                  h={400}
                  style={{
                    transform: "rotate(5deg)",
                  }}
                >
                  <Image
                    radius="md"
                    h={380}
                    src={projects[active]?.images[4]}
                  />
                </Paper>
              </motion.div>
              <motion.div
                ref={refImage6}
                initial={{
                  opacity: 0,
                  y: -900,
                }}
              >
                <Paper
                  p="xs"
                  radius="md"
                  withBorder
                  shadow="xl"
                  w={300}
                  h={400}
                  style={{
                    transform: "rotate(-2deg)",
                  }}
                >
                  {" "}
                  <Image
                    radius="md"
                    h={380}
                    src={projects[active]?.images[5]}
                  />
                </Paper>
              </motion.div>
            </Stack>
          </div>

          <div className={classes.flower}>
            <MotionProjectFlower
              animate={showText}
              color={projects[active].text}
            />
          </div>
        </div>
        <div className={classes.actions}>
          <Stack gap="xs">
            <motion.div
              variants={variantGeneralDelay(0)}
              initial="initial"
              animate={showText ? "visible" : ""}
            >
              <Text size="xs" ta="right">
                A <b>Wedding Event</b> of <b>{projects[active]?.title}</b>
              </Text>
            </motion.div>

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
              <Group gap="xs">
                <Button
                  size="xl"
                  variant="white"
                  color="var(--color-celebrations-primary-500)"
                  tt="uppercase"
                  fw={600}
                  rightSection={<ArrowUpRight />}
                >
                  View full details
                </Button>
                <ActionIcon
                  size={62}
                  variant="light"
                  color="var(--color-celebrations-primary-500)"
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
                  color="var(--color-celebrations-primary-500)"
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
