"use client";

import React from "react";
//mantine
import {
  Badge,
  Button,
  Divider,
  FileInput,
  Grid,
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

import { getRecords } from "@/modules/company/module.api";
import { configModule } from "@/modules/company/module.config";
import { useQuery } from "@tanstack/react-query";

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export function _Form() {
  // * DEFINITIONS

  const form = FormHandler.useForm();

  // * CONTEXT

  const { current } = FormHandler.usePropContext();

  // * PRELOADING

  const { data, isFetching } = useQuery({
    queryKey: ["company"],
    queryFn: async () => {
      const res = await getRecords({ endpoint: configModule.endpoint });
      console.log(res);
      return res;
    },
    initialData: [],
  });

  // * FUNCTIONS

  // * COMPONENTS

  return (
    <>
      <Paper px="md" my="xs">
        <Stack gap="xs">
          <Select
            label="Company"
            placeholder="Select Company"
            data={data.map((item: any, index: number) => {
              return {
                value: String(item.id),
                label: item.name,
              };
            })}
            {...form.getInputProps("company")}
          />
          <TextInput
            label="Event Category Name"
            description="e.g. Wedding, Board Meeting, Seminar"
            rows={5}
            placeholder=""
            {...form.getInputProps(`name`)}
          />
        </Stack>
      </Paper>
    </>
  );
}
