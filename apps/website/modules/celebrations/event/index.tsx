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
export function ModuleCelebrationEvent() {
  return (
    <>
      <section
        style={{
          background: "#EEDACEAA",
        }}
      >
        <Space h={100} />

        <Container size="lg">
          <Stack mt={64} mb={48} gap={0}>
            <div
              className="celebration-header"
              style={{
                fontSize: "7rem",
                lineHeight: "7rem",
              }}
            >
              <AnimatedText text="Kabin & Udita" />
            </div>

            <div className="celebration-subheader">
              <AnimatedText text="WEDDING | 23 JUNE, 2022 | MAGIC XYZ BANQUET | HOPE" />
            </div>
          </Stack>
        </Container>

        <Container size="sm" pos="relative">
          <motion.div
            variants={variantGeneralDelay(0.1)}
            initial="initial"
            animate="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <Stack>
              <Paper
                p="sm"
                withBorder
                shadow="sm"
                pos="relative"
                style={{
                  zIndex: 2,
                }}
              >
                <Image src="https://images.prismic.io/marie-guillaume/c3554ec4-911b-4ce4-b603-7d3066179e59_coralie-et-alexandre-marrakech16.jpg?fm=webp&w=1100&q=45" />
              </Paper>

              <div
                style={{
                  position: "absolute",
                  right: -200,
                  top: 0,
                  zIndex: 1,
                }}
              >
                <MotionHeroFlower />
              </div>
              <div
                style={{
                  position: "absolute",
                  left: -200,
                  top: 500,
                  zIndex: 1,
                  transform: "rotate(180deg)",
                }}
              >
                <MotionHeroFlower />
              </div>

              <Text size="sm" ta="center" my="xl">
                Meagan and Tom’s lakeside wedding was a breathtaking celebration
                of love and sophistication, seamlessly blending natural beauty
                with timeless elegance. Hosted at the serene Waverley Country
                Club, the event featured sweeping waterfront views, perfectly
                complemented by exquisite floral designs from Brier & Ivy. Every
                moment was beautifully captured by Janet Lin Photography,
                ensuring memories as vivid as the day itself. From the intimate
                ceremony to the lively reception, this celebration was a true
                testament to creative collaboration and impeccable planning.
              </Text>
            </Stack>
          </motion.div>
        </Container>

        <Title
          mt={100}
          ta="center"
          size="4rem"
          lh="4rem"
          style={{
            fontFamily: '"WindSong", cursive',
          }}
          c="var(--color-celebrations-primary-500)"
        >
          <AnimatedText text="the beginnings" />
        </Title>

        <Container size="lg">
          <SimpleGrid cols={3} py={100}>
            <motion.div
              variants={variantGeneralDelay(0.1)}
              initial="initial"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              <Paper
                p="sm"
                style={{
                  transform: "rotate(-8deg)",
                }}
              >
                <Image
                  h={500}
                  src="https://images.prismic.io/marie-guillaume/c3554ec4-911b-4ce4-b603-7d3066179e59_coralie-et-alexandre-marrakech16.jpg?fm=webp&w=1100&q=45"
                />
                <Text mt="sm" ff="WindSong" size="lg">
                  Joy in XX
                </Text>
              </Paper>
            </motion.div>
            <motion.div
              variants={variantGeneralDelay(0.1)}
              initial="initial"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              <Paper p="sm">
                <Image
                  h={500}
                  src="https://images.prismic.io/marie-guillaume/c3554ec4-911b-4ce4-b603-7d3066179e59_coralie-et-alexandre-marrakech16.jpg?fm=webp&w=1100&q=45"
                />
                <Text mt="sm" ff="WindSong" size="lg">
                  Joy in XX
                </Text>
              </Paper>
            </motion.div>
            <motion.div
              variants={variantGeneralDelay(0.1)}
              initial="initial"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              <Paper
                mt={50}
                p="sm"
                style={{
                  transform: "rotate(6deg)",
                }}
              >
                <Image
                  h={500}
                  src="https://images.prismic.io/marie-guillaume/c3554ec4-911b-4ce4-b603-7d3066179e59_coralie-et-alexandre-marrakech16.jpg?fm=webp&w=1100&q=45"
                />
                <Text mt="sm" ff="WindSong" size="lg">
                  Joy in XX
                </Text>
              </Paper>
            </motion.div>
          </SimpleGrid>

          <Grid>
            <Grid.Col span={8}>
              <motion.div
                variants={variantGeneralDelay(0.1)}
                initial="initial"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
              >
                <Paper
                  p="sm"
                  style={{
                    transform: "rotate(6deg)",
                  }}
                >
                  <Image
                    h={500}
                    src="https://images.prismic.io/marie-guillaume/c3554ec4-911b-4ce4-b603-7d3066179e59_coralie-et-alexandre-marrakech16.jpg?fm=webp&w=1100&q=45"
                  />
                  <Text mt="sm" ff="WindSong" size="lg">
                    Joy in XX
                  </Text>
                </Paper>
              </motion.div>
            </Grid.Col>
            <Grid.Col span={4}>
              <motion.div
                variants={variantGeneralDelay(0.1)}
                initial="initial"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
              >
                <Paper
                  mt={50}
                  p="sm"
                  style={{
                    transform: "rotate(-6deg)",
                  }}
                >
                  <Image
                    h={300}
                    src="https://images.prismic.io/marie-guillaume/c3554ec4-911b-4ce4-b603-7d3066179e59_coralie-et-alexandre-marrakech16.jpg?fm=webp&w=1100&q=45"
                  />
                  <Text mt="sm" ff="WindSong" size="lg">
                    Joy in XX
                  </Text>
                </Paper>
              </motion.div>
            </Grid.Col>

            <Grid.Col span={4}>
              <motion.div
                variants={variantGeneralDelay(0.1)}
                initial="initial"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
              >
                <Paper
                  mt={50}
                  p="sm"
                  style={{
                    transform: "rotate(6deg)",
                  }}
                >
                  <Image
                    h={300}
                    src="https://images.prismic.io/marie-guillaume/c3554ec4-911b-4ce4-b603-7d3066179e59_coralie-et-alexandre-marrakech16.jpg?fm=webp&w=1100&q=45"
                  />
                  <Text mt="sm" ff="WindSong" size="lg">
                    Joy in XX
                  </Text>
                </Paper>
              </motion.div>
            </Grid.Col>

            <Grid.Col span={8}>
              <motion.div
                variants={variantGeneralDelay(0.1)}
                initial="initial"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
              >
                <Paper
                  p="sm"
                  style={{
                    transform: "rotate(-6deg)",
                  }}
                >
                  <Image
                    h={500}
                    src="https://images.prismic.io/marie-guillaume/c3554ec4-911b-4ce4-b603-7d3066179e59_coralie-et-alexandre-marrakech16.jpg?fm=webp&w=1100&q=45"
                  />
                  <Text mt="sm" ff="WindSong" size="lg">
                    Joy in XX
                  </Text>
                </Paper>
              </motion.div>
            </Grid.Col>
          </Grid>
        </Container>
      </section>

      <section
        style={{
          height: 300,
          background:
            "linear-gradient(180deg, #EEDACEAA 0%, var(--color-celebrations-cream) 100%)",
        }}
      ></section>
    </>
  );
}
