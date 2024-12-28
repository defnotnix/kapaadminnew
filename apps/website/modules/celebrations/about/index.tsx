"use client";

import React from "react";
//next
import type { InferGetStaticPropsType, GetStaticProps } from "next";
//sections
import { Sections } from "./sections";

type PropCMSData = {
  cmsData: any[];
};

export const getStaticProps = (async (context) => {
  const res = {
    cmsData: [],
  };
  return {
    props: { cmsData: res },
  };
}) satisfies GetStaticProps<{
  cmsData: PropCMSData;
}>;

export function ModuleCelebrationsAbout({
  cmsData,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  // * DEFINITION

  // * CONTEXT

  // * STATES

  // * FUNCTION

  // * COMPONENTS

  return (
    <>
      <Sections.Intro />
      <Sections.History />
      <Sections.Approach />
      <Sections.Mission />
    </>
  );
}
