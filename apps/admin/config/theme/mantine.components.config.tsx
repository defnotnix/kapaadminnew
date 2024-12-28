"use client";

import {
  Button,
  Container,
  MultiSelect,
  NavLink,
  NumberInput,
  PasswordInput,
  PillsInput,
  Select,
  TextInput,
  Textarea,
  Text,
  Menu,
  Modal,
  MantineSize,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";

type propDefaults = {

  fontSize: string;
  inputSize: MantineSize;
}

const defaults: propDefaults = {
  fontSize: "var(--mantine-font-size-xs)",
  //inputs
  inputSize: "sm",
}

const defaultInputStyleProps = {
  input: {
    fontSize: defaults.fontSize,
  },
  label: {
    fontSize: defaults.fontSize,
  },
  error: {
    fontSize: defaults.fontSize,
  }
}

export const configThemeComponents: any = {
  Container: Container.extend({
    defaultProps: {
      size: 1440,
    },
  }),
  Text: Text.extend({
    defaultProps: {
      fw: 500,
    },
  }),
  Button: Button.extend({
    defaultProps: {
      size: defaults.inputSize,
      style: {
        fontSize: defaults.fontSize,
      },
    },
  }),

  TextInput: TextInput.extend({
    defaultProps: {
      size: defaults.inputSize,
      styles: defaultInputStyleProps,
    },
  }),

  PillsInput: PillsInput.extend({
    defaultProps: {
      size: defaults.inputSize,
      styles: defaultInputStyleProps,
    },
  }),
  PasswordInput: PasswordInput.extend({
    defaultProps: {
      size: defaults.inputSize,
      styles: defaultInputStyleProps,
    },
  }),
  NumberInput: NumberInput.extend({
    defaultProps: {
      size: defaults.inputSize,
      styles: defaultInputStyleProps,
    },
  }),
  Textarea: Textarea.extend({
    defaultProps: {
      size: defaults.inputSize,
      styles: defaultInputStyleProps,
    },
  }),
  Select: Select.extend({
    defaultProps: {
      size: defaults.inputSize,
      styles: defaultInputStyleProps,
    },
  }),
  Pills: PillsInput.extend({
    defaultProps: {
      size: defaults.inputSize,
      styles: defaultInputStyleProps,
    },
  }),
  MultiSelect: MultiSelect.extend({
    defaultProps: {
      size: defaults.inputSize,
      styles: {
        ...defaultInputStyleProps,
        option: {
          fontSize: defaults.fontSize,
        },
      },
    },
  }),
  DateInput: DateInput.extend({
    defaultProps: {
      size: defaults.inputSize,
      styles: defaultInputStyleProps,
    },
  }),

  NavLink: NavLink.extend({
    defaultProps: {
      styles: {
        label: {
          fontSize: defaults.fontSize,
        },
      },
    },
  }),
  Menu: Menu.extend({
    defaultProps: {
      styles: {
        item: {
          fontSize: defaults.fontSize,
          fontWeight: 600,
        },
      },
    },
  }),
  Modal: Modal.extend({
    defaultProps: {
      styles: {
        header: {
          background: "var(--mantine-color-gray-1)",
          borderBottom: "1px solid var(--mantine-color-gray-3)",
        },
        body: {
          padding: 0,
        },
      },
    },
  }),
};
