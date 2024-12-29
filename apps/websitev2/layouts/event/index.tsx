"use client";
import React, { createContext, useContext } from "react";
import { Drawer } from "@mantine/core";
import { LayoutCelebrationNavDrawer } from "../celebrations/navdrawer";
import { useDisclosure } from "@mantine/hooks";

//styles
import classes from "./event.module.css";
import { LayoutEventNavDrawer } from "./navdrawer";

const ContextEvent: any = createContext(null);

export const useEventContext: any = () => {
  return useContext(ContextEvent);
};

export function LayoutEvents({ children }: { children: React.ReactNode }) {
  const [background, setBackground] = React.useState(null);

  const [opened, { open, close, toggle }] = useDisclosure(false);

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
        </section>
      </ContextEvent.Provider>
    </>
  );
}
