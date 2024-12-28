"use client";

import React from "react";
//
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
import { FeaturedSectionCard } from "./featureCard";

import { AnimatePresence, motion } from "framer-motion";
import { AnimatedText } from "@/components/AnimatedText";
import { variantGeneralDelay } from "@/animation/variantGeneral";
import { ArrowRight } from "@phosphor-icons/react";

export function _SectionFeatured() {
  // * DEFINITIONS

  // * CONTEXTS

  // * STATES

  // * PRELOADING

  // * FUNCTIONS

  // * COMPONENTS

  return (
    <>
      <motion.section
        initial={{ background: "var(--color-celebrations-primary-100)" }}
        whileInView={{ background: "var(--color-celebrations-primary-200)" }}
        viewport={{ once: true }}
      >
        <Container py={100} size="xl">
          <Group>
            <div className="celebration-subheader flex-left">
              <AnimatedText text="SELECTED WORKS" />
            </div>
          </Group>

          <Group py="xl" justify="space-between">
            <div
              className="celebration-header flex-left"
              style={{
                fontSize: "2.5rem",
                lineHeight: "3rem",
              }}
            >
              <AnimatedText text="Explore our" />
              <AnimatedText text="Recent projects." />
            </div>

            <div
              className="celebration-header flex-right"
              style={{
                fontSize: "2.5rem",
                lineHeight: "3rem",
                opacity: 0.3,
              }}
            >
              <AnimatedText text="A deep dive into how" />
              <AnimatedText text="we bring events to life." />
            </div>
          </Group>

          <AnimatePresence>
            <SimpleGrid cols={{ base: 1, lg: 3 }} my="md">
              <motion.div
                variants={variantGeneralDelay(0)}
                initial="initial"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
              >
                <FeaturedSectionCard image="https://images.prismic.io/marie-guillaume/e0d32bc8-8fee-47b8-985a-c7256f882ecc_lucie-et-paul-le-touquet6.jpg?fm=webp&w=1100&q=45" />
              </motion.div>
              <motion.div
                variants={variantGeneralDelay(0.1)}
                initial="initial"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
              >
                <FeaturedSectionCard image="https://images.prismic.io/marie-guillaume/c3554ec4-911b-4ce4-b603-7d3066179e59_coralie-et-alexandre-marrakech16.jpg?fm=webp&w=1100&q=45" />
              </motion.div>
              <motion.div
                variants={variantGeneralDelay(0.2)}
                initial="initial"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
              >
                <FeaturedSectionCard image="https://images.prismic.io/marie-guillaume/f631407a-5bb8-41e6-853a-3221aa7fbe9d_Charlotte-et-Maxime-Ilede-Re-09.jpg?fm=webp&w=1100&q=45&rect=921,0,1111,1667&" />
              </motion.div>
            </SimpleGrid>
          </AnimatePresence>

          <Space h={50} />

          <Group justify="flex-end">
            <UnstyledButton>
              <div className="celebration-subheader flex-left">
                <AnimatedText text="VIEW ALL OUR FEATURED WORKS" />
              </div>
            </UnstyledButton>
          </Group>
        </Container>
      </motion.section>
    </>
  );
}
