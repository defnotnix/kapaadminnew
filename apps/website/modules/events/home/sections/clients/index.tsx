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

const clients = [
  "https://bscsigns.com/wp-content/uploads/2017/08/google_png19624.png",
  "https://bscsigns.com/wp-content/uploads/2017/08/google_png19624.png",
  "https://bscsigns.com/wp-content/uploads/2017/08/google_png19624.png",
  "https://bscsigns.com/wp-content/uploads/2017/08/google_png19624.png",
  "https://bscsigns.com/wp-content/uploads/2017/08/google_png19624.png",
  "https://bscsigns.com/wp-content/uploads/2017/08/google_png19624.png",
];

export function _SectionClients() {
  return (
    <>
      <Container py={100} size="xl">
        <SimpleGrid cols={7} spacing={{ base: "xs", lg: "48px" }}>
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

          {clients.map((client, index) => (
            <motion.div
              variants={variantGeneralDelay(0.1 * index)}
              key={index}
              initial="initial"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              <Image src={client} />
            </motion.div>
          ))}
        </SimpleGrid>
      </Container>
    </>
  );
}
