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

export function _SectionApproach({ sectionData }: any) {
  const {
    subheading = "WE L.E.A.D. - LISTEN, EXECUTE, ANTICIPATE & DELIVER",
    title = ["Mastering Storytelling,", "Our Events,", "Speak for themselves."],
    paragraph = [
      `WE L.E.A.D. - LISTEN, EXECUTE, ANTICIPATE & DELIVER. It's a system we own and take pride in, and it ensures every wedding we design or produce will be an authentic success.`,
      `We work this way because we expect the same from ourselves and every partner we work with.
`,
    ],
  } = sectionData;

  return (
    <>
      <Container
        size="sm"
        py={{
          base: 50,
          lg: 200,
        }}
      >
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
