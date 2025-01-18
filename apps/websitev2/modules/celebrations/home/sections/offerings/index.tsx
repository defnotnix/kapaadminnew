"use client";

import React from "react";
//mantine
import { Box, Container, Image, Paper, Stack } from "@mantine/core";
//styles
import classes from "./offerings.module.css";
import cx from "clsx";
import { AnimatedText } from "@/components/AnimatedText";
import { useHover, useMouse } from "@mantine/hooks";
import { useCelebrationContext } from "@/layouts/celebrations";

import imgLogo from "@/assets/images/brand/celebrations.png";

import { motion } from "framer-motion";

const services = [
  {
    url: "",
    label: "Weddings",
    img: "https://images.prismic.io/marie-guillaume/0d66603d-b934-443d-8d71-36c52fc06eb9_Coralie-et-Alexandre-Marrakech-05.jpg?fm=webp&w=900&q=auto",
    color: "var(--mantine-color-red-2)",
  },
  {
    url: "",
    label: "Engagements",
    img: "https://images.unsplash.com/photo-1637870996864-65dc1c00f4dc?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "var(--mantine-color-teal-2)",
  },
  {
    url: "",
    label: "Anniversaries",
    img: "https://images.prismic.io/marie-guillaume/ebf2f199-02b8-4559-9ba0-3fd96970d75b_Coralie-et-Alexandre-Marrakech-20.jpg?fm=webp&w=500&q=auto",
    color: "var(--mantine-color-green-2)",
  },
  {
    url: "",
    label: "Birthdays",
    img: "https://images.unsplash.com/photo-1607977229409-8c278bc34628?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "var(--mantine-color-blue-2)",
  },

  {
    url: "",
    label: "Private Events",
    img: "https://images.prismic.io/marie-guillaume/6b0b1b87-1573-4486-95a5-2c6ae1ada9c5_Coralie-et-Alexandre-Marrakech-10.jpg?fm=webp&w=500&q=auto",
    color: "var(--mantine-color-sky-2)",
  },
  {
    url: "",
    label: "Cultural Events",
    img: "https://images.unsplash.com/photo-1605367334994-40c8555337e1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmVwYWxpJTIwY3VsdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
    color: "var(--mantine-color-orange-2)",
  },
];

export function _Section() {
  // * CONTEXT
  const { background, setBackground } = useCelebrationContext();

  // * COMPONENTS

  const renderServices = services.map((service, index) => {
    const { hovered, ref } = useHover();

    return (
      <Box
        key={index}
        className={classes.service_container}
        pos="relative"
        ref={ref}
      >
        <Box pos="relative" visibleFrom="lg">
          <div
            className="celebration-header flex-left"
            style={{
              transition: ".3s ease-in-out",
              position: "relative",
              fontSize: "7rem",
              lineHeight: "7rem",
              zIndex: 3,
              opacity:
                background !== null
                  ? background == service.color
                    ? 1
                    : 0.3
                  : 1,
            }}
            onMouseEnter={() => setBackground(service.color)}
          >
            <AnimatedText key={index} text={service.label} />
          </div>
        </Box>

        <Box pos="relative" hiddenFrom="lg">
          <div
            className="celebration-header "
            style={{
              transition: ".3s ease-in-out",
              position: "relative",
              fontSize: "3rem",
              lineHeight: "3rem",
              zIndex: 3,
            }}
            onMouseEnter={() => setBackground(service.color)}
          >
            <AnimatedText key={index} text={service.label} />
          </div>
        </Box>

        <motion.div
          style={{
            position: "absolute",
            top: `calc(50% - ${500 - (5-index) * 75}px)`,
            right: 0,
          }}
          initial={{
            x: 800,
            opacity: 0,
            filter: "blur(16px)",
          }}
          animate={
            hovered
              ? {
                  x: 0,
                  opacity: 1,
                  filter: "blur(0)",
                  transform: `rotate(-${Math.floor(Math.random() * (16 - 8 + 1)) + index}deg)`,
                }
              : {}
          }
          transition={{
            duration: 0.3,
          }}
        >
          <Paper p="4px" pb="md" shadow="xl">
            <Image h={600} w={500} src={service.img} />
          </Paper>
        </motion.div>
      </Box>
    );
  });

  return (
    <section className={classes.root} onMouseLeave={() => setBackground(null)}>
      <Container
        pt={{
          base: 100,
          lg: 160,
        }}
        pb={{ base: 50, lg: 200 }}
      >
        <Box visibleFrom="lg">
          <div className="celebration-subheader flex-left">
            <AnimatedText text={"OUR SERVICES"} />
          </div>
        </Box>
        <Box hiddenFrom="lg">
          <div className="celebration-subheader">
            <AnimatedText text={"OUR SERVICES"} />
          </div>
        </Box>

        <Stack gap={0} py={50}>
          {renderServices}
        </Stack>

        <div className="celebration-subheader flex-left">
          <AnimatedText
            text={"& GENERALLY A WIDE RANGE OF PRIVATE / PUBLIC EVENTS"}
          />
        </div>
      </Container>

      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{ once: true }}
      >
        <Image
          w={800}
          src={imgLogo.src}
          style={{
            position: "absolute",
            top: "50%",
            right: -200,
            opacity: 0.1,
          }}
        />
      </motion.div>
    </section>
  );
}
