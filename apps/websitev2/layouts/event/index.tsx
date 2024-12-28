"use client";
import React, { createContext, useContext } from "react";

//styles
import classes from "./event.module.css";

const ContextEvent: any = createContext(null);

export const useEventContext: any = () => {
  return useContext(ContextEvent);
};

export function LayoutEvents({ children }: { children: React.ReactNode }) {
  const [background, setBackground] = React.useState(null);

  return (
    <>
      <ContextEvent.Provider
        value={{
          background,
          setBackground,
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
        </section>
      </ContextEvent.Provider>
    </>
  );
}
