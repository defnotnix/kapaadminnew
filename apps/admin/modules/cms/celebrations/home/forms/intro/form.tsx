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

  switch (current) {
    case 0:
      return (
        <>
          <Paper px="lg" py="md" withBorder>
            <Stack gap="xs">
              <FormElement.SectionTitle
                isTopElement
                title="General Details"
                description="Company basic information"
              />

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
            </Stack>
          </Paper>
        </>
      );
  }
}
