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
  Center,
  Loader,
} from "@mantine/core";
import { Diamond } from "@phosphor-icons/react";

import { motion } from "framer-motion";
import { variantGeneralDelay } from "@/animation/variantGeneral";
import { AnimatedText } from "@/components/AnimatedText";

import { useQuery } from "@tanstack/react-query";
import { apiDispatch } from "@vsphere/core";

import { useParams } from "next/navigation";

export function ModuleEventEventProfile() {
  const Params = useParams();

  const { data, isFetching } = useQuery({
    queryKey: ["events", "events"],
    queryFn: async () => {
      const res: any = await apiDispatch.get({
        url: "/events/info/" + Params.id + "/",
      });

      const imgData: any = await apiDispatch.get({
        url: "/events/image/",
        params: {
          event_id: Params.id,
        },
      });

      console.log({
        ...res.data,
        images: imgData.data,
      });

      return {
        ...res.data,
        images: imgData.data,
      };
    },
    initialData: [],
  });

  if (isFetching) {
    return (
      <Center h={500}>
        <Loader size={24} />
      </Center>
    );
  }

  return (
    <>
      <section
        style={{
          background: "var(--color-events-primary-100)",
        }}
      >
        <Space h={100} />

        <Container>
          <Stack mt={64} mb={48} gap={0} visibleFrom="lg">
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
              <AnimatedText
                text={`${data?.fullname} | ${String(new Date(data?.event_date)).substring(0, 10)} | ${data?.venue} | ${data?.theme}`}
              />
            </div>
          </Stack>

          <Stack mt={64} mb={48} gap={0} hiddenFrom="lg">
            <div
              className="event-header flex-left"
              style={{
                fontSize: "2rem",
                lineHeight: "2rem",
              }}
            >
              <AnimatedText text="Everest Hackathon" />
              <AnimatedText text="May, 2024, Organizaed by" />
              <AnimatedText text="Hope Foundation Nepal." />
            </div>

            <Space h="xl" />

            <div className="event-subheader flex-left">
              <AnimatedText
                text={`${data?.fullname} | ${String(new Date(data?.event_date)).substring(0, 10)} `}
              />
              <AnimatedText text={` ${data?.venue} | ${data?.theme}`} />
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
              <Image
                radius="md"
                h={{ base: 600, lg: "80vh" }}
                src="https://ijnet.org/sites/default/files/styles/full_width_node/public/migrated/2015/10/10495771084_834631fc73_h.jpg?itok=uONavxYG"
              />

              <SimpleGrid py={100} cols={{ base: 1, lg: 2 }}>
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
                <Text w={{ base: "auto", lg: 600 }} size="sm">
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
                radius="md"
                h={{ base: 250, lg: 500 }}
                src="https://zeb-consulting.com/files/styles/content_layout_default/shared/media/images/2019-11/Header_Hackaton_default_schmal_1_1920x570.jpg.webp?itok=mApyfLjE"
              />
            </motion.div>
          </SimpleGrid>

          <SimpleGrid cols={2}>
            <Stack key={1}>
              {data?.images
                .filter((_: any, index: number) => index % 2 !== 0)
                .map((item: any, index: number) => (
                  <Paper key={index} p={6} withBorder shadow="md">
                    <Image
                      radius="md"
                      h={{ base: 250, lg: 500 }}
                      src="https://zeb-consulting.com/files/styles/content_layout_default/shared/media/images/2019-11/Header_Hackaton_default_schmal_1_1920x570.jpg.webp?itok=mApyfLjE"
                    />
                  </Paper>
                ))}
            </Stack>
            <Stack key={2} mt="xl">
              {" "}
              {data?.images
                .filter((_: any, index: number) => index % 2 == 0)
                .map((item: any, index: number) => (
                  <Paper key={index} p={6} withBorder shadow="md">
                    <Image
                      radius="md"
                      h={{ base: 250, lg: 500 }}
                      src="https://zeb-consulting.com/files/styles/content_layout_default/shared/media/images/2019-11/Header_Hackaton_default_schmal_1_1920x570.jpg.webp?itok=mApyfLjE"
                    />
                  </Paper>
                ))}
            </Stack>
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
