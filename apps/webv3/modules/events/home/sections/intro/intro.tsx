"use client";

import React, { useEffect, useState } from "react";
//mantine
import {
  Box,
  Container,
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
import { useEventContext } from "@/layouts/events/event.context";
//components
import { AnimatedText } from "@/components/AnimatedText";
import {
  variantGeneral,
  variantGeneralDelay,
} from "@/animation/variantGeneral";

const images = [
  "https://saffronweddingstyle.com/wp-content/uploads/2023/08/corporate-event-planning.jpg",
  "https://5.imimg.com/data5/FT/RE/GLADMIN-57530872/corporate-events.jpg",
  "https://talkstar-assets.s3.amazonaws.com/production/playlists/playlist_125/03319a10-ba41-4f78-9d21-0c0233c59658/TED-Talks-Education_1200x627.jpg",
  "https://assets-api.kathmandupost.com/thumb.php?src=https://assets-cdn.kathmandupost.com/uploads/source/news/2024/third-party/Untitled12-1722650723.jpg&w=900&height=601",
  "https://media.edusanjal.com/uploads/ISA%202019.JPG",
  "https://mbzuai.ac.ae/wp-content/uploads/2023/11/AlibabaHackathon.jpg",
];

export function _SectionIntro() {
  // * CONTEXT

  const { state } = useEventContext();

  // * STATES

  const [active, setActive] = useState(0);
  const [sectionData, setSectionData] = useState<any | null>(null);

  // * PRERENDER

  function getFormattedData() {
    const _dataSource = state.preData?.cms;

    const _data = _dataSource.find((item: any) => item.id == 54);
    const _textData = JSON.parse(_data.text);

    return {
      ..._textData,
      heading: [
        _textData?.heading1,
        _textData?.heading2,
        _textData?.heading3,
        _textData?.heading4,
      ],
      post: [_textData?.post1, _textData?.post2],
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
    <>
      <Container size="md" py={{ base: 50, lg: 100 }}>
        <Stack gap="xl">
          <div className="event-header ">
            {sectionData?.heading?.map((item: string, index: number) => (
              <AnimatedText key={index} text={item} />
            ))}
          </div>

          <Stack gap={2}>
            <div className="event-subheader ">
              <AnimatedText text={sectionData?.subheading} />
            </div>
            {sectionData?.post?.map((item: string, index: number) => (
              <motion.div
                className="general-text"
                variants={variantGeneral}
                initial="initial"
                whileInView={"visible"}
                viewport={{ once: true }}
                key={index}
                style={{
                  textAlign: "center",
                  opacity: 0.5,
                }}
              >
                {item}
              </motion.div>
            ))}
          </Stack>
        </Stack>
      </Container>

      <motion.div
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
        <SimpleGrid cols={12} spacing="xs" w={"200vw"} visibleFrom="lg">
          {Array.from({ length: 6 }).map((_, index) => (
            <Paper
              key={index}
              style={{
                background: images[index]
                  ? `url("${images[index]}")`
                  : "var(--colors-events-primary-500)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: 1,
              }}
              h={300}
            />
          ))}
          {Array.from({ length: 6 }).map((_, index) => (
            <Paper
              key={index}
              style={{
                background: images[index]
                  ? `url("${images[index]}")`
                  : "var(--colors-events-primary-500)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: 1,
              }}
              h={300}
            />
          ))}
        </SimpleGrid>

        <SimpleGrid cols={12} spacing={4} w={"300vw"} hiddenFrom="lg">
          {Array.from({ length: 6 }).map((_, index) => (
            <Paper
              key={index}
              style={{
                background: images[index]
                  ? `url("${images[index]}")`
                  : "var(--colors-events-primary-500)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: 1,
              }}
              h={150}
            />
          ))}
          {Array.from({ length: 6 }).map((_, index) => (
            <Paper
              key={index}
              style={{
                background: images[index]
                  ? `url("${images[index]}")`
                  : "var(--colors-events-primary-500)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: 1,
              }}
              h={150}
            />
          ))}
        </SimpleGrid>
      </motion.div>
    </>
  );
}
