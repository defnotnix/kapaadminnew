"use client";

import React, { useState } from "react";
//nextjs
import { useRouter } from "next/navigation";
//mantine
import {
  Alert,
  Anchor,
  Badge,
  Button,
  Checkbox,
  Container,
  Grid,
  Group,
  Image,
  Menu,
  Paper,
  PasswordInput,
  SimpleGrid,
  Space,
  Text,
  TextInput,
  ThemeIcon,
  UnstyledButton,
} from "@mantine/core";
import { useForm } from "@mantine/form";
//icons

import {
  CaretDown,
  Check,
  Info,
  Warning,
  X,
  User,
  Key,
} from "@phosphor-icons/react";
//styles
import classes from "./auth.module.css";
//api
import { useMutation, useQuery } from "@tanstack/react-query";
import { apiLogin } from "./auth.api";
//notification
import { triggerNotification } from "@vsphere/ui";
import { configModule } from "./auth.config";
//context

export function ModuleAuth() {
  // * DEFINITIONS

  const Router = useRouter();

  const form = useForm({
    initialValues: {
      username: "",
      password: "",
      fLoading: false,
      remember: false,
    },
    validate: {
      username: (value) =>
        value.length < 1 ? "Username Cannot be Empty" : null,
      password: (value) =>
        value.length < 1 ? "Password Cannot be Empty" : null,
    },
  });

  const [errorType, setErrorType] = useState<string>("nan");

  // * PRE STATES

  // * CONTEXT

  // * STATES

  // * FUNCTIONS

  const handleRememberMe = () => {};

  const mutation = useMutation({
    mutationFn: async () => {
      form.setFieldValue("fLoading", true);
      triggerNotification.auth.isLoading({});
      return apiLogin(form.values);
    },
    onSuccess: (res) => {
      sessionStorage.setItem("classicstoken", res?.data?.access_token || "");

      if (form.values.remember) {
        handleRememberMe();
      }

      form.setFieldValue("fLoading", false);
      triggerNotification.auth.isSuccess({});
      setTimeout(() => {
        Router.push(configModule.successRedirect);
      }, 1000);
    },
    onError: (err: any) => {
      const { response } = err.object;

      console.log("ERROR", response);
      setErrorType(response?.data?.type || "nan");
      form.setFieldValue("fLoading", false);
      triggerNotification.auth.isError({
        message: err.message || "Cannot Reach Server, Try Again!",
      });
    },
  });

  function handleSignIn() {
    if (!form.validate().hasErrors) {
      mutation.mutate();
    }
  }

  // * COMPONENTS

  const RenderAlert = () => {
    switch (errorType) {
      case "info":
        return (
          <Alert py="xs" color="blue" icon={<Info weight="bold" />}>
            <Text size="xs" c="blue.8" fw={500} py="2">
              Server under Maintainance, Try Later!
            </Text>
          </Alert>
        );
      case "pending":
        return (
          <Alert py="xs" color="indigo" icon={<Info weight="bold" />}>
            <Text size="xs" c="indigo.8" fw={500} py="2">
              Verification Pending, Try Later!
            </Text>
          </Alert>
        );
      case "blocked":
        return (
          <Alert py="xs" color="red" icon={<X weight="bold" />}>
            <Text size="xs" c="red.8" fw={500} py="2">
              Account Blocked! Contact Admin
            </Text>
          </Alert>
        );
      case "nan":
        return (
          <Alert py="xs" color="red" icon={<X weight="bold" />}>
            <Text size="xs" c="red.8" fw={500} py="2">
              Cannot Reach Server, Try Again!
            </Text>
          </Alert>
        );
      default:
        return (
          <Alert py="xs" color="red" icon={<Warning weight="bold" />}>
            <Text size="xs" c="red.8" fw={500} py="2">
              Invalid Credentials. Try Again!
            </Text>
          </Alert>
        );
    }
  };

  return (
    <>
      <div className={classes.root}>
        <Container size="sm" pt={{ base: 100, lg: 160 }}>
          <Paper withBorder p="xl">
            <Grid>
              <Grid.Col span={{ base: 12, lg: 6 }}>
                <Text size="xs">{configModule.company}</Text>

                <Space h="md" />

                <Text size={"xl"}>Sign In.</Text>
                <Text size="xs" c="gray.7">
                  Access your admin portal.
                </Text>
              </Grid.Col>
              <Grid.Col span={{ base: 12, lg: 6 }}>
                <form>
                  <SimpleGrid spacing="xs">
                    <TextInput
                      disabled={form.values.fLoading}
                      variant="filled"
                      size="lg"
                      placeholder="Email Address"
                      leftSection={<User size={12} />}
                      {...form.getInputProps("username")}
                    />
                    <PasswordInput
                      disabled={form.values.fLoading}
                      variant="filled"
                      size="lg"
                      placeholder="Enter Password"
                      leftSection={<Key size={12} />}
                      {...form.getInputProps("password")}
                    />
                    {mutation.isError && <RenderAlert />}
                  </SimpleGrid>

                  <Group justify="space-between" my="lg">
                    <Group gap="xs">
                      <Checkbox size="xs" />
                      <Text size="xs">Keep me logged in</Text>
                    </Group>

                    <Anchor>
                      <Text size="xs" c="brand" fw={500}>
                        Forgot password?
                      </Text>
                    </Anchor>
                  </Group>

                  <Group justify="flex-end">
                    <Button
                      loading={form.values.fLoading}
                      color={mutation.isSuccess ? "teal" : "brand"}
                      size="md"
                      styles={{
                        loader: {
                          fontSize: 16,
                        },
                      }}
                      fs="xs"
                      onClick={() => {
                        if (!mutation.isSuccess) {
                          handleSignIn();
                        }
                      }}
                      leftSection={mutation.isSuccess && <Check />}
                    >
                      {mutation.isSuccess ? "Welcome Back!" : "Sign In"}
                    </Button>
                  </Group>
                </form>
              </Grid.Col>
            </Grid>
          </Paper>

          <Space h="sm" />

          <Group justify="space-between" px="sm">
            <Group gap="xs">
              <Text size="11" lh={5} fw={900}>
                {configModule.framework}
              </Text>
              <Menu>
                <Menu.Target>
                  <UnstyledButton>
                    <Badge variant="light" color="dark.2" c="dark.9" size="lg">
                      <Group gap={3}>
                        <Text fw={500} size="11" lh={5} tt="none">
                          English (United States)
                        </Text>
                        <CaretDown size="11" />
                      </Group>
                    </Badge>
                  </UnstyledButton>
                </Menu.Target>
              </Menu>
            </Group>

            <Group gap="xs">
              <Anchor>
                <Text size="11" lh={5} fw={500} c="dark.9">
                  Help
                </Text>
              </Anchor>
              <Anchor>
                <Text size="11" lh={5} fw={500} c="dark.9">
                  Privacy
                </Text>
              </Anchor>
              <Anchor>
                <Text size="11" lh={5} fw={500} c="dark.9">
                  Terms
                </Text>
              </Anchor>
            </Group>
          </Group>
        </Container>
      </div>
    </>
  );
}
