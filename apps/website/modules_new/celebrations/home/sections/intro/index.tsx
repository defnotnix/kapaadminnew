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

export function SectionIntro({ sectionData }: any) {
  // * DEFINITIONS

  // const [scroll, scrollTo] = useWindowScroll();
  // const { ref, inViewport } = useInViewport();

  try {
    const cmsData = JSON.parse(sectionData?.text);

    return (
      <>
        <section className={classes.root}>
          <Container
            size="sm"
            pt={{
              base: 100,
              lg: 160,
            }}
          >
            <Center>
              <div className="celebration-header ">
                <AnimatedText text={cmsData.heading1} />
                <AnimatedText text={cmsData.heading2} />
                <AnimatedText text={cmsData.heading3} />
              </div>
            </Center>
          </Container>

          <div
            className={classes.flower_container}
            // style={{
            //   marginTop: inViewport ? scroll?.y / 10 : 0,
            // }}
          >
            <_MotionIntroFlower />
          </div>
        </section>
      </>
    );
  } catch (err) {
    console.log(err);

    return (
      <>
        <Text size="xs" p="xl" ta="center">
          Section Data Missing
        </Text>
      </>
    );
  }
}
