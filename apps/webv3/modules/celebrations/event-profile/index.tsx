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
import { MotionHeroFlower } from "./motion/hero.flower";

import { motion } from "framer-motion";
import { variantGeneralDelay } from "@/animation/variantGeneral";
import { AnimatedText } from "@/components/AnimatedText";

import { useQuery } from "@tanstack/react-query";
import { apiDispatch } from "@vsphere/core";

import { useParams } from "next/navigation";
import { useCelebrationContext } from "@/layouts/celebrations/celebration.context";

export function ModuleCelebrationEventProfile() {
  const Params = useParams();
  const { dispatch } = useCelebrationContext();

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

      const vidData: any = await apiDispatch.get({
        url: "/events/video/",
        params: {
          event_id: Params.id,
        },
      });

      dispatch({
        type: "SET_PAGE_LOADING",
        payload: false,
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
          background: "#EEDACEAA",
        }}
      >
        <Space h={100} />

        <Container size="lg">
          <Stack mt={64} mb={48} gap={0} visibleFrom="lg">
            <div
              className="celebration-header"
              style={{
                fontSize: "7rem",
                lineHeight: "7rem",
              }}
            >
              <AnimatedText text={data?.shortname || ""} />
            </div>

            <div className="celebration-subheader">
              <AnimatedText
                text={`${data?.fullname} | ${String(new Date(data?.event_date)).substring(0, 10)} | ${data?.venue} | ${data?.theme}`}
              />
            </div>
          </Stack>

          <Stack mt={64} mb={48} gap={0} hiddenFrom="lg">
            <div
              className="celebration-header"
              style={{
                fontSize: "3rem",
                lineHeight: "3rem",
              }}
            >
              <AnimatedText text={data?.shortname || ""} />
            </div>

            <div className="celebration-subheader">
              <AnimatedText
                text={`${data?.fullname} | ${String(new Date(data?.event_date)).substring(0, 10)} `}
              />
              <AnimatedText text={` ${data?.venue} | ${data?.theme}`} />
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
                <Image src={data?.images[0]?.image} />
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
          visibleFrom="lg"
        >
          <AnimatedText text={data?.highlight_message} />
        </Title>

        <Title
          mt={100}
          ta="center"
          size="2rem"
          lh="2rem"
          style={{
            fontFamily: '"WindSong", cursive',
          }}
          c="var(--color-celebrations-primary-500)"
          hiddenFrom="lg"
        >
          <AnimatedText text={data?.highlight_message} />
        </Title>

        <Container size="lg">
          {/* <SimpleGrid cols={{ base: 1, lg: 3 }} py={100}>
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
                  h={{
                    base: 300,
                    lg: 500,
                  }}
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
                  h={{
                    base: 300,
                    lg: 500,
                  }}
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
                  h={{
                    base: 300,
                    lg: 500,
                  }}
                  src="https://images.prismic.io/marie-guillaume/c3554ec4-911b-4ce4-b603-7d3066179e59_coralie-et-alexandre-marrakech16.jpg?fm=webp&w=1100&q=45"
                />
                <Text mt="sm" ff="WindSong" size="lg">
                  Joy in XX
                </Text>
              </Paper>
            </motion.div>
          </SimpleGrid> */}

          <SimpleGrid cols={2}>
            <Stack key={1}>
              {data?.images
                .filter((_: any, index: number) => index % 2 !== 0)
                .map((item: any, index: number) => (
                  <Paper key={index} p={6} withBorder shadow="md">
                    <Image src={item?.image} />
                  </Paper>
                ))}
            </Stack>
            <Stack key={2}>
              {" "}
              {data?.images
                .filter((_: any, index: number) => index % 2 == 0)
                .map((item: any, index: number) => (
                  <Paper key={index} p={6} withBorder shadow="md">
                    <Image src={item?.image} />
                  </Paper>
                ))}
            </Stack>
          </SimpleGrid>

          {/* <Grid visibleFrom="lg">
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
                    h={{ base: 400, lg: 500 }}
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
                  p={{ base: "xs", lg: 8 }}
                  style={{
                    transform: "rotate(-6deg)",
                  }}
                >
                  <Image
                    h={{ base: 200, lg: 360 }}
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
                  p={{ base: "xs", lg: 8 }}
                  style={{
                    transform: "rotate(6deg)",
                  }}
                >
                  <Image
                    h={{ base: 200, lg: 360 }}
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
          </Grid> */}
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
