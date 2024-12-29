"use client";

import React, { useEffect } from "react";
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
import { useCelebrationContext } from "@/layouts/celebrations";
import { useInViewport } from "@mantine/hooks";
import { useRouter } from "next/navigation";

export function _Section({ events = [] }: { events: any[] }) {
  // * DEFINITIONS

  // * CONTEXTS
  const Router = useRouter();

  const { background, setBackground } = useCelebrationContext();

  // * STATES

  const { ref, inViewport } = useInViewport();

  // * PRELOADING

  // * FUNCTIONS

  useEffect(() => {
    if (inViewport && background !== "var(--color-celebrations-primary-200)") {
      setBackground("var(--color-celebrations-primary-200)");
    }
  }, [inViewport]);

  // * COMPONENTS

  return (
    <>
      <motion.section
        ref={ref}
        viewport={{ once: true }}
        style={{
          position: "relative",
        }}
      >
        <Container
          py={{
            base: 50,
            lg: 100,
          }}
          size="xl"
          pos="relative"
          style={{ zIndex: 2 }}
        >
          <Group>
            <div className="celebration-subheader flex-left">
              <AnimatedText text="SELECTED WORKS" />
            </div>
          </Group>

          <Group py="xl" justify="space-between" visibleFrom="lg">
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

          <Group py="xl" justify="space-between" hiddenFrom="lg">
            <div
              className="celebration-header flex-left"
              style={{
                fontSize: "2rem",
                lineHeight: "2.5rem",
              }}
            >
              <AnimatedText text="Explore our" />
              <AnimatedText text="Recent projects." />
            </div>
          </Group>

          <AnimatePresence>
            <SimpleGrid cols={{ base: 1, lg: 3 }} my="md">
              {events
                .filter((e: any) => {
                  return e.company == 1;
                })
                .slice(0, 3)
                .map((item: any, index: number) => {
                  return (
                    <motion.div
                      key={index}
                      variants={variantGeneralDelay(0)}
                      initial="initial"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.5 }}
                    >
                      <FeaturedSectionCard
                        id={item.id}
                        image={
                          item.event_images && item.event_images.length
                            ? item?.event_images[0]?.image
                            : 'image="https://images.prismic.io/marie-guillaume/e0d32bc8-8fee-47b8-985a-c7256f882ecc_lucie-et-paul-le-touquet6.jpg?fm=webp&w=1100&q=45"'
                        }
                        year={new Date(item.event_date).getFullYear()}
                        title={item.shortname}
                      />
                    </motion.div>
                  );
                })}
            </SimpleGrid>
          </AnimatePresence>

          <Space h={50} />

          <Group justify="center" hiddenFrom="lg">
            <UnstyledButton
              p="md"
              onClick={() => {
                Router.push("/celebrations/events");
              }}
            >
              <div className="celebration-subheader flex-left">
                <AnimatedText text="VIEW ALL OUR FEATURED WORKS" />
              </div>
            </UnstyledButton>
          </Group>

          <Group justify="flex-end" visibleFrom="lg">
            <UnstyledButton
              p="md"
              onClick={() => {
                Router.push("/celebrations/events");
              }}
            >
              <div className="celebration-subheader flex-left">
                <AnimatedText text="VIEW ALL OUR FEATURED WORKS" />
              </div>
            </UnstyledButton>
          </Group>
        </Container>

        <div
          style={{
            position: "absolute",
            top: "50%",
            backgroundImage:
              "linear-gradient(to right, var(--color-celebrations-primary-300), var(--color-celebrations-primary-400))",
            display: "block",
            width: "100%",
            height: "50px",
            zIndex: 0,
            transform: "rotate(2deg)",
          }}
        ></div>
      </motion.section>
    </>
  );
}
