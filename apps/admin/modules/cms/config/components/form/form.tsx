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
import { ImageUpload } from "@vsphere/ui";

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
          {/* <Text size="xs" tt="uppercase" fw={700} my="xs">
            General Details
          </Text> */}

          <ImageUpload
            {...form.getInputProps("image")}
            onChange={(image: any) => form.setFieldValue("image", image)}
            value={form.getValues().image}
          />

          <TextInput label="Youtube Link" {...form.getInputProps("link")} />
          <TextInput label="Text" {...form.getInputProps("text")} />
          <TextInput label="Caption" {...form.getInputProps("caption")} />
          <TextInput
            label="Meta-Keyphrase"
            {...form.getInputProps("meta_keyphrase")}
          />
          <TextInput
            label="Meta-Description"
            {...form.getInputProps("meta_description")}
          />
          <TextInput label="Attribute" {...form.getInputProps("attribute")} />
          <Select
            data={[
              {
                value: "1",
                label: "Enable",
              },
              {
                value: "0",
                label: "Disable",
              },
            ]}
            label="Enabled"
            {...form.getInputProps("is_active")}
          />

          <TextInput label="Holder" {...form.getInputProps("holder")} />
        </Stack>
      </Paper>
    </>
  );
}
