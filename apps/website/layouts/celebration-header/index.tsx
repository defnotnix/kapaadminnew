"use client";

import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useRef,
  useState,
} from "react";

//mantine
import {
  Burger,
  Button,
  Center,
  Container,
  Drawer,
  Grid,
  Group,
  Image,
  Loader,
  Paper,
  Stack,
  Text,
} from "@mantine/core";
//image
import imgLogo from "@/assets/images/brand/celebrations.png";
import imgEvents from "@/assets/images/brand/events.png";
import imgSocieties from "@/assets/images/brand/societies.png";
import imgCreations from "@/assets/images/brand/creations.png";
//styles

import { LayoutCelebrationsFooter } from "./footer";
import { useDisclosure, useHover } from "@mantine/hooks";
import { LayoutCelebrationNavDrawer } from "./navdrawer";

//styles
import classes from "./celebration.module.css";

import { AnimatePresence, motion, animate } from "framer-motion";

const ContextCelebration: any = createContext(null);

export const useCelebrationContext: any = () => {
  return useContext(ContextCelebration);
};

export function LayoutCelebrationsHeader({ children }: PropsWithChildren) {
  const [opened, { open, close, toggle }] = useDisclosure(false);

  // * REF

  const refContainer = useRef(null);
  const refContent = useRef(null);

  // * COMPONENTS

  const RenderNav = () => {
    const { hovered, ref } = useHover();

    return (
      <motion.div ref={ref}>
        <div className={classes.branchnav}>
          <Paper p="md" withBorder radius="999" className={classes.mainbtn}>
            <Image h={64} w={64} src={imgLogo.src} />
          </Paper>

          <motion.div
            initial={{ transform: "scale(0)", opacity: 0 }}
            animate={
              hovered
                ? { transform: "scale(1)", opacity: 1 }
                : { transform: "scale(0)", opacity: 0 }
            }
          >
            <Paper className={classes.hoverCard} h={400} w={400}>
              <Paper
                p="md"
                withBorder
                radius="999"
                style={{
                  background: "rgba(0, 0, 0, 0.1)",
                  backdropFilter: "blur(24px)",
                  position: "absolute",
                  right: 150,
                  marginTop: -50,
                  cursor: "pointer",
                }}
              >
                <Image h={64} w={64} src={imgEvents.src} />
              </Paper>
              <Paper
                p="md"
                withBorder
                radius="999"
                style={{
                  background: "rgba(0,0,0, 0.1)",
                  backdropFilter: "blur(24px)",
                  position: "absolute",
                  cursor: "pointer",
                }}
              >
                <Image h={64} w={64} src={imgCreations.src} />
              </Paper>
              <Paper
                p="md"
                withBorder
                radius="999"
                style={{
                  background: "rgba(0, 0, 0, 0.1)",
                  backdropFilter: "blur(24px)",
                  position: "absolute",
                  bottom: 150,
                  marginLeft: -50,
                  cursor: "pointer",
                }}
              >
                <Image h={64} w={64} src={imgSocieties.src} />
              </Paper>
            </Paper>
          </motion.div>
        </div>
      </motion.div>
    );
  };

  const setPageLoading = async (value: boolean) => {
    if (!value) {
      await animate(refContent.current, {
        opacity: 0,
      });
      await animate(refContainer.current, {
        opacity: 0,
      });
      animate(refContainer.current, {
        display: "none",
      });
    } else {
      await animate(refContainer.current, {
        display: "block",
      });
      await animate(refContainer.current, {
        opacity: 1,
      });
      animate(refContent.current, {
        opacity: 1,
      });
    }
  };

  return (
    <>
      <ContextCelebration.Provider
        value={{
          setPageLoading,
        }}
      >
        <section className={classes.root}>
          <section className={classes.header}>
            <Container>
              <Grid>
                <Grid.Col span={{ base: 12, lg: 5 }}>
                  <Group wrap="nowrap">
                    <Image h={40} w={40} src={imgLogo.src} />
                    <Text size="xs" fw={600} lh=".9rem">
                      The Classics
                      <br />
                      Celebration
                    </Text>
                    <Text size="md">*</Text>
                    <Text size="xs" opacity={0.5} fw={600} lh=".9rem">
                      We plan, produce, coordinate, design,
                      <br /> style, promote and live for a good party.
                    </Text>
                  </Group>
                </Grid.Col>

                <Grid.Col
                  span={{ base: 12, lg: 3 }}
                  offset={{ base: 0, lg: 4 }}
                >
                  <Group justify="flex-end">
                    <Button
                      size="md"
                      px="xl"
                      color="var(--color-celebrations-primary-500)"
                    >
                      Get in touch
                    </Button>
                    <Burger size="sm" opened={opened} onClick={toggle} />
                  </Group>
                </Grid.Col>
              </Grid>
            </Container>
          </section>
          {children}

          <Drawer
            opened={opened}
            position="top"
            size="100%"
            onClose={close}
            withCloseButton={false}
            transitionProps={{
              transition: "fade",
              duration: 150,
            }}
            styles={{
              content: {
                background: "var(--color-celebrations-primary-200)",
              },
              header: {
                background: "var(--color-celebrations-primary-200)",
              },
              inner: {
                background: "var(--color-celebrations-primary-200)",
              },
            }}
          >
            <LayoutCelebrationNavDrawer open={open} close={close} />
          </Drawer>

          {/* <motion.div
            ref={refContainer}
            key={"mainloader"}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={classes.loader_container}
          >
            <motion.section ref={refContent} className={classes.loader_content}>
              <Text
                size="xs"
                p="xl"
                tt="uppercase"
                fw={600}
                style={{
                  letterSpacing: "2px",
                }}
              >
                Classics Celebrations
              </Text>

              <Image h={64} w={64} src={imgLogo.src} />

              <Stack>
                <Center>
                  <Loader
                    color="var(--color-celebrations-primary-500)"
                    size="16"
                  />
                </Center>
                <Text
                  size="xs"
                  p="xl"
                  tt="uppercase"
                  fw={600}
                  style={{
                    letterSpacing: "2px",
                  }}
                >
                  For your cherished moments.
                </Text>
              </Stack>
            </motion.section>
          </motion.div> */}
        </section>
      </ContextCelebration.Provider>
    </>
  );
}
