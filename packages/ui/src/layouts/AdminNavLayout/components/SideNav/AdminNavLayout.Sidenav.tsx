"use client";

import { useEffect, useMemo, useState } from "react";
//nextjs
import { usePathname, useRouter } from "next/navigation";
//mantine
import {
  ActionIcon,
  AppShell,
  Avatar,
  Box,
  Center,
  Divider,
  Group,
  Indicator,
  Menu,
  Paper,
  Stack,
  Text,
  ThemeIcon,
  Tooltip,
  UnstyledButton,
  useMantineColorScheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
//icons
import {
  CreditCard,
  DoorOpen,
  GearSix,
  Hash,
  Planet,
  Square,
  User,
} from "@phosphor-icons/react";
//motion
import { AnimatePresence, motion } from "framer-motion";
//styles
import cx from "clsx";
import classes from "./AdminNavLayout.Sidenav.module.css";
//props
import {
  PropAdminNavLayoutNavItems,
  PropAdminNavSidenavLayout,
} from "../../AdminNavLayout.type";

export function AdminNavLayoutSideNav({
  navItems,
  //profile
  profileMenuItems = [],
  //classNames
  classNames,
  //actions
  onProfileClick,
  onLogout,
  //extra
  organization,
  onBrandIconClick,
}: PropAdminNavSidenavLayout) {
  // * DEFINITIONS

  const Router = useRouter();
  const Pathname = usePathname();

  // * CONTEXT

  // * STATES

  const [opened, { open, close }] = useDisclosure();
  const [loading, setLoading] = useState<Boolean>(true);
  const [active, setActive] = useState<PropAdminNavLayoutNavItems | undefined>(
    undefined
  );

  // * PRERUNS

  useEffect(() => {
    const init = getInitialActive();
    setActive(init[0]);
    setLoading(false);
  }, []);

  // * FUNCTIONS

  function getInitialActive() {
    return navItems.filter((item: any) => Pathname.includes(item.url));
  }

  // * COMPONENT

  const renderMainNavItems = useMemo(
    () =>
      navItems.map((item, index) => {
        const Icon = item.icon || Hash;

        const isActive = active?.url == item.url;

        const buttonStyles = {
          variant: isActive ? "filled" : "subtle",
          color: isActive ? `${item.color}.8` : "gray",
          c: isActive ? "white" : `${item.color}.8`,
        };

        return (
          <motion.div key={index}>
            <Tooltip label={item.label} position="left" withArrow>
              <Center>
                <ActionIcon
                  {...buttonStyles}
                  onClick={() => {
                    if (item?.childrens) {
                      setActive(item);
                    } else {
                      Router.push(item.url || "");
                    }
                  }}
                  size="lg"
                >
                  <Icon weight="duotone" />
                </ActionIcon>
              </Center>
            </Tooltip>
          </motion.div>
        );
      }),
    [navItems, active?.url]
  );

  const RenderMainNav = () => {
    return (
      <nav className={classes.mainnav}>
        <Stack h="100vh" gap="xs" justify="space-between" py="md">
          <Stack gap={"xs"}>
            <Center>
              <ActionIcon
                variant="filled"
                size="md"
                mb="md"
                color="subtle"
                onClick={onBrandIconClick}
              >
                <Square weight="duotone" />
              </ActionIcon>
            </Center>

            {renderMainNavItems}
          </Stack>

          <Stack gap={"xs"}>
            <Center>
              <ActionIcon size="lg" variant="light" color="gray">
                <Center>
                  <GearSix weight="duotone" />
                </Center>
              </ActionIcon>
            </Center>

            <Center>
              <Menu position="right" withArrow shadow="md">
                <Menu.Target>
                  <Avatar
                    size="sm"
                    src="https://avatar.iran.liara.run/public/13"
                  />
                </Menu.Target>
                <Menu.Dropdown w={250}>
                  <Group wrap="nowrap" p="sm" onClick={onProfileClick}>
                    <Indicator
                      inline
                      size={10}
                      offset={7}
                      position="bottom-end"
                      color="green"
                      withBorder
                    >
                      <Avatar
                        size="sm"
                        src="https://avatar.iran.liara.run/public/13"
                      />
                    </Indicator>
                    <div>
                      <Text size="sm" fw={600}>
                        Anamol Maharjan
                      </Text>
                      <Text size="xs" opacity={0.5}>
                        General User
                      </Text>
                    </div>
                  </Group>

                  <Menu.Divider />

                  {profileMenuItems?.map((item: any, index: number) =>
                    item.label == "divider" ? (
                      <Menu.Divider key={index} />
                    ) : (
                      <Menu.Item key={index} leftSection={<item.icon />}>
                        {item.label}
                      </Menu.Item>
                    )
                  )}
                  <Menu.Divider />
                  <Menu.Item
                    color="red"
                    leftSection={<DoorOpen />}
                    onClick={onLogout}
                  >
                    Logout
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </Center>
          </Stack>
        </Stack>
      </nav>
    );
  };

  const RenderSubNav = () => {
    return (
      <nav className={classes.subnav}>
        <Box className={classes.subnav_header} h={60}>
          <Text size="sm" px="md" fw={500} c="gray.3">
            {active?.label} Modules
          </Text>
          <Text size="xs" px="md" c="brand.3">
            {organization?.name}
          </Text>
        </Box>

        {active?.childrens?.map((group: any, index: number) => (
          <Box key={index} mt="sm" mb="lg">
            <AnimatePresence>
              <motion.div
                key={group.group + "start" + index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Text
                  tt="uppercase"
                  px="md"
                  py="xs"
                  size="10px"
                  c="gray.4"
                  fw={600}
                >
                  {group.group}
                </Text>
              </motion.div>

              <Stack gap={0}>
                {group.childrens.map((item: any, index: number) => (
                  <motion.div
                    key={item.label + index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={cx(classes.subnavItem, {
                      [classes.subnavItem_active]:
                        Pathname === active.url + item.url,
                    })}
                  >
                    <UnstyledButton
                      px="md"
                      py="xs"
                      onClick={() => {
                        Router.push(active.url + item.url);
                      }}
                    >
                      <Group gap="xs">
                        {item.icon ? ( //* Icon
                          <item.icon
                            size={14}
                            color="var(--mantine-color-gray-5)"
                            weight="duotone"
                          />
                        ) : (
                          <Hash
                            size={14}
                            color="var(--mantine-color-gray-5)"
                            weight="duotone"
                          />
                        )}
                        <Text size="sm">{item.label}</Text>
                      </Group>
                    </UnstyledButton>
                  </motion.div>
                ))}
              </Stack>
            </AnimatePresence>
          </Box>
        ))}
      </nav>
    );
  };

  return (
    <>
      <AppShell.Navbar className={cx(classes.root, classes.sidenavContainer)}>
        <nav className={classes.nav_root}>
          <RenderMainNav />

          <RenderSubNav />
        </nav>
      </AppShell.Navbar>
    </>
  );
}
