"use client";

import { Container, Paper, SimpleGrid, Stack } from "@mantine/core";
//animation
import { motion } from "framer-motion";
import { AnimatedText } from "@/components/AnimatedText";
import { variantGeneral } from "@/animation/variantGeneral";

export function _SectionIntro({
  sectionData = {
    subheading: "Chip Health",
    title: [
      "The 'Ocasionally remarkable,",
      "moments' shoudn't be left to",
      "chance! they should be",
      "planned for, invested in.",
    ],
    paragraph: [
      `Thrive Foundation for Youth Professor of Organizational`,
      `Behavior at the Stanford Graduate School of Business.`,
    ],
    images: [
      "https://saffronweddingstyle.com/wp-content/uploads/2023/08/corporate-event-planning.jpg",
      "https://5.imimg.com/data5/FT/RE/GLADMIN-57530872/corporate-events.jpg",
      "https://talkstar-assets.s3.amazonaws.com/production/playlists/playlist_125/03319a10-ba41-4f78-9d21-0c0233c59658/TED-Talks-Education_1200x627.jpg",
      "https://assets-api.kathmandupost.com/thumb.php?src=https://assets-cdn.kathmandupost.com/uploads/source/news/2024/third-party/Untitled12-1722650723.jpg&w=900&height=601",
      "https://media.edusanjal.com/uploads/ISA%202019.JPG",
      "https://mbzuai.ac.ae/wp-content/uploads/2023/11/AlibabaHackathon.jpg",
    ],
  },
}: any) {
  const { subheading, title, paragraph, images } = sectionData;

  return (
    <>
      <Container size="md" py={200}>
        <Stack gap="xl">
          <div className="event-header ">
            {title.map((item: string, index: number) => (
              <AnimatedText key={index} text={item} />
            ))}
          </div>

          <Stack gap={2}>
            <div className="event-subheader ">
              <AnimatedText text={subheading} />
            </div>
            {paragraph.map((item: string, index: number) => (
              <motion.div
                className="general-text"
                variants={variantGeneral}
                initial="initial"
                whileInView={"visible"}
                viewport={{ once: true }}
                key={index}
                style={{
                  textAlign: "center",
                  opacity: 0.5,
                }}
              >
                {paragraph[index]}
              </motion.div>
            ))}
          </Stack>
        </Stack>
      </Container>

      <motion.div
        initial={{ opacity: 0, x: 0 }}
        whileInView={{
          opacity: 1,
          x: 100,
          //    transform: "rotate(2deg)"
        }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <SimpleGrid cols={6} spacing="xs">
          {Array.from({ length: 6 }).map((_, index) => (
            <Paper
              key={index}
              style={{
                background: images[index]
                  ? `url("${images[index]}")`
                  : "var(--colors-events-primary-500)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: 1,
              }}
              h={300}
            />
          ))}
        </SimpleGrid>
      </motion.div>
    </>
  );
}
