"use client";
import React from "react";
import { SectionContact } from "./components/contact";
import { LayoutEventsFooter } from "./components/footer";

import classes from "./full.module.css";
import {
  Burger,
  Button,
  Container,
  Grid,
  Group,
  Image,
  Text,
} from "@mantine/core";

import imgLogo from "@/assets/images/brand/events.png";
import { usePathname } from "next/navigation";
import { useEventContext } from "../event";
import { useWindowScroll } from "@mantine/hooks";

import { motion } from "framer-motion";
import { BranchNav } from "../celebrations-full/components/branchnav";

export function LayoutEventsFull({ children }: { children: React.ReactNode }) {
  const { navStatus, navOpen, navClose, navToggle } = useEventContext();

  const Pathname = usePathname();

  const Header = () => {
    const [scroll, scrollTo] = useWindowScroll();

    return (
      <section className={classes.header}>
        <motion.div
          style={{
            display: "block",
            width: "100vw",
            top: 0,
            position: "fixed",

            backdropFilter: "blur(16px)",
            left: 0,
          }}
          initial={{
            background: "rgba(234, 239, 243,0)",
          }}
          animate={
            scroll.y > 200 ? { background: "rgba(234, 239, 243,.3)" } : {}
          }
        >
          <Container py="lg">
            <Grid>
              <Grid.Col span={{ base: 8, lg: 5 }}>
                <Group wrap="nowrap">
                  <Image h={40} w={40} src={imgLogo.src} />
                  <Text
                    size="xs"
                    fw={600}
                    lh=".9rem"
                    c={Pathname == "/events" && !navStatus ? "gray.0" : ""}
                  >
                    The Classics
                    <br />
                    Event
                  </Text>
                  {Pathname !== "/events" && (
                    <>
                      <Text size="md" visibleFrom="lg">
                        *
                      </Text>
                      <Text
                        visibleFrom="lg"
                        size="xs"
                        opacity={0.5}
                        fw={600}
                        lh=".9rem"
                        c={Pathname == "/events" ? "gray.0" : ""}
                      >
                        We plan, produce, coordinate, design,
                        <br /> style, promote and live for a good party.
                      </Text>
                    </>
                  )}
                </Group>
              </Grid.Col>

              <Grid.Col span={{ base: 4, lg: 3 }} offset={{ base: 0, lg: 4 }}>
                <Group justify="flex-end">
                  <Button
                    size="md"
                    px="xl"
                    color="var(--color-events-primary-500)"
                    visibleFrom="lg"
                  >
                    Get in touch
                  </Button>
                  <Burger
                    color={
                      navStatus
                        ? "dark.9"
                        : Pathname == "/events"
                          ? "gray.0"
                          : ""
                    }
                    size="sm"
                    opened={navStatus}
                    onClick={navToggle}
                  />
                </Group>
              </Grid.Col>
            </Grid>
          </Container>
        </motion.div>
      </section>
    );
  };

  return (
    <>
      <Header />
      {children}
      <SectionContact />
      <LayoutEventsFooter />
      <BranchNav />
    </>
  );
}
