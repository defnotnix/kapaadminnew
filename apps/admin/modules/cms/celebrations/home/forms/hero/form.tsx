"use client";

import React from "react";
//mantine
import {
  AspectRatio,
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
                title="Hero Image"
                description="Company basic information"
              />

              <Stack gap={0}>
                <AspectRatio ratio={16 / 9}>
                  <iframe
                    src={form.getValues()?.link}
                    title="YouTube video player"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </AspectRatio>

                <TextInput
                  label="Youtube URL"
                  description="e.g. youtubeembed"
                  {...form.getInputProps("link")}
                />
              </Stack>
            </Stack>
          </Paper>
        </>
      );
  }
}
