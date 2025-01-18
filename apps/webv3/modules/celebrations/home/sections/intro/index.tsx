"use client";

import React, { useEffect, useState } from "react";
//mantine
import {
  Box,
  Center,
  Container,
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
import { useCelebrationContext } from "@/layouts/celebrations/celebration.context";
//components
import { AnimatedText } from "@/components/AnimatedText";
import { variantGeneralDelay } from "@/animation/variantGeneral";
//styles
import classes from "./intro.module.css";
//assets
import { _MotionIntroFlower } from "@/assets/svg/intro.flower";

export function _SectionIntro() {
  // * CONTEXT

  const { state } = useCelebrationContext();

  // * STATES

  const [active, setActive] = useState(0);
  const [sectionData, setSectionData] = useState<any | null>(null);

  // * PRERENDER

  function getFormattedData() {
    const _dataSource = state.preData?.cms;

    const _data = _dataSource.find((item: any) => item.id == 15);
    const _textData = JSON.parse(_data.text);

    return {
      ..._textData,
      heading: [_textData?.heading1, _textData?.heading2, _textData?.heading3],
    };
  }

  useEffect(() => {
    if (state.preData?.cms?.length > 0) {
      setSectionData(getFormattedData());
    }
  }, []);

  if (!sectionData) {
    return <></>;
  }

  return (
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
              <AnimatedText text={sectionData?.subheading} />
            </div>

            <div className="celebration-header">
              {sectionData?.heading.map((item: string, index: number) => (
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
  );
}
