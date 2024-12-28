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

      <Textarea
        rows={5}
        label="Description"
        description="A short description for this"
        {...form.getInputProps("description")}
        required
        placeholder="e.g. Venue Selection Theme Selection Requirement Analysis Event Planning Decor Selection Activity Planning"
      />
    </Stack>
  );
}
