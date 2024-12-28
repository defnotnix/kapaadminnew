"use client";

import { variantContainer } from "@/animation/variantContainer";
import {
  variantGeneral,
  variantGeneralDelay,
} from "@/animation/variantGeneral";
import { AnimatedText } from "@/components/AnimatedText";
import {
  Container,
  Image,
  Paper,
  SimpleGrid,
  Stack,
  Group,
} from "@mantine/core";
//animation
import { motion } from "framer-motion";

export function _SectionHistory({ sectionData }: any) {
  const {
    subheading = "Behind the name",
    title = [
      "Turning every event into a",
      "meaningful experience,",
      "From passion to perfection,",
      "the origin of Classics Celebrations.",
    ],
    paragraph = [
      `Once upon a time, twenty-one years or so ago, two lifelines crossed and an epic restaurant server-crush was born. When we met in 2001, there was an instant understanding that our connection was meant for something big. We just didn’t know what it was yet.`,
      ` 
Luxe was born on the foundation that everything happens for a reason. The Luxe family of brands was created in June of '09 out of a passion for hospitality, leadership and entrepreneurship.`,
    ],
    images = [
      "https://images.unsplash.com/photo-1654764746590-841871176bc0?q=80&w=3328&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1682240306508-2ae6178a1a94?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1682092632793-c7d75b23718e?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  } = sectionData;

  return (
    <>
      <Container size="lg" pt={{ base: 50, lg: 200 }} pb={100}>
        <div className="celebration-subheader flex-left">
          <AnimatedText text={subheading} />
        </div>
        <Stack gap="2rem">
          <div className="celebration-header flex-left">
            {title.map((item: string, index: number) => (
              <AnimatedText key={index} text={item} />
            ))}
          </div>

          <SimpleGrid cols={{ base: 1, lg: 2 }} spacing="xl">
            {paragraph.map((item: string, index: number) => (
              <motion.div
                className="general-text "
                variants={variantGeneral}
                initial="initial"
                whileInView={"visible"}
                viewport={{ once: true }}
                key={index}
              >
                {paragraph[index]}
              </motion.div>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>

      <Container pb={100} visibleFrom="lg">
        <motion.div variants={variantContainer}>
          <SimpleGrid cols={3}>
            {images.map((imgdata: any, index: number) => (
              <motion.div
                variants={variantGeneralDelay(index * 0.075)}
                key={index}
                initial="initial"
                whileInView={"visible"}
                viewport={{ once: true }}
              >
                <Paper p="xs" className="has_clip_vertical">
                  <Image className="has_clip_vertical" src={imgdata} h={600} />
                </Paper>
              </motion.div>
            ))}
          </SimpleGrid>
        </motion.div>
      </Container>

      <Container pb={100} hiddenFrom="lg" visibleFrom="lg">
        <motion.div variants={variantContainer}>
          <SimpleGrid cols={3}>
            {images.map((imgdata: any, index: number) => (
              <motion.div
                variants={variantGeneralDelay(index * 0.075)}
                key={index}
                initial="initial"
                whileInView={"visible"}
                viewport={{ once: true }}
              >
                <Paper p="xs" className="has_clip_vertical">
                  <Image className="has_clip_vertical" src={imgdata} h={600} />
                </Paper>
              </motion.div>
            ))}
          </SimpleGrid>
        </motion.div>
      </Container>

      <Container pb={100} hiddenFrom="lg" hiddenFrom="lg">
        <motion.div variants={variantContainer}>
          <SimpleGrid cols={1} mt={200}>
            {images.map((imgdata: any, index: number) => (
              <motion.div
                variants={variantGeneralDelay(index * 0.075)}
                key={index}
                initial="initial"
                whileInView={"visible"}
                viewport={{ once: true }}
                style={{
                  marginTop: -200,
                  transform: `rotate(${index == 1 ? "-10deg" : "10deg"})`,
                }}
              >
                <Group justify={index == 1 ? "flex-end" : "flex-start"}>
                  <Paper w={220} p="xs" className="has_clip_vertical">
                    <Image
                      className="has_clip_vertical"
                      src={imgdata}
                      h={300}
                      w={200}
                    />
                  </Paper>
                </Group>
              </motion.div>
            ))}
          </SimpleGrid>
        </motion.div>
      </Container>
    </>
  );
}
