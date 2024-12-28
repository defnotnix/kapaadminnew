"use client";

import { Container, SimpleGrid, Stack } from "@mantine/core";

//animation
import { variantContainer } from "@/animation/variantContainer";
import {
  variantGeneral,
  variantGeneralDelay,
} from "@/animation/variantGeneral";
//animation
import { motion } from "framer-motion";
import { AnimatedText } from "@/components/AnimatedText";

export function _SectionApproach({
  sectionData = {
    subheading: "WE L.E.A.D. - LISTEN, EXECUTE, ANTICIPATE & DELIVER",
    title: ["Mastering Storytelling,", "Our Events,", "Speak for themselves."],
    paragraph: [
      `WE L.E.A.D. - LISTEN, EXECUTE, ANTICIPATE & DELIVER. It's a system we own and take pride in, and it ensures every wedding we design or produce will be an authentic success.`,
      `We work this way because we expect the same from ourselves and every partner we work with.
`,
    ],
    images: [
      "https://images.unsplash.com/photo-1654764746590-841871176bc0?q=80&w=3328&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1682240306508-2ae6178a1a94?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1682092632793-c7d75b23718e?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
}: any) {
  const { subheading, title, paragraph, images } = sectionData;

  return (
    <>
      <Container size="sm" py={200}>
        <div className="celebration-subheader ">
          <AnimatedText text={subheading} />
        </div>
        <Stack gap="2rem">
          <div className="celebration-header ">
            {title.map((item: string, index: number) => (
              <AnimatedText key={index} text={item} />
            ))}
          </div>

          <SimpleGrid cols={1} spacing="sm">
            {paragraph.map((item: string, index: number) => (
              <motion.div
                className="general-text "
                variants={variantGeneral}
                initial="initial"
                whileInView={"visible"}
                viewport={{ once: true }}
                key={index}
                style={{
                  textAlign: "center",
                }}
              >
                {paragraph[index]}
              </motion.div>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </>
  );
}
