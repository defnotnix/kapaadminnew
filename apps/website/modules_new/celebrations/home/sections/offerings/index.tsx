"use client";

import React from "react";
//mantine
import {
  Box,
  Center,
  Container,
  Image,
  Stack,
  Text,
  Title,
} from "@mantine/core";
//motion
import { inView, motion } from "framer-motion";
//styles
import classes from "./offering.module.css";
import cx from "clsx";
//animation
import { variantContainer } from "@/animation/variantContainer";
import { AnimatedText } from "@/components/AnimatedText";
//assets
import { useInViewport, useMouse, useWindowScroll } from "@mantine/hooks";

const services = [
  {
    url: "",
    label: "Weddings",
    img: "https://images.prismic.io/marie-guillaume/0d66603d-b934-443d-8d71-36c52fc06eb9_Coralie-et-Alexandre-Marrakech-05.jpg?fm=webp&w=900&q=auto",
  },
  {
    url: "",
    label: "Engagements",
    img: "https://images.prismic.io/marie-guillaume/b385362d-4a45-474d-a058-1f8605b39092_Coralie-et-Alexandre-Marrakech-19.jpg?fm=webp&w=500&q=auto",
  },
  {
    url: "",
    label: "Anniversaries",
    img: "https://images.prismic.io/marie-guillaume/cd6707b5-2627-4f57-ab8a-fccbac96a3f4_Coralie-et-Alexandre-Marrakech-21.jpg?fm=webp&w=900&q=auto",
  },
  {
    url: "",
    label: "Birthdays",
    img: "https://images.prismic.io/marie-guillaume/8062ab03-351f-4c0d-9ca5-361f2d83a208_Coralie-et-Alexandre-Marrakech-22.jpg?fm=webp&w=1000&q=auto",
  },
  {
    url: "",
    label: "Private Events",
    img: "https://images.prismic.io/marie-guillaume/cb401fb5-a2a7-4b38-96a8-b21cf73adf0a_Coralie-et-Alexandre-Marrakech-12.jpg?fm=webp&w=1000&q=auto",
  },
  {
    url: "",
    label: "Cultural Events",
    img: "https://images.prismic.io/marie-guillaume/f891de57-f9b9-4351-a0cf-686f4275120e_Coralie-et-Alexandre-Marrakech-13.jpg?fm=webp&w=1400&q=auto",
  },
];

export function SectionOfferings({
  sectionData = {
    subheading: "WE L.E.A.D. - LISTEN, EXECUTE, ANTICIPATE & DELIVER",
    title: [
      "From Dreamy Beginnings to Joyful",
      "Endings - We perfect every monment",
      "before, during & after.",
    ],
  },
}: any) {
  const { title } = sectionData;

  // * DEFINITIONS

  // * COMPONENTS

  const renderServices = services.map((service, index) => {
    const { ref, x, y } = useMouse();

    return (
      <Box key={index} className={classes.service_container} pos="relative">
        <div
          className="celebration-header"
          ref={ref}
          style={{
            position: "relative",
            fontSize: "7rem",
            lineHeight: "7rem",
            zIndex: 3,
          }}
        >
          <AnimatedText key={index} text={service.label} />
        </div>

        <Image
          className={cx(classes.service_container_img, "has_clip_vertical")}
          h={500}
          w={400}
          src={service.img}
          style={{
            position: "absolute",
            top: 0,
            marginLeft: -200,
            marginTop: -200,
            left: `calc(50% + ${x / 3}px)`,
            transform: `rotate(${index % 2 == 0 ? "-" : "+"}${x / 100}deg)`,
            filter: "",
          }}
        />
      </Box>
    );
  });

  return (
    <section className={classes.root}>
      <Container
        size="sm"
        pt={{
          base: 100,
          lg: 160,
        }}
        pb={200}
      >
        <div className="celebration-subheader ">
          <AnimatedText text={"OUR SERVICES"} />
        </div>

        <Stack gap={0} py={50}>
          {renderServices}
        </Stack>

        <div className="celebration-subheader ">
          <AnimatedText
            text={"& GENERALLY A WIDE RANGE OF PRIVATE / PUBLIC EVENTS"}
          />
        </div>
      </Container>
    </section>
  );
}
