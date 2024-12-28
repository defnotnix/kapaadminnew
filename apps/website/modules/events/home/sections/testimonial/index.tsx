"use client";

import React, { useEffect, useRef, useState } from "react";
//next
import {} from "next/navigation";
//mantine
import {
  Box,
  Center,
  Container,
  Grid,
  Group,
  Image,
  Paper,
  Progress,
  SimpleGrid,
  Space,
  Stack,
  Text,
} from "@mantine/core";
//styles
import cx from "clsx";
import classes from "./testimonials.module.css";
import { Quotes } from "@phosphor-icons/react";

//animation
import { animate } from "motion/mini";
import { spring } from "motion";
import { motion } from "framer-motion";
import { useInterval } from "@mantine/hooks";

export function _SectionTestimonials() {
  // * DEFINITIONS

  const [active, setActive] = useState(0);

  // * CONTEXTS

  const data: any[] = [
    {
      image:
        "https://www.freepnglogos.com/uploads/google-logo-new-history-png-9.png",
      signature_image:
        "https://www.pngall.com/wp-content/uploads/14/Signature-PNG-Photos.png",
      name: "Alex Wang",
      company: "Mo Media",
      post: "Managing Director",
      message:
        "The “occasionally remarkable” moments shouldn’t be left to chance! They should be planned for, invested in.",
    },
    {
      image:
        "https://www.freepnglogos.com/uploads/google-logo-new-history-png-9.png",
      signature_image:
        "https://www.pngall.com/wp-content/uploads/14/Signature-PNG-Photos.png",
      name: "Palex Wang",
      company: "Mo Media",
      post: "Managing Director",
      message:
        "The “occasionally remarkable” moments shouldn’t be left to chance! They should be planned for, invested in.",
    },
    {
      image:
        "https://www.freepnglogos.com/uploads/google-logo-new-history-png-9.png",
      signature_image:
        "https://www.pngall.com/wp-content/uploads/14/Signature-PNG-Photos.png",
      name: "Walex Wang",
      company: "Mo Media",
      post: "Managing Director",
      message:
        "The “occasionally remarkable” moments shouldn’t be left to chance! They should be planned for, invested in.",
    },
    {
      image:
        "https://www.freepnglogos.com/uploads/google-logo-new-history-png-9.png",
      signature_image:
        "https://www.pngall.com/wp-content/uploads/14/Signature-PNG-Photos.png",
      name: "Dalex Wang",
      company: "Mo Media",
      post: "Managing Director",
      message:
        "The “occasionally remarkable” moments shouldn’t be left to chance! They should be planned for, invested in.",
    },
    {
      image:
        "https://www.freepnglogos.com/uploads/google-logo-new-history-png-9.png",
      signature_image:
        "https://www.pngall.com/wp-content/uploads/14/Signature-PNG-Photos.png",
      name: "Ralex Wang",
      company: "Mo Media",
      post: "Managing Director",
      message:
        "The “occasionally remarkable” moments shouldn’t be left to chance! They should be planned for, invested in.",
    },
    {
      image:
        "https://www.freepnglogos.com/uploads/google-logo-new-history-png-9.png",
      signature_image:
        "https://www.pngall.com/wp-content/uploads/14/Signature-PNG-Photos.png",
      name: "Balex Wang",
      company: "Mo Media",
      post: "Managing Director",
      message:
        "The “occasionally remarkable” moments shouldn’t be left to chance! They should be planned for, invested in.",
    },
    {
      image:
        "https://www.freepnglogos.com/uploads/google-logo-new-history-png-9.png",
      signature_image:
        "https://www.pngall.com/wp-content/uploads/14/Signature-PNG-Photos.png",
      name: "Talex Wang",
      company: "Mo Media",
      post: "Managing Director",
      message:
        "The “occasionally remarkable” moments shouldn’t be left to chance! They should be planned for, invested in.",
    },
    {
      image:
        "https://www.freepnglogos.com/uploads/google-logo-new-history-png-9.png",
      signature_image:
        "https://www.pngall.com/wp-content/uploads/14/Signature-PNG-Photos.png",
      name: "Alex Wang",
      company: "Mo Media",
      post: "Managing Director",
      message:
        "The “occasionally remarkable” moments shouldn’t be left to chance! They should be planned for, invested in.",
    },
    {
      image:
        "https://www.freepnglogos.com/uploads/google-logo-new-history-png-9.png",
      signature_image:
        "https://www.pngall.com/wp-content/uploads/14/Signature-PNG-Photos.png",
      name: "Alex Wang",
      company: "Mo Media",
      post: "Managing Director",
      message:
        "The “occasionally remarkable” moments shouldn’t be left to chance! They should be planned for, invested in.",
    },
    {
      image:
        "https://www.freepnglogos.com/uploads/google-logo-new-history-png-9.png",
      signature_image:
        "https://www.pngall.com/wp-content/uploads/14/Signature-PNG-Photos.png",
      name: "Xalex Wang",
      company: "Mo Media",
      post: "Managing Director",
      message:
        "The “occasionally remarkable” moments shouldn’t be left to chance! They should be planned for, invested in.",
    },
  ];

  const sliderData = [...data, ...data];

  // * STATES
  const sliderRef: any = useRef<HTMLDivElement>(null);

  // * PRELOADING

  // * FUNCTIONS

  const triggerAnimateFunction = async () => {
    await animate(sliderRef.current, {
      opacity: 0,
    });

    await animate(sliderRef.current, {
      opacity: 1,
    });
  };

  const interval = useInterval(() => triggerAnimateFunction(), 3000);

  // * COMPONENTS

  useEffect(() => {
    interval.start();
  }, []);

  const TestimonialContainer = () => {
    return (
      <Center py={100} pos="relative">
        <motion.div
          style={{
            position: "absolute",
            flexDirection: "column",
            justifyContent: "space-between",
            zIndex: 4,

            marginLeft: -100,
            background: `radial-gradient(circle, rgba(90,128,255,1) 0%, rgba(16,62,217,1) 72%, rgba(23,38,85,1) 100%)`,
            height: 350,
            width: 500,
            borderRadius: "var(--mantine-radius-lg)",
          }}
        />

        <motion.div
          style={{
            position: "absolute",
            flexDirection: "column",
            justifyContent: "space-between",
            zIndex: 3,
            transform: "rotate(5deg)",
            marginLeft: 100,
            height: 350,
            width: 500,
            borderRadius: "var(--mantine-radius-lg)",
            background: "var(--mantine-color-gray-2)",
          }}
        />

        <div
          style={{
            position: "absolute",
            flexDirection: "column",
            justifyContent: "space-between",
            zIndex: 5,
          }}
        >
          <motion.div ref={sliderRef}>
            <Paper withBorder h={350} w={500} p="xl" radius="lg" shadow="lg">
              <Stack>
                <Quotes size={32} weight="fill" />

                <Text size="lg">{data[active].message}</Text>
              </Stack>

              <Stack>
                <Group justify="space-between" align="flex-end">
                  <Box>
                    <Text size="xs">{data[active]?.name}</Text>
                    <Text size="xs" opacity={0.5}>
                      {data[active]?.post}
                    </Text>
                  </Box>

                  <Image src={data[active]?.signature_image} w={150} />
                </Group>
                <Progress value={80} size="xs" />
              </Stack>
            </Paper>
          </motion.div>
        </div>
      </Center>
    );
  };

  return (
    <>
      <section className={classes.root}>
        <Container size="xl" py={160}>
          <Text size="sm" ta="center">
            You're in good hands.
          </Text>
          <Center pos="relative">
            <Text size="2rem" ta="center" mt="sm">
              Dont take our{" "}
              <span
                style={{
                  opacity: 0,
                }}
              >
                wordsw
              </span>{" "}
              for it.
            </Text>
            <Text
              size="4rem"
              c="brand.5"
              ml={120}
              style={{
                fontFamily: '"Mrs Sheppards", cursive',
                transform: "rotate(-20deg)",
              }}
              pos="absolute"
            >
              words
            </Text>
          </Center>
        </Container>

        <Space h={100} />

        <div
          style={{
            height: "50vh",
          }}
        >
          <TestimonialContainer />
        </div>

        <div className={classes.slider}>
          <motion.div
            className={classes.slidetrack}
            animate={{
              x: ["0%", "-50%"],
              transition: {
                ease: "linear",
                duration: 50,
                repeat: Infinity,
              },
            }}
            transition={{
              duration: 1000, // Adjust speed as needed
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {sliderData.slice(0, 20).map((datainfo, index) => (
              <div className={classes.slide} key={index}>
                <img src={datainfo.image} height="30" alt="" />
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
