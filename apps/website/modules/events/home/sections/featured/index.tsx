"use client";

import React from "react";
//next
import {} from "next/navigation";
//mantine
import {
  Container,
  Group,
  Paper,
  SimpleGrid,
  Space,
  Text,
  Title,
  UnstyledButton,
} from "@mantine/core";
//styles
import cx from "clsx";
import classes from "./featured.module.css";
import { FeaturedSectionCard } from "./FeaturedCard";
import { AnimatedText } from "@/components/AnimatedText";

import { motion } from "framer-motion";

import { variantGeneralDelay } from "@/animation/variantGeneral";

const featured = [
  {
    title: "TED TALK NEPAL",
    category: "Seminar",
    date: "AUg 2023",
    image:
      "https://dynamo-events.com/wp-content/uploads/2022/03/244455594_394175392337344_7419394046313873303_n.jpg",
  },
  {
    title: "TED TALK NEPAL",
    category: "Seminar",
    date: "AUg 2023",
    image:
      "https://mbzuai.ac.ae/wp-content/uploads/2023/11/AlibabaHackathon.jpg",
  },
  {
    title: "TED TALK NEPAL",
    category: "Seminar",
    date: "AUg 2023",
    image:
      "https://assets-api.kathmandupost.com/thumb.php?src=https://assets-cdn.kathmandupost.com/uploads/source/news/2024/third-party/Untitled12-1722650723.jpg&w=900&height=601",
  },
];

export function _SectionFeatured() {
  // * DEFINITIONS

  // * CONTEXTS

  // * STATES

  // * PRELOADING

  // * FUNCTIONS

  // * COMPONENTS

  return (
    <>
      <Paper radius={0} bg="var(--color-events-primary-200)">
        <Container pt={100} size="xl">
          <div className="event-subheader flex-left">
            <AnimatedText text={"SELECTED WORKS"} />
          </div>

          <Group py="xl" justify="space-between">
            <div
              className="event-header flex-left"
              style={{
                fontSize: "2.5rem",
                lineHeight: "3rem",
              }}
            >
              <AnimatedText text={"Explore our"} />
              <AnimatedText text={"recent projects."} />
            </div>
            <div
              className="event-header flex-right"
              style={{
                fontSize: "2.5rem",
                lineHeight: "3rem",
                opacity: 0.3,
              }}
            >
              <AnimatedText text={"A deep dive into how"} />
              <AnimatedText text={"we we make events happen."} />
            </div>
          </Group>
        </Container>

        <Container>
          <SimpleGrid cols={{ base: 1, lg: 3 }} my="md">
            {featured.map((item, index) => (
              <motion.div
                key={index}
                variants={variantGeneralDelay(0.1 * index)}
                initial="initial"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
              >
                <FeaturedSectionCard image={item.image} />
              </motion.div>
            ))}
          </SimpleGrid>
        </Container>

        <Container size="xl" pb={100}>
          <Space h={50} />

          <Group justify="flex-end">
            <UnstyledButton>
              <div className="event-subheader flex-left">
                <AnimatedText text="VIEW ALL OUR FEATURED WORKS" />
              </div>
            </UnstyledButton>
          </Group>
        </Container>
      </Paper>
    </>
  );
}
