"use client";

import {
  Container,
  Grid,
  Group,
  Image,
  Paper,
  SimpleGrid,
  Space,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { Diamond } from "@phosphor-icons/react";
import { MotionHeroFlower } from "./motion/hero.flower";

import { motion } from "framer-motion";
import { variantGeneralDelay } from "@/animation/variantGeneral";
import { AnimatedText } from "@/components/AnimatedText";

export function ModuleEventEvent() {
  return (
    <>
      <section
        style={{
          background: "var(--color-events-primary-100)",
        }}
      >
        <Space h={100} />

        <Container>
          <Stack mt={64} mb={48} gap={0}>
            <div
              className="event-header flex-left"
              style={{
                fontSize: "5rem",
                lineHeight: "5rem",
              }}
            >
              <AnimatedText text="Everest Hackathon" />
              <AnimatedText text="May, 2024, Organizaed by" />
              <AnimatedText text="Hope Foundation Nepal." />
            </div>

            <Space h="xl" />

            <div className="event-subheader flex-left">
              <AnimatedText text="WEDDING | 23 JUNE, 2022 | MAGIC XYZ BANQUET | HOPE" />
            </div>
          </Stack>
        </Container>

        <Container pos="relative">
          <motion.div
            variants={variantGeneralDelay(0.1)}
            initial="initial"
            animate="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <Stack>
              <Image src="https://ijnet.org/sites/default/files/styles/full_width_node/public/migrated/2015/10/10495771084_834631fc73_h.jpg?itok=uONavxYG" />

              <SimpleGrid py={100} cols={2}>
                <div
                  className="event-header flex-left"
                  style={{
                    fontSize: "3rem",
                    lineHeight: "3rem",
                  }}
                >
                  <AnimatedText text="1200 Atendees" />
                  <AnimatedText text="3 Days" />
                  <AnimatedText text="26 Micro Events" />
                </div>
                <Text w={600} size="sm" >
                  Meagan and Tom’s lakeside wedding was a breathtaking event of
                  love and sophistication, seamlessly blending natural beauty
                  with timeless elegance. Hosted at the serene Waverley Country
                  Club, the event featured sweeping waterfront views, perfectly
                  complemented by exquisite floral designs from Brier & Ivy.
                  Every moment was beautifully captured by Janet Lin
                  Photography, ensuring memories as vivid as the day itself.
                  From the intimate ceremony to the lively reception, this event
                  was a true testament to creative collaboration and impeccable
                  planning.
                </Text>
              </SimpleGrid>
            </Stack>
          </motion.div>
        </Container>

        <Container>
          <SimpleGrid cols={2}>
            <motion.div
              variants={variantGeneralDelay(0.1)}
              initial="initial"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              <Image
                h={500}
                src="https://zeb-consulting.com/files/styles/content_layout_default/shared/media/images/2019-11/Header_Hackaton_default_schmal_1_1920x570.jpg.webp?itok=mApyfLjE"
              />
            </motion.div>
            <SimpleGrid cols={2}>
              <motion.div
                variants={variantGeneralDelay(0.1)}
                initial="initial"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
              >
                <Image
                  h={500}
                  src="https://foxevents.pl/wp-content/uploads/2024/02/zadania-team-buildingowe-1024x683.webp"
                />
              </motion.div>
              <motion.div
                variants={variantGeneralDelay(0.1)}
                initial="initial"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
              >
                <Image
                  h={500}
                  src="https://zeb-consulting.com/files/styles/content_layout_default/shared/media/images/2019-11/header_hackaton_default_schmal_1_1920x570.jpg.webp?itok=mapyflje"
                />
              </motion.div>
            </SimpleGrid>

            <motion.div
              variants={variantGeneralDelay(0.1)}
              initial="initial"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              <Image
                h={500}
                src="https://zeb-consulting.com/files/styles/content_layout_default/shared/media/images/2019-11/header_hackaton_default_schmal_1_1920x570.jpg.webp?itok=mapyflje"
              />
            </motion.div>
            <SimpleGrid cols={2}>
              <motion.div
                variants={variantGeneralDelay(0.1)}
                initial="initial"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
              >
                <Image
                  h={500}
                  src="https://foxevents.pl/wp-content/uploads/2024/02/zadania-team-buildingowe-1024x683.webp"
                />
              </motion.div>
              <motion.div
                variants={variantGeneralDelay(0.1)}
                initial="initial"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
              >
                <Image
                  h={500}
                  src="https://foxevents.pl/wp-content/uploads/2024/02/zadania-team-buildingowe-1024x683.webp"
                />
              </motion.div>
              <motion.div
                variants={variantGeneralDelay(0.1)}
                initial="initial"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
              >
                <Image
                  h={500}
                  src="https://zeb-consulting.com/files/styles/content_layout_default/shared/media/images/2019-11/header_hackaton_default_schmal_1_1920x570.jpg.webp?itok=mapyflje"
                />
              </motion.div>
              <motion.div
                variants={variantGeneralDelay(0.1)}
                initial="initial"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
              >
                <Image
                  h={500}
                  src="https://zeb-consulting.com/files/styles/content_layout_default/shared/media/images/2019-11/header_hackaton_default_schmal_1_1920x570.jpg.webp?itok=mapyflje"
                />
              </motion.div>
            </SimpleGrid>
          </SimpleGrid>
        </Container>
      </section>

      <section
        style={{
          height: 300,
          background:
            "linear-gradient(180deg, #EEDACEAA 0%, var(--color-events-cream) 100%)",
        }}
      ></section>
    </>
  );
}
