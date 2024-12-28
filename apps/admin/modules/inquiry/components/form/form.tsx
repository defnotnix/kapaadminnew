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
import { FormElement } from "@vsphere/ui";
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
                    <Select
                        data={[
                            "Sunday",
                            "Monday",
                            "Tuesday",
                            "Wednesday",
                            "Thursday",
                            "Friday",
                            "Saturday",
                        ]}
                        label="Day of the week"
                        description=""
                        placeholder="e.g. John Doe"
                        {...form.getInputProps(`day`)}
                    />

                    <SimpleGrid cols={2} spacing="xs">
                        <TimeInput
                            label="Opening Time"
                            description="Select Opening time of the company"
                            {...form.getInputProps(`opentime`)}
                        />

                        <TimeInput
                            label="Closing Time"
                            description="Closing time of the company"
                            {...form.getInputProps(`closetime`)}
                        />
                    </SimpleGrid>
                </Stack>
            </Paper>
        </>
    );
}
