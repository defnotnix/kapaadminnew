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
          <ImageUpload
            {...form.getInputProps("image")}
            label="Image"
            onChange={(image: any) => form.setFieldValue("image", image)}
            value={form.getValues().image}
          />

          <TextInput
            label="Description"
            description="e.g. Pre-Event Description"
            {...form.getInputProps("text")}
          />
        </Stack>
      </Stack>
    </Paper>
  );
}
