"use client";

import React from "react";
//next
import {} from "next/navigation";
//mantine
import { Box, Container, Image, SimpleGrid, Text } from "@mantine/core";
//styles
import cx from "clsx";
import classes from "./clients.module.css";
//motion
import { motion } from "framer-motion";
import { variantGeneralDelay } from "@/animation/variantGeneral";
import { AnimatedText } from "@/components/AnimatedText";

export function _SectionClients({ sectionData = [] }: any) {
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
