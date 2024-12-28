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
        <>
            <Paper px="md" my="xs">
                <Stack gap="xs">
                    <SimpleGrid cols={2} spacing="xs">
                        <TextInput
                            label="Writer"
                            description="Testimonial Writer"
                            placeholder="e.g. John Doe"
                            {...form.getInputProps(`writer_name`)}
                        />
                        <TextInput
                            label="Post"
                            description="Testimonial Writer's Post"
                            placeholder="e.g. Managing Director"
                            {...form.getInputProps(`post`)}
                        />
                    </SimpleGrid>
                    <Textarea
                        label="Quote"
                        description="Full testimonial"
                        rows={5}
                        placeholder=""
                        {...form.getInputProps(`quote`)}
                    />
                    <SimpleGrid cols={2} spacing="xs">

                        <ImageUpload

                            {
                            ...form.getInputProps('avatar')
                            }
                            value={form.getValues().avatar}
                            onChange={(image: any) => form.setFieldValue('avatar', image)}
                        />  <ImageUpload

                            {
                            ...form.getInputProps('signature_image')
                            }
                            value={form.getValues().signature_image}
                            onChange={(image: any) => form.setFieldValue('signature_image', image)}
                        />


                    </SimpleGrid>
                </Stack>
            </Paper>
        </>
    );
}
