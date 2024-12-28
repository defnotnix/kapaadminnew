"use client";
import React, { createContext, useContext } from "react";

//styles
import classes from "./celebrations.module.css";
import { Drawer } from "@mantine/core";
import { LayoutCelebrationNavDrawer } from "./navdrawer";
import { useDisclosure } from "@mantine/hooks";

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

  function updateBackgroundColor(color: string | null) {
    return setBackground(color);
  }

  const [opened, { open, close, toggle }] = useDisclosure(false);

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
        </section>
      </ContextCelebration.Provider>
    </>
  );
}
