"use client";
import React, { useEffect } from "react";
import { SectionContact } from "./components/contact";
import { useInViewport, useWindowScroll } from "@mantine/hooks";
import { useCelebrationContext } from "../celebrations";
import { LayoutCelebrationsFooter } from "./components/footer";

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

import imgLogo from "@/assets/images/brand/celebrations.png";
import { usePathname, useRouter } from "next/navigation";

import { BranchNav } from "./components/branchnav";

import { motion } from "framer-motion";

export function LayoutCelebrationsFull({
  children,
}: {
  children: React.ReactNode;
}) {
  const { navStatus, navOpen, navClose, navToggle } = useCelebrationContext();

  const Router = useRouter();
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
            background: "rgba(251, 229, 229,0)",
            backdropFilter: "blur(0px)",
            left: 0,
          }}
          initial={{
            background: "rgba(251, 229, 229,0)",
          }}
          animate={
            scroll.y > 200
              ? {
                  background: "rgba(251, 229, 229,.1)",
                  backdropFilter: "blur(16px)",
                }
              : {}
          }
        >
          <Container py="lg">
            <Grid>
              <Grid.Col span={{ base: 8, lg: 5 }}>
                <Group wrap="nowrap">
                  <Group
                    onClick={() => {
                      Router.push("/celebrations");
                    }}
                  >
                    <Image h={40} w={40} src={imgLogo.src} />
                    <Text
                      size="xs"
                      fw={600}
                      lh=".9rem"
                      c={
                        navStatus || scroll.y > 200
                          ? "dark.9"
                          : Pathname == "/celebrations"
                            ? "gray.0"
                            : ""
                      }
                    >
                      The Classics
                      <br />
                      Celebration
                    </Text>
                  </Group>
                  {true && (
                    <>
                      <Text visibleFrom="lg" size="md">
                        *
                      </Text>
                      <Text
                        visibleFrom="lg"
                        size="xs"
                        opacity={0.8}
                        fw={600}
                        lh=".9rem"
                        c={
                          navStatus || scroll.y > 200
                            ? "dark.9"
                            : Pathname == "/celebrations"
                              ? "gray.0"
                              : ""
                        }
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
                    color="var(--color-celebrations-primary-500)"
                    visibleFrom="lg"
                    onClick={() => {
                      Router.push("/celebrations/contact");
                    }}
                  >
                    Get in touch
                  </Button>
                  <Burger
                    color={
                      navStatus || scroll.y > 200
                        ? "dark.9"
                        : Pathname == "/celebrations"
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

      {Pathname !== "/celebrations/events" && (
        <>
          <SectionContact />

          <LayoutCelebrationsFooter />
        </>
      )}

      <BranchNav />
    </>
  );
}
