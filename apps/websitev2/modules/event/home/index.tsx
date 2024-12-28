"use client";

import { useQuery } from "@tanstack/react-query";
import { SectionsEvents } from "./sections";
import { apiDispatch } from "@vsphere/core";

export function ModuleEventsHome() {
  const { data, isFetching } = useQuery({
    queryKey: ["celebrations", "home"],
    queryFn: async () => {
      const res: any = await apiDispatch.get({ url: "/cms/content/" });
      console.log(res);
      return res.data;
    },
    initialData: [],
  });

  const queryTestimonial = useQuery({
    queryKey: ["events", "testimonials"],
    queryFn: async () => {
      const res: any = await apiDispatch.get({ url: "/company/testimonials/" });
      console.log(res);
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
      const _data = data.find((item: any) => item.id == 54);
      const _textData = JSON.parse(_data.text);

      return {
        ..._textData,
        heading: [
          _textData?.heading1,
          _textData?.heading2,
          _textData?.heading3,
          _textData?.heading4,
        ],
        post: [_textData?.post1, _textData?.post2],
      };
    } else {
      return {};
    }
  };

  const getClientsData = () => {
    if (!isFetching) {
      const _data = data.filter((item: any) => {
        return [48, 49, 50, 51, 52, 53].includes(item.id);
      });

      return _data;
    } else {
      return [];
    }
  };

  const getOverviewData = () => {
    if (!isFetching) {
      const _data_top_content = data.find((item: any) => item.id == 55);
      const _text_data_top = JSON.parse(_data_top_content.text);
      const _data_top = data.filter((item: any) => {
        return [56, 57, 58].includes(item.id);
      });

      const _data_bot_content = data.find((item: any) => item.id == 59);
      const _text_data_bot = JSON.parse(_data_bot_content.text);
      const _data_bot = data.filter((item: any) => {
        return [60, 61, 62].includes(item.id);
      });

      console.log({
        top: {
          ..._text_data_top,
          heading: [
            _text_data_top?.heading1,
            _text_data_top?.heading2,
            _text_data_top?.heading3,
            _text_data_top?.heading4,
          ],
          images: _data_top.map((item: any) => {
            return {
              ...item,
              ...JSON.parse(item.text),
            };
          }),
        },
        bot: {
          ..._text_data_bot,
          heading: [
            _text_data_bot?.heading1,
            _text_data_bot?.heading2,
            _text_data_bot?.heading3,
            _text_data_bot?.heading4,
          ],
          images: _data_bot.map((item: any) => {
            return {
              ...item,
              ...JSON.parse(item.text),
            };
          }),
        },
      });

      return {
        top: {
          ..._text_data_top,
          heading: [
            _text_data_top?.heading1,
            _text_data_top?.heading2,
            _text_data_top?.heading3,
            _text_data_top?.heading4,
          ],
          images: _data_top.map((item: any) => {
            return {
              ...item,
              ...JSON.parse(item.text),
            };
          }),
        },
        bot: {
          ..._text_data_bot,
          heading: [
            _text_data_bot?.heading1,
            _text_data_bot?.heading2,
            _text_data_bot?.heading3,
            _text_data_bot?.heading4,
          ],
          images: _data_bot.map((item: any) => {
            return {
              ...item,
              ...JSON.parse(item.text),
            };
          }),
        },
      };
    } else {
      return [];
    }
  };

  return (
    <>
      <SectionsEvents.Hero sectionData={getDataForHero()} />
      <SectionsEvents.Clients sectionData={getClientsData()} />
      <SectionsEvents.Intro sectionData={getDataIntro()} />
      <SectionsEvents.Featured events={queryEvents.data} />
      <SectionsEvents.Overview sectionData={getOverviewData()} />
      <SectionsEvents.Services />
      <SectionsEvents.Testimonials testimonials={queryTestimonial.data} />
    </>
  );
}
