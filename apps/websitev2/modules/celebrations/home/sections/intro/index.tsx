"use client";

import React from "react";
//mantine
import { Center, Container, Stack } from "@mantine/core";
//components
import { AnimatedText } from "@/components/AnimatedText";
//styles
import classes from "./intro.module.css";
import cx from "clsx";
//assets
import { _MotionIntroFlower } from "@/assets/svg/intro.flower";

export function _Section({ sectionData }: any) {
  const {
    subheading = "here for your cherished moments",
    heading = [
      "From Dreamy Beginnings to Joyful",
      "Endings - We perfect every monment",
      "before, during & after.",
    ],
  } = sectionData;

  return (
    <>
      <section className={classes.root}>
        <Container
          size="sm"
          py={{
            base: 100,
            lg: 160,
          }}
        >
          <Center>
            <Stack>
              <div className="celebration-subheader">
                <AnimatedText text={subheading} />
              </div>

              <div className="celebration-header">
                {heading.map((item: string, index: number) => (
                  <AnimatedText key={index} text={item} />
                ))}
              </div>
            </Stack>
          </Center>
        </Container>

        <div className={classes.flower_container}>
          <_MotionIntroFlower />
        </div>
      </section>
    </>
  );
}
