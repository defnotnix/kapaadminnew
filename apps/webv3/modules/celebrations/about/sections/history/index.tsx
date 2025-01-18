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
import { useCelebrationContext } from "@/layouts/celebrations/celebration.context";
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

export function _SectionHistory() {
  // * CONTEXT

  const { state } = useCelebrationContext();

  // * STATES

  const [active, setActive] = useState(0);
  const [sectionData, setSectionData] = useState<any | null>(null);

  // * PRERENDER

  function getFormattedData() {
    const _dataSource = state.preData?.cms;

    const _data = _dataSource.find((item: any) => item.id == 24);
    const _textData = JSON.parse(_data.text);

    const _historyData = _dataSource.filter((item: any) => {
      return [25, 26, 27].includes(item.id);
    });

    return {
      ..._data,
      ..._textData,
      heading: [_textData?.heading1, _textData?.heading2, _textData?.heading3],
      paragraph: [_textData?.paragraph1, _textData?.paragraph2],
      images: [
        _historyData[0].image,
        _historyData[1].image,
        _historyData[2].image,
      ],
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
      <Container size="lg" pt={{ base: 50, lg: 200 }} pb={100}>
        <div className="celebration-subheader flex-left">
          <AnimatedText text={sectionData?.subheading} />
        </div>
        <Stack gap="2rem">
          <div className="celebration-header flex-left">
            {sectionData?.heading.map((item: string, index: number) => (
              <AnimatedText key={index} text={item} />
            ))}
          </div>

          <SimpleGrid cols={{ base: 1, lg: 2 }} spacing="xl">
            {sectionData?.paragraph.map((item: string, index: number) => (
              <motion.div
                className="general-text "
                variants={variantGeneral}
                initial="initial"
                whileInView={"visible"}
                viewport={{ once: true }}
                key={index}
              >
                {sectionData?.paragraph[index]}
              </motion.div>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>

      <Container pb={100} visibleFrom="lg">
        <motion.div variants={variantContainer}>
          <SimpleGrid cols={3}>
            {sectionData?.images.map((imgdata: any, index: number) => (
              <motion.div
                variants={variantGeneralDelay(index * 0.075)}
                key={index}
                initial="initial"
                whileInView={"visible"}
                viewport={{ once: true }}
              >
                <Paper p="xs" className="has_clip_vertical">
                  <Image className="has_clip_vertical" src={imgdata} h={600} />
                </Paper>
              </motion.div>
            ))}
          </SimpleGrid>
        </motion.div>
      </Container>

      <Container pb={100} hiddenFrom="lg" visibleFrom="lg">
        <motion.div variants={variantContainer}>
          <SimpleGrid cols={3}>
            {sectionData?.images.map((imgdata: any, index: number) => (
              <motion.div
                variants={variantGeneralDelay(index * 0.075)}
                key={index}
                initial="initial"
                whileInView={"visible"}
                viewport={{ once: true }}
              >
                <Paper p="xs" className="has_clip_vertical">
                  <Image className="has_clip_vertical" src={imgdata} h={600} />
                </Paper>
              </motion.div>
            ))}
          </SimpleGrid>
        </motion.div>
      </Container>

      <Container pb={100} hiddenFrom="lg">
        <motion.div variants={variantContainer}>
          <SimpleGrid cols={1} mt={200}>
            {sectionData?.images.map((imgdata: any, index: number) => (
              <motion.div
                variants={variantGeneralDelay(index * 0.075)}
                key={index}
                initial="initial"
                whileInView={"visible"}
                viewport={{ once: true }}
                style={{
                  marginTop: -200,
                  transform: `rotate(${index == 1 ? "-10deg" : "10deg"})`,
                }}
              >
                <Group justify={index == 1 ? "flex-end" : "flex-start"}>
                  <Paper w={220} p="xs" className="has_clip_vertical">
                    <Image
                      className="has_clip_vertical"
                      src={imgdata}
                      h={300}
                      w={200}
                    />
                  </Paper>
                </Group>
              </motion.div>
            ))}
          </SimpleGrid>
        </motion.div>
      </Container>
    </>
  );
}
