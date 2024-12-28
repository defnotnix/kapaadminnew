"use client";

import { useQuery } from "@tanstack/react-query";
import { SectionsCelebrationsHome } from "./sections";
import { useContext } from "react";
import { createContext } from "vm";

export function ModuleCelebrationsHome() {
  const { data, isFetching } = useQuery({
    queryKey: ["celebrations", "home"],
    queryFn: async () => {
      const res = await fetch("/api/celebrations");
      return res.json();
    },
    initialData: [],
  });

  return (
    <>
      <SectionsCelebrationsHome.Hero />
      <SectionsCelebrationsHome.Intro />
      <SectionsCelebrationsHome.Phase />
      <SectionsCelebrationsHome.Offerings />
      <SectionsCelebrationsHome.Featured />
      <SectionsCelebrationsHome.Instagram />
      <SectionsCelebrationsHome.Contact />
    </>
  );
}
