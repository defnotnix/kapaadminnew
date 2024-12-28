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
    <Paper px="lg" py="md" withBorder>
      <Stack gap="xs">
        <Stack gap={0}>
          <TextInput
            label="Heading"
            description="e.g. "
            {...form.getInputProps("heading1")}
            required
            placeholder="Heading Line 1"
            styles={{
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
            placeholder="Heading Line 2"
            styles={{
              input: {
                fontSize: "var(--mantine-font-size-xs)",
              },
            }}
          />
          <TextInput
            {...form.getInputProps("heading3")}
            required
            placeholder="Heading Line 3"
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

        <Stack gap={0}>
          <Textarea
            rows={5}
            label="Paragraph"
            description="e.g. "
            {...form.getInputProps("paragraph1")}
            required
            placeholder="First-Paragraph"
            styles={{
              input: {
                borderBottom: 0,
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
                fontSize: "var(--mantine-font-size-xs)",
              },
            }}
          />

          <Textarea
            rows={5}
            {...form.getInputProps("paragraph2")}
            required
            placeholder="Second-Paragraph"
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
      </Stack>
    </Paper>
  );
}

export function _Form2() {
  // * DEFINITIONS

  const form = FormHandler.useForm();

  // * CONTEXT

  const { current } = FormHandler.usePropContext();

  // * PRELOADING

  // * FUNCTIONS

  // * COMPONENTS

  return (
    <Paper px="lg" py="md" withBorder>
      <Stack gap="xs">
        <Stack gap={0}>
          <ImageUpload
            {...form.getInputProps("image")}
            label="Image"
            onChange={(image: any) => form.setFieldValue("image", image)}
            value={form.getValues().image}
          />
        </Stack>
      </Stack>
    </Paper>
  );
}
