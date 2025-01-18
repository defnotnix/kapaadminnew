"use client";
import React, { createContext, useContext, useRef } from "react";

//styles
import classes from "./celebrations.module.css";
import { Center, Drawer, Image, Loader, Stack, Text } from "@mantine/core";
import { LayoutCelebrationNavDrawer } from "./navdrawer";
import { useDisclosure } from "@mantine/hooks";

import { AnimatePresence, motion, animate } from "framer-motion";

const ContextCelebration: any = createContext(null);

export const useCelebrationContext: any = () => {
  return useContext(ContextCelebration);
};

export function LayoutCelebrations({
  children,
}: {
  children: React.ReactNode;
}) {
  const [background, setBackground] = React.useState<string | null>(null);

  // * REF

  const refContainer = useRef(null);
  const refContent = useRef(null);

  function updateBackgroundColor(color: string | null) {
    return setBackground(color);
  }

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
      <ContextCelebration.Provider
        value={{
          background,
          setBackground: updateBackgroundColor,
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
                background: "var(--color-celebrations-primary-200)",
              },
              header: {
                background: "var(--color-celebrations-primary-200)",
              },
              inner: {
                background: "var(--color-celebrations-primary-200)",
              },
              body: {
                padding: 0,
              },
            }}
          >
            <LayoutCelebrationNavDrawer open={open} close={close} />
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
                  "https://vdocs.classicsprojects.com.np/media/profile/celebrations.png"
                }
              />

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
          </motion.div>
        </section>
      </ContextCelebration.Provider>
    </>
  );
}
