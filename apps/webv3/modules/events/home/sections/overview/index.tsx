"use client";

import React, { useEffect, useState } from "react";
//mantine
import {
  Box,
  Button,
  Container,
  Grid,
  Group,
  Image,
  Paper,
  SimpleGrid,
  Space,
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

export function _SectionOverview() {
  // * CONTEXT

  const { state } = useEventContext();

  // * STATES

  const [active, setActive] = useState(0);
  const [sectionData, setSectionData] = useState<any | null>(null);

  // * PRERENDER

  function getFormattedData() {
    const _dataSource = state.preData?.cms;

    const _data_top_content = _dataSource.find((item: any) => item.id == 55);
    const _text_data_top = JSON.parse(_data_top_content.text);
    const _data_top = _dataSource.filter((item: any) => {
      return [56, 57, 58].includes(item.id);
    });

    console.log(_text_data_top);

    const _data_bot_content = _dataSource.find((item: any) => item.id == 59);
    const _text_data_bot = JSON.parse(_data_bot_content.text);
    const _data_bot = _dataSource.filter((item: any) => {
      return [60, 61, 62].includes(item.id);
    });

    console.log(_text_data_bot);

    return {
      top: {
        ..._text_data_top,
        heading: [
          _text_data_top?.heading1,
          _text_data_top?.heading2,
          _text_data_top?.heading3,
          _text_data_top?.heading4,
        ],
        images: _data_top?.map((item: any) => {
          return {
            ...item,
            ...JSON.parse(item.text),
          };
        }),
      },
      bot: {
        ..._text_data_bot,
        heading: [
          _text_data_bot?.heading1,
          _text_data_bot?.heading2,
          _text_data_bot?.heading3,
          _text_data_bot?.heading4,
        ],
        images: _data_bot?.map((item: any) => {
          return {
            ...item,
            ...JSON.parse(item.text),
          };
        }),
      },
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
      <Container size="xl" py={100}>
        <Grid>
          <Grid.Col span={{ base: 12, lg: 6 }}>
            <Grid gutter={32}>
              <Grid.Col span={7}>
                <Space h={32} />
                <Stack>
                  <motion.div
                    variants={variantGeneralDelay(0)}
                    initial="initial"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                  >
                    <Box pos="relative">
                      <Image
                        pos="relative"
                        radius="lg"
                        h={{ base: 300, lg: 500 }}
                        src={sectionData?.top?.images[0]?.image}
                        fit="cover"
                        style={{
                          transform: "rotate(-8deg)",
                          zIndex: 1,
                        }}
                      />

                      <Paper
                        shadow="lg"
                        radius="lg"
                        h={{ base: 300, lg: 500 }}
                        mt={16}
                        ml={-16}
                        w={"100%"}
                        bg="var(--color-events-primary-600)"
                        pos="absolute"
                        style={{
                          top: 0,
                          transform: "rotate(-10deg)",
                          zIndex: 0,
                        }}
                      />
                    </Box>
                  </motion.div>
                </Stack>
              </Grid.Col>
              <Grid.Col span={5} pl="lg">
                <Stack>
                  <motion.div
                    variants={variantGeneralDelay(0.3)}
                    initial="initial"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                  >
                    <Image
                      radius="lg"
                      h={{ base: 100, lg: 300 }}
                      fit="cover"
                      src={sectionData?.top?.images[1]?.image}
                      style={{
                        transform: "rotate(8deg)",
                      }}
                    />
                  </motion.div>
                  <motion.div
                    variants={variantGeneralDelay(0.4)}
                    initial="initial"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                  >
                    <Image
                      radius="lg"
                      h={{ base: 150, lg: 250 }}
                      fit="cover"
                      src={sectionData?.top?.images[1]?.image}
                      style={{
                        transform: "rotate(4deg)",
                      }}
                    />
                  </motion.div>
                </Stack>
              </Grid.Col>
            </Grid>
          </Grid.Col>
          <Grid.Col span={{ base: 12, lg: 5 }} offset={{ base: 0, lg: 1 }}>
            <Stack gap="lg" mt={64}>
              <Group>
                <div className="event-subheader flex-left">
                  <AnimatedText text={sectionData?.top?.subheading || ""} />
                </div>
              </Group>
              <div className="event-header flex-left">
                {sectionData?.top?.heading.map((item: any, index: number) => (
                  <AnimatedText key={index} text={item || ""} />
                ))}
              </div>
              <motion.div
                variants={variantGeneralDelay(0.4)}
                initial="initial"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
              >
                <Text size="sm" w={400}>
                  {sectionData?.top?.paragraph}
                </Text>
              </motion.div>
              <motion.div
                variants={variantGeneralDelay(0.5)}
                initial="initial"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
              >
                <Group>
                  <Button>Inquire Now</Button>
                </Group>
              </motion.div>
            </Stack>
          </Grid.Col>

          <Grid.Col span={{ base: 12, lg: 5 }}>
            <Stack gap="lg" mt={100}>
              <Group>
                <div className="event-subheader flex-left">
                  <AnimatedText text="Galas & Events." />
                </div>
              </Group>
              <div className="event-header flex-left">
                {sectionData?.bot?.heading.map((item: any, index: number) => (
                  <AnimatedText key={index} text={item || ""} />
                ))}
              </div>
              <motion.div
                variants={variantGeneralDelay(0.4)}
                initial="initial"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
              >
                <Text size="sm" w={400}>
                  {sectionData?.bot?.paragraph}
                </Text>
              </motion.div>
              <motion.div
                variants={variantGeneralDelay(0.5)}
                initial="initial"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
              >
                <Group>
                  <Button>Inquire Now</Button>
                </Group>
              </motion.div>
            </Stack>
          </Grid.Col>

          <Grid.Col span={{ base: 12, lg: 6 }} offset={{ base: 0, lg: 1 }}>
            <Grid gutter={32}>
              <Grid.Col span={5}>
                <Stack>
                  <motion.div
                    variants={variantGeneralDelay(0)}
                    initial="initial"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                  >
                    <Image
                      radius="lg"
                      h={{ base: 150, lg: 250 }}
                      fit="cover"
                      src={sectionData?.bot?.images[0]?.image}
                      style={{
                        transform: "rotate(-8deg)",
                      }}
                    />
                  </motion.div>
                  <motion.div
                    variants={variantGeneralDelay(0.1)}
                    initial="initial"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                  >
                    <Image
                      radius="lg"
                      h={{ base: 150, lg: 250 }}
                      fit="cover"
                      src={sectionData?.bot?.images[1]?.image}
                      style={{
                        transform: "rotate(-4deg)",
                      }}
                    />
                  </motion.div>
                </Stack>
              </Grid.Col>
              <Grid.Col span={7} pl="lg">
                <Space h={32} />
                <Stack>
                  <motion.div
                    variants={variantGeneralDelay(0.3)}
                    initial="initial"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                  >
                    <Box pos="relative">
                      <Image
                        pos="relative"
                        radius="lg"
                        h={{ base: 300, lg: 500 }}
                        fit="cover"
                        src={sectionData?.bot?.images[2]?.image}
                        style={{
                          transform: "rotate(8deg)",
                          zIndex: 3,
                        }}
                      />

                      <Paper
                        shadow="lg"
                        radius="lg"
                        h={{ base: 300, lg: 500 }}
                        mt={-16}
                        ml={16}
                        w={"100%"}
                        bg="var(--color-events-primary-600)"
                        pos="absolute"
                        style={{
                          top: 0,
                          transform: "rotate(10deg)",
                          zIndex: 0,
                          background:
                            "url(https://web.nepalnews.com/storage/story/1024/DSC_00681640862171_1024.jpg)",
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      />
                    </Box>
                  </motion.div>
                </Stack>
              </Grid.Col>
            </Grid>
          </Grid.Col>
        </Grid>
      </Container>
    </>
  );
}
