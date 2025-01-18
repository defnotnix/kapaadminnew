"use client";

import React from "react";
//mantine
import {
  Badge,
  Button,
  Divider,
  Group,
  NumberInput,
  Paper,
  Pill,
  PillsInput,
  Select,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
  TextInput,
} from "@mantine/core";
//framework
import { FormHandler } from "@vsphere/core";
import { FormElement } from "@vsphere/ui";
import { DateInput } from "@mantine/dates";
import { PictureInPicture, YoutubeLogo } from "@phosphor-icons/react";

import { useQuery } from "@tanstack/react-query";
import { getRecords } from "@/modules/company/module.api";
import { configModule as configModuleCompany } from "@/modules/company/module.config";
import { configModule as configModuleEventCategory } from "@/modules/event-category/module.config";
export function _Form() {
  // * DEFINITIONS

  const form = FormHandler.useForm();

  // * CONTEXT

  // * PRELOADING

  const queryData = useQuery({
    queryKey: ["admin", "company"],
    queryFn: async () => {
      const res = await getRecords({ endpoint: configModuleCompany.endpoint });
      console.log(res);
      return res;
    },
    initialData: [],
  });

  const queryCategory = useQuery({
    queryKey: ["admin", "event-category"],
    queryFn: async () => {
      const res = await getRecords({
        endpoint: configModuleEventCategory.endpoint,
      });
      console.log(res);
      return res;
    },
    initialData: [],
  });

  // * FUNCTIONS

  // * COMPONENTS

  return (
    <>
      <Paper px="lg" py="md" withBorder>
        <Stack gap="xs">
          <FormElement.SectionTitle
            isTopElement
            title="General Details"
            description="General permission details"
          />

          <Stack gap={0}>
            <TextInput
              label="Event Name"
              description="Shortname and Fullname of the Event"
              placeholder="Event Shortname | e.g. Raman & Kavya"
              {...form.getInputProps("shortname")}
              required
              styles={{
                input: {
                  borderBottom: 0,
                  borderBottomLeftRadius: 0,
                  borderBottomRightRadius: 0,
                  fontSize: "var(--mantine-font-size-xs)",
                },
              }}
            />
            <Divider />
            <TextInput
              placeholder="Event Full Name | e.g. Dallas Cowboy's Wide Receiver Brandin Cooks Marries his HS Sweetheart"
              {...form.getInputProps("fullname")}
              styles={{
                input: {
                  borderTop: 0,
                  borderTopLeftRadius: 0,
                  borderTopRightRadius: 0,
                  fontSize: "var(--mantine-font-size-xs)",
                },
              }}
              required
            />
          </Stack>

          <SimpleGrid cols={2} spacing="xs">
            <Select
              data={queryData?.data.map((item: any) => {
                return {
                  value: String(item.id),
                  label: item.name,
                };
              })}
              label="Event Type"
              description="Type of the Event"
              placeholder="Select Category"
              {...form.getInputProps("company")}
            />
            <Select
              disabled={!form.getValues().company}
              data={queryCategory?.data
                ?.filter((e: any) => {
                  return e.company == form.getValues().company;
                })
                .map((item: any) => {
                  return {
                    value: String(item.id),
                    label: item.name,
                  };
                })}
              label="Event Category"
              description="Type of the Event"
              placeholder="Select Category"
              {...form.getInputProps("event_category")}
            />
          </SimpleGrid>

          <FormElement.SectionTitle
            title="Event Details"
            description="Venue & Date Details"
          />

          <TextInput
            label="Event Theme"
            description="A short and sweet description of Event Theme"
            placeholder="e.g. Floral Nightsky"
            {...form.getInputProps("theme")}
          />

          <SimpleGrid cols={2} spacing="xs">
            <DateInput
              label="Event Date"
              description="Select Event Date"
              placeholder="Select Date"
              {...form.getInputProps("event_date")}
              onChange={(e) => {
                console.log(e);
              }}
            />
            <TextInput
              label="Event Venue"
              description="Venue of the Event"
              placeholder="e.g. XY Banquet Hall"
              {...form.getInputProps("venue")}
            />
          </SimpleGrid>

          <FormElement.SectionTitle
            title="Event Profile Details"
            description="Details on the profile"
          />

          <TextInput
            label="Highlight/Signature Message"
            description="Highlight message in cursive text"
            placeholder="e.g. Till death do us part"
            {...form.getInputProps("highlight_message")}
          />

          <Textarea
            rows={10}
            label="Event Description"
            description="A brief on this project"
            placeholder=""
            {...form.getInputProps("event_description")}
          />
        </Stack>

        {/* <FormElement.SectionTitle
          title="Event Gallery"
          description="Showcase Images & Videos for the Event"
          actionButton={
            <Group gap="xs">
              <Button
                leftSection={<PictureInPicture />}
                onClick={() => {
                  form.insertListItem("gallery", {});
                }}
              >
                Add Image
              </Button>
              <Button
                color="red"
                variant="outline"
                leftSection={<YoutubeLogo />}
                onClick={() => {
                  form.insertListItem("gallery", {});
                }}
              >
                Add Youtube Video
              </Button>
            </Group>
          }
        /> */}
      </Paper>
    </>
  );
}
