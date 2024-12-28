"use client";

import { useQuery } from "@tanstack/react-query";
import { SectionsEvents } from "./sections";

export function ModuleEventsHome() {
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
      <SectionsEvents.Hero />
      <SectionsEvents.Clients />
      <SectionsEvents.Intro />
      <SectionsEvents.Featured />
      <SectionsEvents.Overview />
      <SectionsEvents.Services />
      <SectionsEvents.Testimonials />
    </>
  );
}
