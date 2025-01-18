"use client";
import React, { createContext, useContext, useRef } from "react";
import { Center, Drawer, Image, Loader, Stack, Text } from "@mantine/core";
import { LayoutCelebrationNavDrawer } from "../celebrations/navdrawer";
import { useDisclosure } from "@mantine/hooks";

import { AnimatePresence, motion, animate } from "framer-motion";
//styles
import classes from "./event.module.css";
import { LayoutEventNavDrawer } from "./navdrawer";

const ContextEvent: any = createContext(null);

export const useEventContext: any = () => {
  return useContext(ContextEvent);
};

export function LayoutEvents({ children }: { children: React.ReactNode }) {
  const refContainer = useRef(null);
  const refContent = useRef(null);

  const [background, setBackground] = React.useState(null);

  const [opened, { open, close, toggle }] = useDisclosure(false);

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
      <ContextEvent.Provider
        value={{
          background,
          setBackground,
          navOpen: open,
          navClose: close,
          navStatus: opened,
          navToggle: toggle,
          setPageLoading: setPageLoading,
        }}
      >
        <section
          className={classes.root}
          style={
            background
              ? {
                  background: background,
                }
              : {}
          }
        >
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
            <LayoutEventNavDrawer open={open} close={close} />
          </Drawer>

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
                Classics Celebrations
              </Text>

              <Image
                h={64}
                w={64}
                src={
                  "https://vdocs.classicsprojects.com.np/media/profile/events.png"
                }
              />

              <Stack>
                <Center>
                  <Loader
                    color="var(--color-events-primary-500)"
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
          </motion.div>
        </section>
      </ContextEvent.Provider>
    </>
  );
}
