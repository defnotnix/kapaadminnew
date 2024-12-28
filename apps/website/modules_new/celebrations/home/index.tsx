"use client";

import React, { useEffect } from "react";
//next
import type { InferGetStaticPropsType, GetStaticProps } from "next";
import { getRecords } from "./module.api";
import { useQuery } from "@tanstack/react-query";
import { useCelebrationContext } from "@/layouts/celebration";
import { SectionsCelebrations } from "./sections";

export function ModuleCelebrationsHome() {
  // * DEFINITION

  // * CONTEXT

  const { pageLoading, setPageLoading } = useCelebrationContext();

  // * STATES

  // * PRELOAD

  const { data, isFetching, refetch } = useQuery({
    queryKey: ["celebrations", "home"],
    queryFn: async () => {
      const res = await getRecords();
      console.log(res);
      setPageLoading(false);
      return res.data;
    },
    initialData: [],
  });

  // * FUNCTION

  // * COMPONENTS

  return (
    <>
      <SectionsCelebrations.Hero
        sectionData={data?.find((item: any) => item.id == 1)}
      />
      <SectionsCelebrations.Intro
        sectionData={data?.find((item: any) => item.id == 6) || null}
      />

      <SectionsCelebrations.Phase
        sectionData={{
          phase: [
            data?.find((item: any) => item.id == 7) || {},
            data?.find((item: any) => item.id == 8) || {},
            data?.find((item: any) => item.id == 9) || {},
          ],
        }}
      />

      <SectionsCelebrations.Featured />

      <SectionsCelebrations.Offerings />

      <SectionsCelebrations.Instagram />
    </>
  );
}
