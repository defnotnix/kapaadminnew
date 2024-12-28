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

  // * FUNCTIONS

  // * COMPONENTS

  return (
    <>
      <Paper px="md" my="xs">
        <Stack gap="xs">
          <ImageUpload
            {...form.getInputProps("invoice")}
            value={form.getValues().invoice}
            onChange={(image: any) => form.setFieldValue("invoice", image)}
          />

          <Select
            label="Inovoice Status"
            placeholder="Select Status"
            data={[
              { label: "Active", value: "true" },
              { label: "In-Active", value: "false" },
            ]}
            {...form.getInputProps("status")}
          />
        </Stack>
      </Paper>
    </>
  );
}
