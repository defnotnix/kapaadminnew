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
      <TextInput
        label="Sub-Heading"
        description="The text before the main header"
        {...form.getInputProps("subheading")}
        required
        placeholder="e.g. Classics Projects"
      />

      <Stack gap={0}>
        <TextInput
          label="Heading"
          description="4 Lines for the Heading Text"
          {...form.getInputProps("heading1")}
          required
          placeholder="e.g. We are storytelling"
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
          {...form.getInputProps("heading2")}
          required
          radius={0}
          placeholder="e.g. experts, and out"
          styles={{
            input: {
              fontSize: "var(--mantine-font-size-xs)",
            },
          }}
        />

        <TextInput
          {...form.getInputProps("heading4")}
          required
          placeholder="e.g. story."
          styles={{
            input: {
              borderTop: 0,
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0,
              fontSize: "var(--mantine-font-size-xs)",
            },
          }}
        />
      </Stack>

      <TextInput
        label="Paragraph"
        description="The center-bottom section text"
        {...form.getInputProps("paragraph")}
        required
        placeholder="e.g. Here for for your cherished moments."
      />

      <Divider />
    </Stack>
  );
}
