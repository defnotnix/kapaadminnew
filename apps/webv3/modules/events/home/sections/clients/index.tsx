"use client";

import React, { useEffect, useState } from "react";
//mantine
import { Box, Container, Image, SimpleGrid, Text } from "@mantine/core";
//icons
import {} from "@phosphor-icons/react";
//motion
import { animate, motion } from "framer-motion";
//styles
import { useEventContext } from "@/layouts/events/event.context";
//components
import { AnimatedText } from "@/components/AnimatedText";
import { variantGeneralDelay } from "@/animation/variantGeneral";

export function _SectionClients() {
  // * CONTEXT

  const { state } = useEventContext();

  // * STATES

  const [active, setActive] = useState(0);
  const [sectionData, setSectionData] = useState<any | null>(null);

  // * PRERENDER

  function getFormattedData() {
    const _dataSource = state.preData?.cms;

    const _data = _dataSource.filter((item: any) => {
      return [48, 49, 50, 51, 52, 53].includes(item.id);
    });

    return _data;
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
      <Container py={{ base: 40, lg: 100 }} size="xl">
        <Box hiddenFrom="lg">
          <motion.div
            variants={variantGeneralDelay(0)}
            initial="initial"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <Box
              style={{
                fontSisze: "var(--mantine-font-size-xs)",
                textAligh: "center",
              }}
            >
              <AnimatedText text="We have proudly" animate={true} />
              <AnimatedText text="organized events for." animate={true} />
            </Box>
          </motion.div>
        </Box>
        <SimpleGrid
          cols={3}
          spacing={{ base: "xs", lg: "48px" }}
          hiddenFrom="lg"
          mt="xl"
        >
          {sectionData?.slice(0, 6).map((client: any, index: number) => (
            <motion.div
              variants={variantGeneralDelay(0.1 * index)}
              key={index}
              initial="initial"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              <Image
                h={32}
                fit="contain"
                style={{
                  filter: "grayscale(100%)",
                }}
                src={client.image}
              />
            </motion.div>
          ))}
        </SimpleGrid>

        <SimpleGrid
          cols={7}
          spacing={{ base: "xs", lg: "48px" }}
          visibleFrom="lg"
        >
          <motion.div
            variants={variantGeneralDelay(0)}
            initial="initial"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <Box>
              <Text size="sm">
                We have proudly
                <br /> organized events for.
              </Text>
            </Box>
          </motion.div>

          {sectionData?.map((client: any, index: number) => (
            <motion.div
              variants={variantGeneralDelay(0.1 * index)}
              key={index}
              initial="initial"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              <Image
                style={{
                  filter: "grayscale(100%)",
                }}
                src={client.image}
              />
            </motion.div>
          ))}
        </SimpleGrid>
      </Container>
    </>
  );
}
