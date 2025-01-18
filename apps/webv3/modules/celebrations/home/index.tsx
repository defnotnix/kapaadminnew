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

export function ModuleCelebrationHome() {
  // * CONTEXT

  const { dispatch } = useCelebrationContext();

  // * FETCH

  const { data, isFetching }: any = useQuery({
    queryKey: ["events", "home"],
    queryFn: async () => {
      const resCMS: any = await apiDispatch.get({ url: "/cms/content/" });
      const resTestimonials: any = await apiDispatch.get({
        url: "/company/testimonials/",
      });
      const resEvents: any = await apiDispatch.get({ url: "/events/info/" });

      await dispatch({
        type: "SET_PRE_DATA",
        payload: {
          cms: resCMS.data || [],
          testimonials: resTestimonials.data || [],
          events: resEvents.data || [],
        },
      });

      return {
        cms: resCMS.data || [],
        testimonials: resTestimonials.data || [],
        events: resEvents.data || [],
      };
    },
    initialData: {
      cms: [],
      testimonials: [],
      events: [],
    },
  });

  if (isFetching) {
    return <></>;
  }

  return (
    <>
      <Box visibleFrom="lg">
        <Sections.Hero />
      </Box>
      <Box hiddenFrom="lg">
        <Sections.HeroMobile />
      </Box>
      <Sections.Intro />
      <Sections.Phase />
      <Sections.Offerings />
      <Sections.Feaured />
      <Sections.Instagram />
    </>
  );
}
