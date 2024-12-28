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
import { FormElement, ImageUpload } from "@vsphere/ui";
import { DateInput, TimeInput } from "@mantine/dates";
import { Plus, Signature, Upload } from "@phosphor-icons/react";

export { formProps } from "./form.config";

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

  // * FUNCTIONS

  // * COMPONENTS

  return (
    <Stack gap="xs">
      <Stack gap={"xs"}>
        <ImageUpload
          {...form.getInputProps("image")}
          label="Image"
          onChange={(image: any) => form.setFieldValue("image", image)}
          value={form.getValues().image}
        />

        <Stack gap={0}>
          <TextInput
            label="Event Details"
            description="Heading & Sub-Heading for the event."
            {...form.getInputProps("heading")}
            required
            placeholder="Main Heading e.g. Kabin & Udita"
            styles={{
              label: {
                fontSize: "var(--mantine-font-size-xs)",
              },
              input: {
                borderBottom: 0,
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
                fontSize: "var(--mantine-font-size-xs)",
              },
            }}
          />

          <TextInput
            {...form.getInputProps("subheading")}
            required
            placeholder="Sub-Heading e.g. Wedding Ceremony"
            styles={{
              input: {
                borderTopLeftRadius: 0,
                borderTopRightRadius: 0,
                fontSize: "var(--mantine-font-size-xs)",
              },
            }}
          />
        </Stack>
      </Stack>
    </Stack>
  );
}
