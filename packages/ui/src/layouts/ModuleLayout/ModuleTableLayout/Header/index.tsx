"use client";

import {
  ActionIcon,
  Badge,
  Box,
  Button,
  Divider,
  Group,
  Paper,
  Popover,
  ScrollArea,
  Select,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { PropModuleTableLayoutHeader } from "../ModuleTableLayout.type";
//context
import { useListHandlerContext } from "@vsphere/core";
//styles
import classes from "./header.module.css";
import cx from "clsx";
import {
  ArrowLeft,
  FunnelSimpleX,
  MagnifyingGlass,
  Plus,
  SortAscending,
  X,
} from "@phosphor-icons/react";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { render } from "react-dom";

export function ModuleTableLayoutHeader({
  moduleConfig,
  //tabs
  tabs = [],
  tabsSize = 8,
  enableTabLabel = false,
  //modals
  hasModalForms = false,
  //columns
  columns = [],
  //extra
  hideCreate = false,
  handlersFormModal,
}: PropModuleTableLayoutHeader) {
  // * DEFINITIONS

  const Router = useRouter();
  const Pathname = usePathname();

  // * CONTEXTS

  const { state, dispatch } = useListHandlerContext();
  const { filters, tabActive } = state;

  // * STATES

  // * PRERUNS

  // * FUNCTIONS

  // * COMPONENTS

  const renderTabs = tabs.slice(0, tabsSize).map((tab: any, index: number) => {
    if (tab.label !== "divider") {
      return (
        <div
          key={index}
          className={cx(classes.tab, {
            [classes.tabactive]: index == tabActive,
          })}
          onClick={() => {
            dispatch({
              type: "SET_TAB_ACTIVE",
              payload: index,
            });
          }}
        >
          <Group gap={4}>
            {tab.icon && <tab.icon size={14} />}

            {tab.label}

            {tab.count && (
              <Badge
                color={index == tabActive ? "brand" : "gray"}
                variant="light"
                size="xs"
              >
                {tab.count}
              </Badge>
            )}
          </Group>
        </div>
      );
    } else {
      return (
        <div key={index}>
          <Divider h={18} orientation="vertical" />
        </div>
      );
    }
  });

  const RenderFilterButton = () => {
    const [filterStep, setFilterStep] = useState(0);
    const [activeFilter, setActiveFilter] = useState<any>({});
    const [filterSearchVal, setFilterSearchVal] = useState("");

    return (
      <Popover withArrow width={300} position="bottom-end">
        <Popover.Target>
          <Button
            variant="light"
            color="indigo"
            size="xs"
            leftSection={<FunnelSimpleX />}
          >
            Add Filter
          </Button>
        </Popover.Target>

        {filterStep == 0 && (
          <Popover.Dropdown p={0}>
            <Group justify="space-between" p="xs">
              <Text size="sm" fw={600}>
                Add Filter
              </Text>
              <ActionIcon size="xs" variant="subtle">
                <X />
              </ActionIcon>
            </Group>
            <Divider />
            <Text size="xs" fw={600} px="sm" mt="xs" mb="sm" opacity={0.3}>
              Filter by
            </Text>

            <TextInput
              radius={0}
              variant="filled"
              placeholder="Search Criteria"
              rightSection={<MagnifyingGlass />}
            />
            <Stack gap={0}>
              {columns?.map((column: any, index: number) => (
                <Button
                  onClick={() => {
                    setActiveFilter(column);
                    setFilterStep(1);
                  }}
                  color="dark"
                  variant="subtle"
                  key={index}
                  p="sm"
                  justify="flex-start"
                >
                  {column.title}
                </Button>
              ))}
            </Stack>
          </Popover.Dropdown>
        )}

        {filterStep == 1 && (
          <Popover.Dropdown p={0}>
            <Group justify="space-between" p="xs">
              <Group>
                <ActionIcon
                  size="xs"
                  variant="subtle"
                  onClick={() => setFilterStep(0)}
                >
                  <ArrowLeft />
                </ActionIcon>
                <Text size="sm" fw={600}>
                  Search Value
                </Text>
              </Group>
              <ActionIcon size="xs" variant="subtle">
                <X />
              </ActionIcon>
            </Group>
            <Divider />
            <Text size="xs" fw={600} px="sm" mt="xs" mb="sm" opacity={0.3}>
              Seach value for {activeFilter?.title}
            </Text>

            <TextInput
              m="xs"
              placeholder="Search Criteria"
              onChange={(e: any) => {
                setFilterSearchVal(e.target.value);
              }}
            />

            <Group justify="flex-end">
              <Button
                fullWidth
                onClick={() => {
                  dispatch({
                    type: "ADD_FILTER",
                    payload: {
                      accessor: activeFilter?.accessor,
                      title: activeFilter?.title,
                      value: filterSearchVal,
                    },
                  });

                  setActiveFilter({});
                  setFilterSearchVal("");
                  setFilterStep(0);
                }}
              >
                Add Filter
              </Button>
            </Group>
          </Popover.Dropdown>
        )}
      </Popover>
    );
  };

  return (
    <>
      <Paper className={classes.root}>
        <Group h={40} justify="space-between">
          <Group>{renderTabs}</Group>

          <Group gap="4">
            <Button
              variant="subtle"
              color="gray.4"
              size="xs"
              style={{
                color: "var(--mantine-color-dark-2)",
              }}
              leftSection={<SortAscending />}
            >
              Sort by :{" "}
              <span
                style={{
                  color: "var(--mantine-color-dark-9)",
                }}
              >
                Added Date
              </span>
            </Button>

            <RenderFilterButton />

            {!hideCreate && (
              <Button
                size="xs"
                leftSection={<Plus />}
                onClick={() => {
                  hasModalForms
                    ? handlersFormModal.open()
                    : Router.push(Pathname + "/new");
                }}
              >
                Create New
              </Button>
            )}
          </Group>
        </Group>
      </Paper>

      {filters?.length > 0 && (
        <Box px="sm" mt="sm">
          <Group gap="4px">
            {filters?.map((filterinfo: any, index: number) => (
              <Badge
                pr={0}
                key={index}
                color="dark"
                size="lg"
                variant="default"
                radius="sm"
                rightSection={
                  <ActionIcon
                    size="sm"
                    variant="subtle"
                    color="gray"
                    onClick={() => {
                      dispatch({
                        type: "REMOVE_FILTER",
                        payload: filterinfo.accessor,
                      });
                    }}
                  >
                    <X size={12} weight="bold" />
                  </ActionIcon>
                }
              >
                <Text size="xs" tt="none">
                  <span
                    style={{
                      opacity: 0.5,
                    }}
                  >
                    {filterinfo.title}
                  </span>{" "}
                  : <b>{filterinfo.value}</b>
                </Text>
              </Badge>
            ))}
          </Group>
        </Box>
      )}
    </>
  );
}
