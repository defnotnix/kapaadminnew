"use client";

//vsphere
import { apiDispatch } from "@vsphere/core";
//api
import { useQuery } from "@tanstack/react-query";
//Secionts

//Context
import { useCelebrationContext } from "@/layouts/celebrations/celebration.context";
import { Sections } from "./sections";

import { cmsPre } from "@/demoData/cms";
import { Box } from "@mantine/core";

export function ModuleCelebrationAbout() {
  // * CONTEXT

  const { dispatch } = useCelebrationContext();

  // * FETCH

  const { data, isFetching }: any = useQuery({
    queryKey: ["events", "home"],
    queryFn: async () => {
      const resCMS: any = await apiDispatch.get({ url: "/cms/content/" });

      await dispatch({
        type: "SET_PRE_DATA",
        payload: {
          cms: resCMS.data,
        },
      });

      return {
        cms: resCMS.data || [],
      };
    },
    initialData: {
      cms: [],
    },
  });

  if (isFetching) {
    return <></>;
  }

  return (
    <>
      <Sections.Intro />
      <Sections.History />
      <Sections.Approach />
      <Box visibleFrom="lg">
        <Sections.Mission />
      </Box>
      <Box hiddenFrom="lg">
        <Sections.MissionMob />
      </Box>
    </>
  );
}
