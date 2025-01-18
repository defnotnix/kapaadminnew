"use client";

import React, { useEffect, useState } from "react";
//mantine
import {
  Box,
  Center,
  Container,
  Grid,
  Image,
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

export function _SectionIntro() {
  // * CONTEXT

  const { state } = useEventContext();

  // * STATES

  const [active, setActive] = useState(0);
  const [sectionData, setSectionData] = useState<any | null>(null);

  // * PRERENDER

  function getFormattedData() {
    const _dataSource = state.preData?.cms;

    const _data = _dataSource.find((item: any) => item.id == 23);
    const _textData = JSON.parse(_data.text);

    return {
      ..._data,
      ..._textData,
      heading: [_textData?.heading1, _textData?.heading2, _textData?.heading3],
      paragraph: [_textData?.paragraph1, _textData?.paragraph2],
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
      <Container
        size="lg"
        py={{ base: 50, lg: 100 }}
        pt={{ base: 200, lg: 100 }}
      >
        <div className="event-subheader flex-left">
          <AnimatedText text={sectionData?.subheading} />
        </div>

        <Grid>
          <Grid.Col span={{ base: 12, lg: 6 }}>
            <div className="event-header flex-left">
              {sectionData?.heading.map((item: string, index: number) => (
                <AnimatedText key={index} text={item} />
              ))}
            </div>
          </Grid.Col>

          <Grid.Col span={{ base: 12, lg: 4 }} offset={{ base: 0, lg: 2 }}>
            <motion.div layout variants={variantContainer}>
              <Stack gap="md">
                {sectionData?.paragraph.map((item: string, index: number) => (
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
                ))}
              </Stack>
            </motion.div>
          </Grid.Col>
        </Grid>
      </Container>

      <Container>
        <motion.div
          variants={variantGeneralDelay(0.8)}
          initial="initial"
          whileInView={"visible"}
          viewport={{ once: true }}
        >
          <Box
            h={{ base: 300, lg: 800 }}
            className="has_clip"
            style={{
              backgroundImage: `url(${sectionData?.image})`,
              backgroundSize: "cover",
            }}
          ></Box>
        </motion.div>
      </Container>
    </>
  );
}
