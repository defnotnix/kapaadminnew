"use client";

import React from "react";
//mantine
import { Center, Container, Text } from "@mantine/core";
//motion
import { inView, motion } from "framer-motion";
//styles
import classes from "./intro.module.css";
import cx from "clsx";
//animation
import { variantContainer } from "@/animation/variantContainer";
import { AnimatedText } from "@/components/AnimatedText";
//assets
import { _MotionIntroFlower } from "./motion/intro.flower";
import { useInViewport, useWindowScroll } from "@mantine/hooks";

export function _Intro({
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

  const [scroll, scrollTo] = useWindowScroll();
  const { ref, inViewport } = useInViewport();

  return (
    <section className={classes.root} ref={ref}>
      <Container
        size="sm"
        pt={{
          base: 100,
          lg: 160,
        }}
      >
        <Center>
          <div className="celebration-header ">
            {title.map((item: string, index: number) => (
              <AnimatedText key={index} text={item} />
            ))}
          </div>
        </Center>
      </Container>

      <div
        className={classes.flower_container}
        style={{
          marginTop: inViewport ? scroll?.y / 10 : 0,
        }}
      >
        <_MotionIntroFlower />
      </div>
    </section>
  );
}
