"use client";
import React from "react";
import { SectionContact } from "./components/contact";
import { LayoutEventsFooter } from "./components/footer";

export function LayoutEventsFull({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <SectionContact />
      <LayoutEventsFooter />
    </>
  );
}
