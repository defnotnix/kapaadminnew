"use client";

import { useQuery } from "@tanstack/react-query";
import { SectionsCelebrationsHome } from "./sections";
import { apiDispatch } from "@vsphere/core";

import { Box } from "@mantine/core";
import { useCelebrationContext } from "@/layouts/celebrations";

export function ModuleEventsHome() {
  const { setPageLoading } = useCelebrationContext();

  const { data, isFetching } = useQuery({
    queryKey: ["celebrations", "home"],
    queryFn: async () => {
      const res: any = await apiDispatch.get({ url: "/cms/content/" });
      setPageLoading(false);
      return res.data;
    },
    initialData: [],
  });

  const queryEvents: any = useQuery({
    queryKey: ["celebrations", "events"],
    queryFn: async () => {
      const res: any = await apiDispatch.get({ url: "/events/info/" });
      console.log(res);
      return res.data;
    },
    initialData: [],
  });

  const getDataForHero = () => {
    if (!isFetching) {
      const _data = data.find((item: any) => item.id == 14);
      const _textData = JSON.parse(_data.text);

      const _eventData = data.filter((item: any) => {
        return [10, 11, 12].includes(item.id);
      });

      return {
        ..._textData,
        events: _eventData.map((item: any) => {
          return {
            ...item,
            ...JSON.parse(item.text),
          };
        }),
      };
    }
    return {};
  };

  const getDataIntro = () => {
    if (!isFetching) {
      const _data = data.find((item: any) => item.id == 15);
      const _textData = JSON.parse(_data.text);

      console.log(_textData);

      return {
        ..._textData,
        heading: [
          _textData?.heading1,
          _textData?.heading2,
          _textData?.heading3,
        ],
      };
    } else {
      return {};
    }
  };

  const getDataInstagram = () => {
    if (!isFetching) {
      const _data = data.find((item: any) => item.id == 16);
      const _textData = JSON.parse(_data.text);

      return {
        ...data,
        ..._textData,
        heading: [
          _textData?.heading1,
          _textData?.heading2,
          _textData?.heading3,
        ],
        paragraph: [_textData?.paragraph1, _textData?.paragraph2],
      };
    } else {
      return {};
    }
  };

  const getDataPhase = () => {
    const _data = data.filter((item: any) => [16, 17, 18].includes(item.id));

    console.log({
      phases: _data.map((item: any) => {
        const _textData = JSON.parse(item.text);

        return {
          ...item,
          ..._textData,
        };
      }),
    });

    return {
      phases: _data.map((item: any) => {
        const _textData = JSON.parse(item.text);

        return {
          ...item,
          ..._textData,
        };
      }),
    };
  };

  return (
    <>
      <Box visibleFrom="lg">
        <SectionsCelebrationsHome.Hero sectionData={getDataForHero()} />
      </Box>

      <Box hiddenFrom="lg">
        <SectionsCelebrationsHome.HeroMobile sectionData={getDataForHero()} />
      </Box>

      <SectionsCelebrationsHome.Intro sectionData={getDataIntro()} />
      <SectionsCelebrationsHome.Phase sectionData={getDataPhase()} />
      <SectionsCelebrationsHome.Offerings />
      <SectionsCelebrationsHome.Featured events={queryEvents.data} />
      <SectionsCelebrationsHome.Instagram />
    </>
  );
}
