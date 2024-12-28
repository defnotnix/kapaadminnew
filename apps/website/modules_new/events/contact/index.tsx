"use client";

import {
  ActionIcon,
  Box,
  Button,
  Container,
  Grid,
  Group,
  Paper,
  Select,
  SimpleGrid,
  Space,
  Stack,
  Text,
  Textarea,
  TextInput,
} from "@mantine/core";

//animation
import { AnimatedText } from "@/components/AnimatedText";
import { variantContainer } from "@/animation/variantContainer";
import {
  variantGeneral,
  variantGeneralDelay,
} from "@/animation/variantGeneral";
import { motion } from "framer-motion";
import { DateInput } from "@mantine/dates";
import { defaultInputStyleProps } from "@/config/theme/mantine.components.config";
import {
  Check,
  InstagramLogo,
  MessengerLogo,
  WhatsappLogo,
} from "@phosphor-icons/react";
import { MotionHeroFlower } from "@/animation/hero.flower";

export function ModuleEventsContact({
  sectionData = {
    subheading: "Inquiry",
    heading: ["Ready to seamlessly", "host your events?"],
    paragraph: [
      `We prefer you get in touch with us through call or whatsapp and we will be happy to answer any questions you may have.`,
    ],
    image:
      "https://www.isabl.io/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Fisabl%2F5703e0fd-e020-479e-879e-d1ab462511ab__DSC8366.jpg%3Fauto%3Dcompress%2Cformat&w=3840&q=75",
  },
}: any) {
  const { subheading, heading, paragraph, image } = sectionData;
  return (
    <>
      <Container py={200}>
        <Grid>
          <Grid.Col span={{ base: 12, lg: 4 }}>
            <Stack gap="xl">
              <Text size="sm">THE CLASSICS PROJECT</Text>

              <motion.div
                variants={variantGeneralDelay(0.4)}
                initial="initial"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
              >
                <Stack gap="sm" my="xs">
                  <Text size="xs" opacity={0.5}>
                    OFFICE
                  </Text>

                  <Text size="xs">The Classics Projects HQ,</Text>
                  <Text size="xs">
                    Lan Rd Marg, Himalayan Floral Enterprises,
                    <br /> Nayabasti, Kathmandu, Nepal.
                  </Text>
                  <Text size="xs">Sunday - Friday ( 10 AM - 5 PM)</Text>
                </Stack>
              </motion.div>

              <motion.div
                variants={variantGeneralDelay(0.5)}
                initial="initial"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
              >
                <Stack gap="sm" my="xs">
                  <Text size="xs" opacity={0.5}>
                    CONTACT
                  </Text>

                  <Text size="xs">+977 9801464626</Text>
                  <Text size="xs">classics.projects@gmail.com</Text>
                </Stack>
              </motion.div>
            </Stack>
          </Grid.Col>

          <Grid.Col span={{ base: 12, lg: 8 }}>
            <div className="event-subheader flex-left">
              <AnimatedText text={subheading} />
            </div>

            <Stack gap="xs">
              <div className="event-header flex-left">
                {heading.map((item: string, index: number) => (
                  <AnimatedText key={index} text={item} />
                ))}
              </div>

              <Group h={130}>
                <motion.div
                  variants={variantGeneralDelay(0.2)}
                  initial="initial"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <Box>
                    <Text mb="sm" size="xs">
                      Jump in a call with us
                    </Text>
                    <Button
                      size="lg"
                      radius="lg"
                      color="var(--color-events-primary-500)"
                    >
                      +977-9812341231
                    </Button>
                  </Box>
                </motion.div>
                <motion.div
                  variants={variantGeneralDelay(0.3)}
                  initial="initial"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <Box>
                    <Text mb="sm" size="xs">
                      Or contact us via
                    </Text>
                    <Group gap="4px">
                      <ActionIcon
                        size="52px"
                        w={64}
                        radius="lg"
                        color="green.5"
                      >
                        <WhatsappLogo size={24} weight="fill" />
                      </ActionIcon>
                      <ActionIcon size="52px" w={64} radius="lg" color="blue.5">
                        <MessengerLogo size={24} weight="fill" />
                      </ActionIcon>
                      <ActionIcon
                        size="52px"
                        w={64}
                        radius="lg"
                        color="orange.5"
                      >
                        <InstagramLogo size={24} weight="fill" />
                      </ActionIcon>
                    </Group>
                  </Box>
                </motion.div>
              </Group>

              <motion.div layout variants={variantContainer}>
                <Stack gap="md">
                  {paragraph.map((item: string, index: number) => (
                    <motion.div
                      className="general-text"
                      variants={variantGeneral}
                      initial="initial"
                      whileInView={"visible"}
                      viewport={{ once: true }}
                      key={index}
                    >
                      {paragraph[index]}
                    </motion.div>
                  ))}

                  <Stack py={"xl"}>
                    <motion.div
                      variants={variantGeneral}
                      initial="initial"
                      whileInView={"visible"}
                      viewport={{ once: true }}
                    >
                      <TextInput
                        size="xl"
                        label="Full Name"
                        variant="filled"
                        placeholder="Enter your full Name"
                        styles={{
                          input: {
                            background: "var(--color-events-primary-50)",
                            fontSize: "var(--mantine-font-size-xs)",
                          },
                          label: {
                            fontSize: "var(--mantine-font-size-sm)",
                            marginTop: "4px",
                          },
                        }}
                      />
                    </motion.div>

                    <SimpleGrid cols={2}>
                      <motion.div
                        variants={variantGeneral}
                        initial="initial"
                        whileInView={"visible"}
                        viewport={{ once: true }}
                      >
                        <Select
                          size="xl"
                          label="Event-Category"
                          variant="filled"
                          placeholder="Select your event-category"
                          styles={{
                            input: {
                              background: "var(--color-events-primary-50)",
                              fontSize: "var(--mantine-font-size-xs)",
                            },
                            label: {
                              fontSize: "var(--mantine-font-size-sm)",
                              marginTop: "4px",
                            },
                          }}
                        />
                      </motion.div>
                      <motion.div
                        variants={variantGeneral}
                        initial="initial"
                        whileInView={"visible"}
                        viewport={{ once: true }}
                      >
                        {" "}
                        <DateInput
                          size="xl"
                          label="Event Date"
                          variant="filled"
                          placeholder="When are you expecting to host your event."
                          styles={{
                            input: {
                              background: "var(--color-events-primary-50)",
                              fontSize: "var(--mantine-font-size-xs)",
                            },
                            label: {
                              fontSize: "var(--mantine-font-size-sm)",
                              marginTop: "4px",
                            },
                          }}
                        />
                      </motion.div>
                    </SimpleGrid>
                    <motion.div
                      variants={variantGeneral}
                      initial="initial"
                      whileInView={"visible"}
                      viewport={{ once: true }}
                    >
                      {" "}
                      <TextInput
                        size="xl"
                        label="Preferred Theme"
                        variant="filled"
                        placeholder="Enter your full Name"
                        styles={{
                          input: {
                            background: "var(--color-events-primary-50)",
                            fontSize: "var(--mantine-font-size-xs)",
                          },
                          label: {
                            fontSize: "var(--mantine-font-size-sm)",
                            marginTop: "4px",
                          },
                        }}
                      />
                    </motion.div>
                    <motion.div
                      variants={variantGeneral}
                      initial="initial"
                      whileInView={"visible"}
                      viewport={{ once: true }}
                    >
                      {" "}
                      <TextInput
                        size="xl"
                        label="Preferred Venue"
                        variant="filled"
                        placeholder="Enter your full Name"
                        styles={{
                          input: {
                            background: "var(--color-events-primary-50)",
                            fontSize: "var(--mantine-font-size-xs)",
                          },
                          label: {
                            fontSize: "var(--mantine-font-size-sm)",
                            marginTop: "4px",
                          },
                        }}
                      />
                    </motion.div>

                    <SimpleGrid cols={3}>
                      <motion.div
                        variants={variantGeneral}
                        initial="initial"
                        whileInView={"visible"}
                        viewport={{ once: true }}
                      >
                        {" "}
                        <TextInput
                          size="xl"
                          label="Contact Number"
                          variant="filled"
                          placeholder="Enter your full Name"
                          styles={{
                            input: {
                              background: "var(--color-events-primary-50)",
                              fontSize: "var(--mantine-font-size-xs)",
                            },
                            label: {
                              fontSize: "var(--mantine-font-size-sm)",
                              marginTop: "4px",
                            },
                          }}
                        />
                      </motion.div>
                      <motion.div
                        variants={variantGeneral}
                        initial="initial"
                        whileInView={"visible"}
                        viewport={{ once: true }}
                      >
                        {" "}
                        <TextInput
                          size="xl"
                          label="Contact Email"
                          variant="filled"
                          placeholder="Enter your full Name"
                          styles={{
                            input: {
                              background: "var(--color-events-primary-50)",
                              fontSize: "var(--mantine-font-size-xs)",
                            },
                            label: {
                              fontSize: "var(--mantine-font-size-sm)",
                              marginTop: "4px",
                            },
                          }}
                        />
                      </motion.div>

                      <motion.div
                        variants={variantGeneral}
                        initial="initial"
                        whileInView={"visible"}
                        viewport={{ once: true }}
                      >
                        {" "}
                        <TextInput
                          size="xl"
                          label="Preferred Communication"
                          variant="filled"
                          placeholder="Enter your full Name"
                          styles={{
                            input: {
                              background: "var(--color-events-primary-50)",
                              fontSize: "var(--mantine-font-size-xs)",
                            },
                            label: {
                              fontSize: "var(--mantine-font-size-sm)",
                              marginTop: "4px",
                            },
                          }}
                        />
                      </motion.div>
                    </SimpleGrid>
                    <motion.div
                      variants={variantGeneral}
                      initial="initial"
                      whileInView={"visible"}
                      viewport={{ once: true }}
                    >
                      {" "}
                      <Textarea
                        rows={10}
                        size="xl"
                        label="Remarks"
                        variant="filled"
                        placeholder="Enter your full Name"
                        styles={{
                          input: {
                            background: "var(--color-events-primary-50)",
                            fontSize: "var(--mantine-font-size-xs)",
                          },
                          label: {
                            fontSize: "var(--mantine-font-size-sm)",
                            marginTop: "4px",
                          },
                        }}
                      />
                    </motion.div>

                    <Group justify="flex-end">
                      <Button
                        size="xl"
                        color="var(--color-events-primary-500)"
                        leftSection={<Check />}
                      >
                        Submit
                      </Button>
                    </Group>
                  </Stack>
                </Stack>
              </motion.div>
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>
    </>
  );
}
