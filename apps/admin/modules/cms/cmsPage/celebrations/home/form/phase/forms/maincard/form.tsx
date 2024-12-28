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
      <Text size="sm" fw={600}>
        For Main-Card
      </Text>

      <Stack gap={0}>
        <TextInput
          label="Top-end Mini-Quotes"
          description="Mini Quotes on top-end of the card"
          {...form.getInputProps("quote1")}
          required
          placeholder="e.g. Preparations Pre Event"
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
          {...form.getInputProps("quote2")}
          required
          radius={0}
          placeholder="e.g. The work behind the scenes."
          styles={{
            input: {
              fontSize: "var(--mantine-font-size-xs)",
            },
          }}
        />
        <TextInput
          {...form.getInputProps("quote3")}
          required
          placeholder="e.g. The Prep before the party."
          radius={0}
          styles={{
            input: {
              borderTop: "none",
              fontSize: "var(--mantine-font-size-xs)",
            },
          }}
        />
        <TextInput
          {...form.getInputProps("quote4")}
          required
          placeholder="e.g. The Magic Behind the Show."
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
        label="Center-Tagline"
        description="The center-tagline of this card"
        {...form.getInputProps("tagline_main")}
        required
        placeholder="e.g. METHODS / PROCESS / EFFECTS"
      />

      <Divider my="md" />

      <Text size="sm" fw={600}>
        For Detailed Card
      </Text>

      <TextInput
        label="Top-Tagline"
        description="The center-tagline of this card"
        {...form.getInputProps("detailed_tagline")}
        required
        placeholder="e.g. Visualising the event"
      />

      <ImageUpload
        {...form.getInputProps("image")}
        label="Image"
        onChange={(image: any) => form.setFieldValue("image", image)}
        value={form.getValues().image}
      />

      <TextInput
        label="Center-Quote"
        description="The center-quote of this card"
        {...form.getInputProps("detailed_quote")}
        required
        placeholder="e.g. Visualising the perfect event"
      />

      <Textarea
        rows={5}
        label="Services"
        description="Sub-Services under this phase"
        {...form.getInputProps("detailed_services")}
        required
        placeholder="e.g. Venue Selection Theme Selection Requirement Analysis Event Planning Decor Selection Activity Planning"
      />
    </Stack>
  );
}
