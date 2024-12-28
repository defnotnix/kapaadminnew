"use client";

import React from "react";
//mantine
import {
  Badge,
  Button,
  Checkbox,
  Divider,
  FileButton,
  FileInput,
  Group,
  Image,
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
import { DateInput } from "@mantine/dates";
import { PictureInPicture, Upload, YoutubeLogo } from "@phosphor-icons/react";

// Assuming you have these defined elsewhere
const GENDER_CHOICES = [
  { value: "NA", label: "Not Specified" },
  { value: "Male", label: "Male" },
  { value: "Female", label: "Female" },
];

const COMMUNICATION_CHOICES = [
  { value: "Email", label: "Email" },
  { value: "Call", label: "Phone" },
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
                description="Comprehensive client information & details"
              />

              <ImageUpload
                {...form.getInputProps("picture")}
                label="Client Logo"
                onChange={(image: any) => form.setFieldValue("picture", image)}
                value={form.getValues()?.picture}
              />

              <SimpleGrid cols={2} spacing="xs">
                <TextInput
                  label="Client Name"
                  description="Full legal name of the client or client organization. "
                  placeholder="Enter full name"
                  required
                  {...form.getInputProps("name")}
                />

                <Select
                  label="Gender"
                  description="Optional if not relevant or preferred not to disclose."
                  placeholder="Select gender"
                  data={GENDER_CHOICES}
                  {...form.getInputProps("gender")}
                />
                <Select
                  label="Client Type"
                  description="Category of the client"
                  placeholder="Select client category"
                  data={[
                    { value: "1", label: "Category 1" },
                    { value: "2", label: "Category 2" },
                  ]}
                  {...form.getInputProps("client_type")}
                />
                <Select
                  label="Preferred Communication"
                  description="Client's preferred method of receiving information."
                  placeholder="Select communication method"
                  data={COMMUNICATION_CHOICES}
                  {...form.getInputProps("preferred_communication")}
                />
              </SimpleGrid>

              <FormElement.SectionTitle
                title="Contact Details"
                description="Comprehensive contact information for the client or client organization."
              />

              <TextInput
                label="Address"
                description="Complete physical address including street, city, state, and postal code for the client or company."
                placeholder="Enter full address"
                {...form.getInputProps("address")}
              />

              <Group grow>
                <TextInput
                  label="Contact 1"
                  description="Primary phone number"
                  placeholder="Enter primary contact number"
                  {...form.getInputProps("contact1")}
                />
                <TextInput
                  label="Contact 2"
                  description="Secondary or alternative"
                  placeholder="Enter secondary contact number"
                  {...form.getInputProps("contact2")}
                />
                <TextInput
                  label="Email"
                  description="Official email address"
                  placeholder="Enter email address"
                  required
                  {...form.getInputProps("email")}
                />
                <TextInput
                  label="Nationality"
                  description="Citizenship or nationality"
                  placeholder="Enter nationality"
                  {...form.getInputProps("nationality")}
                />
              </Group>

              <SimpleGrid cols={2}>
                <TextInput
                  label="Shipping Address"
                  description="Specific address for package or product delivery."
                  placeholder="Enter shipping address"
                  {...form.getInputProps("shipping_address")}
                />
                <TextInput
                  label="Billing Address"
                  description="Address used for invoicing and financial communications"
                  placeholder="Enter billing address"
                  {...form.getInputProps("billing_address")}
                />
              </SimpleGrid>

              <Textarea
                rows={5}
                label="Remarks"
                description="Additional notes, special instructions, or supplementary information about the client"
                placeholder="Enter any additional comments or special considerations"
                {...form.getInputProps("remarks")}
              />
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
                title="Client Invoice Catalogue"
                description="Organize your client invoices for future references."
                actionButton={
                  <Group gap="xs">
                    <Button
                      leftSection={<PictureInPicture />}
                      onClick={() => {
                        form.insertListItem("gallery", {
                          type: "picture",
                        });
                      }}
                    >
                      Add Image
                    </Button>
                    <Button
                      variant="outline"
                      color="red"
                      leftSection={<YoutubeLogo />}
                      onClick={() => {
                        form.insertListItem("gallery", {
                          type: "video",
                        });
                      }}
                    >
                      Add Video
                    </Button>
                  </Group>
                }
              />
            </Stack>

            {/* <SimpleGrid cols={3} my="md">
              {form
                .getValues()
                ?.gallery.map((mediainfo: any, index: number) => {
                  switch (mediainfo?.type) {
                    case "picture":
                      return (
                        <Paper withBorder p="xs" key={index}>
                          {mediainfo.media ? (
                            <Image
                              h={200}
                              fit="cover"
                              src={
                                typeof mediainfo?.media == "string"
                                  ? mediainfo?.media
                                  : URL.createObjectURL(mediainfo?.media)
                              }
                            />
                          ) : (
                            <Paper h={200} bg="gray.0" />
                          )}
                          <FileInput
                            leftSection={<Upload />}
                            placeholder="Click to upload image"
                            {...form.getInputProps(`gallery.${index}.media`)}
                          />
                        </Paper>
                      );
                    case "video":
                      return (
                        <Paper withBorder p="xs" key={index}>
                          {mediainfo.media ? (
                            <iframe
                              width="100%"
                              height="200"
                              src={mediainfo?.media}
                              title="YouTube video player"
                              allow="autoplay"
                              referrerPolicy="strict-origin-when-cross-origin"
                              allowFullScreen
                            ></iframe>
                          ) : (
                            <Paper h={200} bg="gray.0" />
                          )}
                          <TextInput
                            leftSection={<YoutubeLogo />}
                            placeholder="Enter youtube embed url"
                            {...form.getInputProps(`gallery.${index}.media`)}
                          />
                        </Paper>
                      );
                  }
                })}
            </SimpleGrid> */}
          </Paper>
        </>
      );
  }
}
