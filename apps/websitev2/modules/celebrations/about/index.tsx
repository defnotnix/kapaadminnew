"use client";

import React from "react";
import { Box } from "@mantine/core";
//next
import type { InferGetStaticPropsType, GetStaticProps } from "next";
//sections
import { Sections } from "./sections";
import { useQuery } from "@tanstack/react-query";
import { apiDispatch } from "../../../../../packages/core/src/helpers";

export function ModuleCelebrationsAbout() {
  // * DEFINITION

  // * CONTEXT

  // * STATES

  // * PRELOADING

  const { data, isFetching } = useQuery({
    queryKey: ["celebrations", "home"],
    queryFn: async () => {
      const res: any = await apiDispatch.get({ url: "/cms/content/" });
      console.log(res);
      return res.data;
    },
    initialData: [],
  });

  // * FUNCTION

  const getDataIntro = () => {
    if (!isFetching) {
      const _data = data.find((item: any) => item.id == 23);
      const _textData = JSON.parse(_data.text);

      return {
        ..._data,
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

  const getDataApproach = () => {
    if (!isFetching) {
      const _data = data.find((item: any) => item.id == 28);
      const _textData = JSON.parse(_data.text);

      return {
        ..._data,
        ..._textData,
        title: [_textData?.heading1, _textData?.heading2, _textData?.heading3],
        paragraph: [_textData?.paragraph1, _textData?.paragraph2],
      };
    } else {
      return {};
    }
  };

  const getDataPhase = () => {
    if (!isFetching) {
      const _phasedata = data.filter((item: any) =>
        [30, 31, 32].includes(item.id)
      );
      const _eventData = data.filter((item: any) =>
        [16, 17, 18].includes(item.id)
      );

      const _data = data.find((item: any) => item.id == 29);

      const _textData = JSON.parse(_data.text);

      return {
        ..._textData,
        events: _eventData.map((item: any) => {
          return {
            ...item,
            ...JSON.parse(item.text),
          };
        }),
        phases: _phasedata.map((item: any) => {
          const _tdata = JSON.parse(item.text);

          return {
            ...item,
            ..._tdata,
            heading: [_tdata?.heading1, _tdata?.heading2, _tdata?.heading3],
            paragraph: [_tdata?.paragraph1],
          };
        }),
      };
    } else {
      return {};
    }
  };

  const getDataHistory = () => {
    if (!isFetching) {
      const _data = data.find((item: any) => item.id == 24);
      const _textData = JSON.parse(_data.text);

      const _historyData = data.filter((item: any) => {
        return [25, 26, 27].includes(item.id);
      });

      return {
        ..._data,
        ..._textData,
        heading: [
          _textData?.heading1,
          _textData?.heading2,
          _textData?.heading3,
        ],
        paragraph: [_textData?.paragraph1, _textData?.paragraph2],
        images: [
          _historyData[0].image,
          _historyData[1].image,
          _historyData[2].image,
        ],
      };
    } else {
      return {};
    }
  };

  // * COMPONENTS

  return (
    <>
      <Sections.Intro sectionData={getDataIntro()} />
      <Sections.History sectionData={getDataHistory()} />
      <Sections.Approach sectionData={getDataApproach()} />
      <Box visibleFrom="lg">
        <Sections.Mission sectionData={getDataPhase()} />
      </Box>
      <Box hiddenFrom="lg">
        <Sections.MissionMobile sectionData={getDataPhase()} />
      </Box>
    </>
  );
}
