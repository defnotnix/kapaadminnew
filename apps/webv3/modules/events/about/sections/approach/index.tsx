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

export function _SectionApproach() {
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
        size="sm"
        py={{
          base: 50,
          lg: 200,
        }}
      >
        <div className="event-subheader ">
          <AnimatedText text={sectionData?.subheading} />
        </div>
        <Stack gap="2rem">
          <div className="event-header ">
            {sectionData?.heading?.map((item: string, index: number) => (
              <AnimatedText key={index} text={item} />
            ))}
          </div>

          <SimpleGrid cols={1} spacing="sm">
            {sectionData?.paragraph.map((item: string, index: number) => (
              <motion.div
                className="general-text "
                variants={variantGeneral}
                initial="initial"
                whileInView={"visible"}
                viewport={{ once: true }}
                key={index}
                style={{
                  textAlign: "center",
                }}
              >
                {sectionData?.paragraph[index]}
              </motion.div>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </>
  );
}
