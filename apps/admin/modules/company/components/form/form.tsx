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
                  label="Company Name"
                  description="Official registered company name"
                  placeholder="e.g. Classics Celebrations"
                  {...form.getInputProps("name")}
                  required
                  styles={{
                    input: {
                      borderBottom: 0,
                      borderBottomLeftRadius: 0,
                      borderBottomRightRadius: 0,
                      fontSize: "var(--mantine-font-size-xs)",
                    },
                  }}
                />
                <Divider />
                <Textarea
                  rows={5}
                  placeholder="Brief company description"
                  {...form.getInputProps("description")}
                  styles={{
                    input: {
                      borderTop: 0,
                      borderTopLeftRadius: 0,
                      borderTopRightRadius: 0,
                      fontSize: "var(--mantine-font-size-xs)",
                    },
                  }}
                  required
                />
              </Stack>

              <SimpleGrid cols={2}>
                <TextInput
                  label="Company Address"
                  description="Full business location"
                  placeholder="e.g. 123 Business Street"
                  {...form.getInputProps("address")}
                  required
                />
                <SimpleGrid cols={2} spacing="xs">
                  <TextInput
                    label="Geo Latitude"
                    description="Location coordinates"
                    placeholder="Latitude"
                    {...form.getInputProps("latitude")}
                    required
                  />
                  <TextInput
                    label="Geo Longitude"
                    description="Location coordinates"
                    placeholder="Longitude"
                    {...form.getInputProps("longitude")}
                    required
                  />
                </SimpleGrid>
              </SimpleGrid>

              <TextInput
                label="Company PAN Number"
                description="Permanent Account Number"
                placeholder="Enter PAN number"
                {...form.getInputProps("pan")}
                required
              />

              <FormElement.SectionTitle
                title="Company Contact Details"
                description="Communication information"
              />
              <SimpleGrid cols={2} spacing="xs">
                <TextInput
                  label="Primary Contact"
                  description="Primary contact number"
                  placeholder="Contact number"
                  {...form.getInputProps("contact1")}
                />
                <TextInput
                  label="Secondary Contact"
                  description="Alternative contact number"
                  placeholder="Contact number"
                  {...form.getInputProps("contact2")}
                />
                <TextInput
                  label="Traffic Access"
                  description="Traffic-related details"
                  placeholder="Enter traffic access info"
                  {...form.getInputProps("traffic_access")}
                />
                <TextInput
                  label="Parking Access"
                  description="Parking location details"
                  placeholder="Parking access info"
                  {...form.getInputProps("parking_access")}
                />
              </SimpleGrid>
              <TextInput
                label="Primary Email Address"
                description="Official contact email"
                placeholder="Enter email address"
                {...form.getInputProps("email")}
              />

              <FormElement.SectionTitle
                title="Company Images"
                description="Logo Images for the Company"
              />

              <SimpleGrid cols={3} spacing="xs">
                <ImageUpload
                  {...form.getInputProps("logo")}
                  label="Company Main Logo"
                  value={form.getValues().logo}
                  onChange={(image: any) => form.setFieldValue("logo", image)}
                />
                <ImageUpload
                  {...form.getInputProps("logo_white")}
                  label="Company Logo - White"
                  value={form.getValues().logo_white}
                  onChange={(image: any) =>
                    form.setFieldValue("logo_white", image)
                  }
                />
                <ImageUpload
                  {...form.getInputProps("logo_black")}
                  label="Company Logo - Black"
                  value={form.getValues().logo_black}
                  onChange={(image: any) =>
                    form.setFieldValue("logo_black", image)
                  }
                />
              </SimpleGrid>
            </Stack>
          </Paper>
        </>
      );

    case 1:
      return (
        <>
          <Paper px="lg" py="md" withBorder>
            <Stack gap="xs">
              <FormElement.SectionTitle
                isTopElement
                title="Client Testimonials"
                description="That will be showcased in the website."
                actionButton={
                  <Button
                    leftSection={<Plus />}
                    onClick={() => {
                      form.insertListItem("testimonials", {
                        title: "",
                        description: "",
                      });
                    }}
                  >
                    Add New Testimonial
                  </Button>
                }
              />

              <Stack mt="md">
                {form
                  .getValues()
                  ?.testimonials.map((item: any, index: number) => {
                    return (
                      <Paper key={index} p="md" withBorder>
                        <Stack gap="xs">
                          <SimpleGrid cols={2} spacing="xs">
                            <TextInput
                              label="Writer"
                              description="Testimonial Writer"
                              placeholder="e.g. John Doe"
                              {...form.getInputProps(
                                `testimonials.${index}.writer`
                              )}
                            />
                            <TextInput
                              label="Post"
                              description="Testimonial Writer's Post"
                              placeholder="e.g. Managing Director"
                              {...form.getInputProps(
                                `testimonials.${index}.post`
                              )}
                            />
                          </SimpleGrid>
                          <Textarea
                            label="Quote"
                            description="Full testimonial"
                            rows={5}
                            placeholder=""
                            {...form.getInputProps(
                              `testimonials.${index}.writer`
                            )}
                          />
                          <SimpleGrid cols={2} spacing="xs">
                            <FileInput
                              label="Client Avatar / Company Logo"
                              description="Upload client avatar / company logo"
                              placeholder="Upload File"
                              leftSection={<Upload />}
                              {...form.getInputProps(
                                `testimonials.${index}.avatar`
                              )}
                            />

                            <FileInput
                              label="Writer Signature"
                              description="Signature of the writer"
                              placeholder="Upload File"
                              leftSection={<Signature />}
                              {...form.getInputProps(
                                `testimonials.${index}.signature`
                              )}
                            />
                          </SimpleGrid>
                        </Stack>
                      </Paper>
                    );
                  })}
              </Stack>
            </Stack>
          </Paper>
        </>
      );

    case 2:
      return (
        <>
          <Paper px="lg" py="md" withBorder>
            <Stack gap="xs">
              <FormElement.SectionTitle
                isTopElement
                title="Company Hours"
                description="Opening hours of the company"
              />

              <SimpleGrid mt="sm">
                <SimpleGrid cols={3} spacing="xs" key="xxx" py="xs">
                  <Text size="xs" fw={600} tt="uppercase">
                    Day
                  </Text>
                  <Text size="xs" fw={600} tt="uppercase">
                    Opening Time
                  </Text>
                  <Text size="xs" fw={600} tt="uppercase">
                    Closing Time
                  </Text>
                </SimpleGrid>
                {daysOfWeek.map((item: any, index: number) => {
                  return (
                    <SimpleGrid cols={3} spacing="xs" key={index}>
                      <Text size="xs">{item}</Text>
                      <TimeInput
                        placeholder="Open Time"
                        {...form.getInputProps(
                          `company_hours.${index}.opentime`
                        )}
                      />
                      <TimeInput
                        placeholder="Close Time"
                        {...form.getInputProps(
                          `company_hours.${index}.closetime`
                        )}
                      />
                    </SimpleGrid>
                  );
                })}
              </SimpleGrid>
            </Stack>
          </Paper>
        </>
      );
  }
}
