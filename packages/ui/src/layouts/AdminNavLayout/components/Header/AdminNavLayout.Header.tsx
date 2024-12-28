"use client";

//nextjs
import {} from "next/navigation";
//mantine
import {
  ActionIcon,
  Anchor,
  AppShell,
  Avatar,
  Breadcrumbs,
  Button,
  Divider,
  Group,
  HoverCard,
  Indicator,
  Stack,
  Text,
  ThemeIcon,
} from "@mantine/core";
//hooks
import { useDisclosure } from "@mantine/hooks";
//icons
import {
  Bell,
  CaretDown,
  CaretRight,
  Chat,
  MagnifyingGlass,
  MegaphoneSimple,
} from "@phosphor-icons/react";
//props
import { PropAdminNavHeaderLayout } from "../../AdminNavLayout.type";
//context
import { useAdminNavContext } from "../../AdminNavLayout.context";
//styles
import classes from "./AdminNavLayout.Header.module.css";

export function AdminNavLayoutHeader({
  withHeader,
  headerShellProps,
  sidenavWidth,
  //actions
  enableAnnouncement,
  enableNotification,
  enableChat,
  //extra
  organization,
}: PropAdminNavHeaderLayout) {
  // * DEFINITIONS
  const [opened, { open, close }] = useDisclosure();

  // * CONTEXT

  const { breadcrumbs, notifications, announcements, chats } =
    useAdminNavContext();

  // * STATES

  // * PRERUNS

  // * FUNCTIONS

  // * COMPONENT

  const RenderBread = () => (
    <Breadcrumbs
      separator={
        <CaretRight
          color="var(--mantine-color-gray-6)"
          weight="bold"
          size={12}
        />
      }
      separatorMargin={4}
    >
      {breadcrumbs.map((breadinfo: any, index: number) => {
        return (
          <Text
            key={index}
            size="11"
            fw={600}
            opacity={index == breadcrumbs.length - 1 ? 1 : 0.4}
          >
            {breadinfo.label}
          </Text>
        );
      })}
    </Breadcrumbs>
  );

  return (
    <>
      <AppShell.Header
        className={classes.root}
        pl={sidenavWidth}
        h={headerShellProps?.height}
      >
        <Group justify="space-between" px="sm" h={headerShellProps?.height}>
          {breadcrumbs?.length ? (
            <RenderBread />
          ) : (
            <div>
              <Text size="xs">Admin Portal</Text>
            </div>
          )}

          <Group gap="xs">
            <Group gap={"4"}>
              <ActionIcon variant="subtle" color="dark">
                <MagnifyingGlass />
              </ActionIcon>

              <ActionIcon variant="subtle" color="dark">
                <Indicator
                  size={6}
                  disabled={!announcements || announcements.length == 0}
                >
                  <MegaphoneSimple weight="duotone" />
                </Indicator>
              </ActionIcon>

              <ActionIcon variant="subtle" color="dark">
                <Indicator
                  size={6}
                  disabled={!notifications || notifications.length == 0}
                >
                  <Bell weight="duotone" />
                </Indicator>
              </ActionIcon>

              <ActionIcon variant="subtle" color="dark">
                <Indicator size={6} disabled={!chats || chats.length == 0}>
                  <Chat weight="duotone" />
                </Indicator>
              </ActionIcon>
            </Group>

            <Divider />

            <Button
              variant="light"
              size="xs"
              rightSection={<CaretDown size={12} />}
              fw={600}
            >
              {organization?.name}
            </Button>
          </Group>
        </Group>
      </AppShell.Header>
    </>
  );
}
