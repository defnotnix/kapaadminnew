"use client";

import React, { PropsWithChildren, useEffect, useRef } from "react";
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
  Stack,
  Text,
} from "@mantine/core";
//context
import { EventContextProvider, useEventContext } from "./event.context";
import { useWindowScroll } from "@mantine/hooks";

import classes from "./_.module.css";
import { animate, motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { BubbleOverlay } from "@/components/BubbleOverlay";
import { LayoutEventNavDrawer } from "./NavDrawer";
import { BurgerMenu } from "./BurgerMenu";
import { SectionContact } from "./Contact";
import { Layout } from "@phosphor-icons/react";
import { LayoutEventsFooter } from "./Footer";

function NavDrawer() {
  const { background, navStatus, pageLoading } = useEventContext();
  const Router = useRouter();

  return (
    <Drawer
      opened={navStatus}
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
          background: "var(--color-events-primary-200)",
        },
        header: {
          background: "var(--color-events-primary-200)",
        },
        inner: {
          background: "var(--color-events-primary-200)",
        },
        body: {
          padding: 0,
        },
      }}
    >
      XYZ
    </Drawer>
  );
}

const Header = () => {
  const { state, dispatch } = useEventContext();

  const [scroll, scrollTo] = useWindowScroll();

  const Router = useRouter();
  const Pathname = usePathname();

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
                    Router.push("/events");
                  }}
                >
                  <Image
                    h={40}
                    w={40}
                    src={
                      "https://vdocs.classicsprojects.com.np/media/profile/events.png"
                    }
                  />
                  <Text
                    size="xs"
                    fw={600}
                    lh=".9rem"
                    c={
                      state?.navStatus || scroll.y > 200
                        ? "dark.9"
                        : Pathname == "/events"
                          ? "gray.0"
                          : ""
                    }
                  >
                    The Classics
                    <br />
                    Event
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
                        state.navStatus || scroll.y > 200
                          ? "dark.9"
                          : Pathname == "/events"
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
                  color="var(--color-events-primary-500)"
                  visibleFrom="lg"
                  onClick={() => {
                    Router.push("/events/contact");
                  }}
                >
                  Get in touch
                </Button>
                <BurgerMenu />
              </Group>
            </Grid.Col>
          </Grid>
        </Container>
      </motion.div>
    </section>
  );
};

const RenderOverlay = () => {
  const { state, dispatch } = useEventContext();

  const refContainer = useRef(null);
  const refContent = useRef(null);

  const setPageLoading = async (value: boolean) => {
    if (value) {
      await animate(refContent.current, {
        opacity: 0,
      });
      await animate(refContainer.current, {
        opacity: 0,
      });
      animate(refContainer.current, {
        display: "none",
      });
      dispatch({
        type: "SET_PAGE_LOADING",
        payload: false,
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

  useEffect(() => {
    console.log("PLOADING", state?.pageLoading);
    if (state?.pageLoading == true) {
      setPageLoading(true);
    }
  }, [state?.pageLoading]);

  return (
    <motion.div
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
          Classics Events
        </Text>

        <Image
          h={64}
          w={64}
          src={"https://vdocs.classicsprojects.com.np/media/profile/events.png"}
        />

        <Stack>
          <Center>
            <Loader color="var(--color-events-primary-500)" size="16" />
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
    </motion.div>
  );
};

export function LayoutEvents({ children }: PropsWithChildren) {
  // * DEFINITIONS

  const Pathname = usePathname();

  // * CONTEXT

  // * STATE

  // * EFFECTS

  // * RENDER

  return (
    <section
      className={classes.root}
      style={{ background: "var(--color-events-primary-200)" }}
    >
      <EventContextProvider>
        <RenderOverlay />
        <Header />
        {children}
        <LayoutEventNavDrawer />

        {Pathname !== "/events/events" && (
          <>
            <SectionContact />
            <LayoutEventsFooter />
          </>
        )}
      </EventContextProvider>

      <BubbleOverlay />
    </section>
  );
}
