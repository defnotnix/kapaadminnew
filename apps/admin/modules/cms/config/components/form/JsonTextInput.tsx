"use client";

import React, { useState, useEffect } from "react";
import {
  Stack,
  Group,
  TextInput,
  Button,
  ActionIcon,
  Text,
  Box,
  Alert,
} from "@mantine/core";
import { Trash, Plus } from "@phosphor-icons/react";

interface JsonTextInputProps {
  value: string | object;
  onChange: (value: string) => void;
  label?: string;
  placeholder?: string;
}

interface KeyValuePair {
  key: string;
  value: string;
}

export function JsonTextInput({
  value,
  onChange,
  label = "Text",
}: JsonTextInputProps) {
  const [pairs, setPairs] = useState<KeyValuePair[]>([]);
  const [error, setError] = useState<string>("");

  // Parse JSON string into key-value pairs on mount and value change
  useEffect(() => {
    try {
      setError("");
      if (!value) {
        setPairs([]);
        return;
      }

      let parsed: any;

      // Handle both string and object inputs
      if (typeof value === "string") {
        if (value.trim() === "") {
          setPairs([]);
          return;
        }
        parsed = JSON.parse(value);
      } else {
        parsed = value;
      }

      if (typeof parsed !== "object" || parsed === null || Array.isArray(parsed)) {
        setError("Value must be a JSON object");
        setPairs([]);
        return;
      }

      const newPairs: KeyValuePair[] = Object.entries(parsed).map(
        ([key, val]) => ({
          key,
          value: typeof val === "string" ? val : JSON.stringify(val),
        })
      );

      setPairs(newPairs);
    } catch (err) {
      setError(
        `Invalid JSON: ${err instanceof Error ? err.message : "Unknown error"}`
      );
      setPairs([]);
    }
  }, [value]);

  // Convert pairs back to JSON string
  const updateJsonValue = (newPairs: KeyValuePair[]) => {
    try {
      const jsonObject: Record<string, any> = {};

      for (const pair of newPairs) {
        if (pair.key.trim() === "") continue;

        // Try to parse value as JSON, fallback to string
        let parsedValue: any = pair.value;
        try {
          parsedValue = JSON.parse(pair.value);
        } catch {
          parsedValue = pair.value;
        }

        jsonObject[pair.key] = parsedValue;
      }

      const jsonString = JSON.stringify(jsonObject);
      onChange(jsonString);
      setError("");
    } catch (err) {
      setError(
        `Error updating JSON: ${err instanceof Error ? err.message : "Unknown error"}`
      );
    }
  };

  const handleKeyChange = (index: number, newKey: string) => {
    const newPairs = [...pairs];
    newPairs[index].key = newKey;
    setPairs(newPairs);
    updateJsonValue(newPairs);
  };

  const handleValueChange = (index: number, newValue: string) => {
    const newPairs = [...pairs];
    newPairs[index].value = newValue;
    setPairs(newPairs);
    updateJsonValue(newPairs);
  };

  const handleRemovePair = (index: number) => {
    const newPairs = pairs.filter((_, i) => i !== index);
    setPairs(newPairs);
    updateJsonValue(newPairs);
  };

  const handleAddPair = () => {
    const newPairs = [...pairs, { key: "", value: "" }];
    setPairs(newPairs);
  };

  return (
    <Box>
      <Text size="sm" fw={500} mb="xs">
        {label}
      </Text>

      {error && (
        <Alert color="red" mb="md">
          {error}
        </Alert>
      )}

      <Stack gap="xs">
        {pairs.map((pair, index) => (
          <Group key={index} gap="xs" grow>
            <TextInput
              placeholder="Key"
              value={pair.key}
              onChange={(e) => handleKeyChange(index, e.currentTarget.value)}
              style={{ flex: 1 }}
            />
            <TextInput
              placeholder="Value"
              value={pair.value}
              onChange={(e) => handleValueChange(index, e.currentTarget.value)}
              style={{ flex: 2 }}
            />
            <ActionIcon
              color="red"
              onClick={() => handleRemovePair(index)}
              variant="light"
            >
              <Trash size={16} />
            </ActionIcon>
          </Group>
        ))}

        <Button
          variant="light"
          leftSection={<Plus size={16} />}
          onClick={handleAddPair}
          fullWidth
        >
          Add Pair
        </Button>
      </Stack>
    </Box>
  );
}
