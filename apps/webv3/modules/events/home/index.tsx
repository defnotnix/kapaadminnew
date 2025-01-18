"use client";

//vsphere
import { apiDispatch } from "@vsphere/core";
//api
import { useQuery } from "@tanstack/react-query";
//Secionts
import { Sections } from "./sections";
//Context
import { useEventContext } from "@/layouts/events/event.context";
import { useEffect } from "react";
import { cmsPre } from "@/demoData/cms";
import { Box } from "@mantine/core";

export function ModuleEventsHome() {
  // * CONTEXT

  const { dispatch } = useEventContext();

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
      <Sections.Clients />
      <Sections.Intro />
      <Sections.Featured />
      <Sections.Overview />
      <Sections.Services />
      <Sections.Testimonials />
    </>
  );
}
