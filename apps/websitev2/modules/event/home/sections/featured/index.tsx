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

export function _SectionFeatured({ events }: { events: any[] }) {
  // * DEFINITIONS

  // * CONTEXTS

  // * STATES

  // * PRELOADING

  // * FUNCTIONS

  // * COMPONENTS

  return (
    <>
      <Paper radius={0} bg="var(--color-events-primary-200)">
        <Container pt={100} size="xl" visibleFrom="lg">
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

        <Container pt={100} size="xl" hiddenFrom="lg">
          <div className="event-subheader flex-left">
            <AnimatedText text={"SELECTED WORKS"} />
          </div>

          <Group py="xl" justify="space-between">
            <div
              className="event-header flex-left"
              style={{
                fontSize: "2rem",
                lineHeight: "2.5rem",
              }}
            >
              <AnimatedText text={"Explore our"} />
              <AnimatedText text={"recent projects."} />
            </div>
          </Group>
        </Container>

        <Container>
          <SimpleGrid cols={{ base: 1, lg: 3 }} my="md">
            {events.map((item: any, index: number) => (
              <motion.div
                key={index}
                variants={variantGeneralDelay(0.1 * index)}
                initial="initial"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
              >
                <FeaturedSectionCard
                  image={item.image}
                  year={new Date(item?.event_date).getFullYear()}
                  title={item?.shortname}
                  number={index + 1}
                />
              </motion.div>
            ))}
          </SimpleGrid>
        </Container>

        <Container size="xl" pb={100}>
          <Space h={50} />

          <Group justify="center" hiddenFrom="lg">
            <UnstyledButton>
              <div className="event-subheader flex-left">
                <AnimatedText text="VIEW ALL OUR FEATURED WORKS" />
              </div>
            </UnstyledButton>
          </Group>

          <Group justify="flex-end" visibleFrom="lg">
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
