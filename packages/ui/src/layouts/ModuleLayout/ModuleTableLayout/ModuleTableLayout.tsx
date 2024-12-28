// @ts-nocheck

"use client";

//react
import { useEffect, useState } from "react";
//next
import { usePathname, useRouter } from "next/navigation";
//mantine
import {
  ActionIcon,
  Badge,
  Button,
  Grid,
  Group,
  HoverCard,
  LoadingOverlay,
  Menu,
  Modal,
  Paper,
  Space,
  Text,
  TextInput,
  Tooltip,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
//@vsphere
import { FormHandler, ListHandler, useListHandlerContext } from "@vsphere/core";
//table
import { DataTable, DataTableSortStatus } from "mantine-datatable";
//icons
import {
  ArrowsClockwise,
  CaretDown,
  Check,
  Export,
  Eye,
  Info,
  MagnifyingGlass,
  MagnifyingGlassPlus,
  PaintBucket,
  Pen,
  Trash,
  Warning,
} from "@phosphor-icons/react";
//sorting
import sortBy from "lodash/sortBy";
//type
//components
import { ModuleTableLayoutHeader as Header } from "./Header";

//styles
import classes from "./ModuleTableLayout.module.css";
import { PropModuleTableLayout } from "./ModuleTableLayout.type";
import { useMutation, useQuery } from "@tanstack/react-query";
import { ModuleLayout, triggerNotification } from "@vsphere/ui";
import { modals } from "@mantine/modals";

export function ModuleTableLayout({
  moduleConfig,
  //controls
  hideView = false,
  hideCreate = false,
  disableHeader = false,
  //data
  forceData,
  //tabs
  tabs = [],
  tabsSize = 8,
  enableTabLabel = false,
  //search
  serverSearch = false,
  //tableProps
  tableprops,
  columns = [],
  idAccessor = "id",

  onDelete = (id) => {},
  onDeleteSuccess,
  //styles
  rowColor,
  rowBackgroundColor,
  rowStyle,
  //extraContent
  contentPreHeader,
  contentPreTable,
  contentPostTable,
  extraActions,
  //modal
  hasModalForms = false,
  modalCreate: ModalCreate = () => <></>,
  modalEdit: ModalEdit = () => <></>,
  onEditTrigger = (id) => null,
  //api
  apiCreate = () => {},
  apiDelete = () => {},
  apiEdit = () => {},
  //formprops
  modalFormProps = {
    formProps: {
      // * FORM
      initial: {},
      formType: "new",

      // * STEPS
      steps: [],
      stepType: "default",
      stepClickable: false,
      initialStep: 0,

      // * VALIDATION
      validation: [],

      // * SUBMIT
      transformDataOnSubmit: (formdata) => formdata,
      submitFormData: false,

      // * API
      apiSubmit: (body: any, id: any) => {
        return true;
      },
      submitProps: {
        keyIgnore: [],
        valueIgnore: [],
        stringify: false,
      },
    },
  },
  modalFormComponent = <></>,
}: PropModuleTableLayout) {
  // * DEFINITIONS

  const Router = useRouter();
  const Pathname = usePathname();

  // * CONTEXTS

  const {
    state,
    dispatch,

    //table
    data,
    isLoading,
    isFetching,
    refetch,

    //search
    searchVal,
    setSearchVal,
  } = useListHandlerContext();
  const { search, filters, tabActive, selectedRecords, page, pageSize } = state;

  // * ModalProps

  const { width } = modalFormProps;

  // * STATES

  // > DATA HOLDER

  const [records, setRecords] = useState<any[]>([]);

  // > MODALS

  const [openFormModal, handlersFormModal] = useDisclosure(false);

  const [activeEdit, setActiveEdit] = useState<null | any>(null);
  const [editLoading, setEditLoading] = useState(false);

  // > COLOR

  const [enableRowStyle, setEnableRowStyle] = useState(false);

  // > SORTING

  const [sortStatus, setSortStatus] = useState<DataTableSortStatus<any>>({
    columnAccessor: "name",
    direction: "asc",
  });

  // > PAGINATION

  const PAGE_SIZES = [20, 35, 50];

  // * PRERUNS

  useEffect(() => {
    if (!serverSearch) {
      const _data = sortBy(forceData || data, sortStatus.columnAccessor);
      setRecords(sortStatus.direction === "desc" ? _data.reverse() : _data);
    } else {
      setRecords(data);
    }
  }, [data, sortStatus]);

  // * FUNCTIONS

  // > QUERY-MUTATE

  const mutationSubmit = useMutation({
    mutationFn: async (delId) => {
      triggerNotification.form.isLoading({});

      const res = await apiDelete(moduleConfig.endpoint, delId);
      return res;
    },
    onSuccess: (res: any, delId: any) => {
      triggerNotification.form.isSuccess({});
      refetch();
      if (onDeleteSuccess) {
        onDeleteSuccess(delId);
      }
    },
    onError: (err: any) => {
      triggerNotification.form.isError({});
    },
  });

  const handleDelete = (id: any) => {
    modals.openConfirmModal({
      title: (
        <Group>
          <ActionIcon size="sm" color="red" variant="light">
            <Warning size={12} />
          </ActionIcon>
          <Text
            size="sm"
            style={{
              fontWeight: 600,
            }}
          >
            Please confirm your action
          </Text>
        </Group>
      ),
      children: (
        <>
          <Text size="xs" my="md">
            This might result unexpected deletion of other dependent records
            under it.
            <br />
            <br />
            <span
              style={{
                fontWeight: 600,
              }}
            >
              Are you sure you want to proceed?
            </span>
          </Text>
          <Space h="6px" />
        </>
      ),
      labels: { confirm: "Confirm", cancel: "Cancel" },
      confirmProps: {
        color: "red",
        size: "xs",
      },
      cancelProps: {
        size: "xs",
      },
      onCancel: () => {},
      onConfirm: () => {
        mutationSubmit.mutate(id);
      },
      styles: {
        header: {
          background: "var(--mantine-color-red-1)",
        },
      },
      size: "sm",
    });
  };

  // * COMPONENTS

  const ActionEdit = ({ row }: any) => {
    const form = FormHandler.useForm();

    const handleEditOpen = async () => {
      setActiveEdit(row);
      handlersFormModal.open();
      setEditLoading(true);
      const _editData = await onEditTrigger(row);
      console.log(await _editData);
      form.setValues(await _editData);
      setEditLoading(false);
    };

    return (
      <ActionIcon
        size="sm"
        variant="subtle"
        onClick={async () => {
          if (hasModalForms) {
            handleEditOpen();
          } else {
            Router.push(Pathname + "/edit/" + row.id);
          }
        }}
      >
        <Pen />
      </ActionIcon>
    );
  };

  return (
    <FormHandler
      formType={activeEdit ? "edit" : "new"}
      {...modalFormProps.formProps}
      apiSubmit={activeEdit ? apiEdit : apiCreate}
      onSubmitSuccess={(res: any) => {
        refetch();
        handlersFormModal.close();
      }}
    >
      <section className={classes.root}>
        <div className={classes.contentPreHeader}>{contentPreHeader}</div>
        {!disableHeader && (
          <Header
            tabs={tabs}
            tabsSize={tabsSize}
            enableTabLabel={enableTabLabel}
            hasModalForms={hasModalForms}
            moduleConfig={moduleConfig}
            //
            hideCreate={hideCreate}
            //columns
            columns={columns}
            handlersFormModal={handlersFormModal}
          />
        )}

        <Space h="lg" />

        <Grid gutter={0} px="lg" align="center">
          <Grid.Col span={{ base: 12, lg: 6 }}>
            <Group gap="xs">
              <Text size="lg" fw={700}>
                <span
                  style={{
                    color: "var(--mantine-color-gray-5)",
                  }}
                >
                  {moduleConfig.prename || "Manage "}
                </span>
                {moduleConfig.moduleName}
              </Text>
              <Badge variant="light" size="xs" radius="sm">
                {search ? "-" : data.length} record/s
              </Badge>
            </Group>
            <Text size="xs" fw={500} opacity={0.5}>
              {moduleConfig.moduleDescriptions?.default}
            </Text>
          </Grid.Col>

          <Grid.Col span={{ base: 12, lg: 6 }}>
            <Group justify="flex-end" gap="xs">
              <HoverCard shadow="md" withArrow>
                <HoverCard.Target>
                  <ActionIcon
                    size="lg"
                    onClick={() => {
                      setEnableRowStyle(!enableRowStyle);
                    }}
                    variant={enableRowStyle ? "filled" : "light"}
                  >
                    <PaintBucket />
                  </ActionIcon>
                </HoverCard.Target>
                <HoverCard.Dropdown>
                  <Text size="xs" ta="center">
                    Row Color :{" "}
                    <b
                      style={{
                        color: enableRowStyle
                          ? "var(--mantine-color-teal-6)"
                          : "var(--mantine-color-orange-6)",
                      }}
                    >
                      {enableRowStyle ? "Enabled" : "Disabled"}
                    </b>
                  </Text>
                </HoverCard.Dropdown>
              </HoverCard>

              <Menu
                withArrow
                styles={{
                  item: {
                    fontSize: "var(--mantine-font-size-xs)",
                  },
                }}
              >
                <Menu.Target>
                  <Button
                    variant="light"
                    rightSection={<CaretDown />}
                    disabled={isFetching}
                  >
                    Actions
                  </Button>
                </Menu.Target>
                <Menu.Dropdown w={200}>
                  <Menu.Label>Bulk Actions</Menu.Label>
                  <Menu.Item leftSection={<Pen />}>Bulk Edit</Menu.Item>
                  <Menu.Item leftSection={<Trash />}>Bulk Delete</Menu.Item>
                  <Menu.Divider />
                  <Menu.Label>General</Menu.Label>

                  <Menu.Item
                    leftSection={<ArrowsClockwise />}
                    onClick={() => {
                      refetch();
                    }}
                  >
                    Reload Table
                  </Menu.Item>
                  <Menu.Divider />
                  <Menu.Label>Export to CSV</Menu.Label>
                  <Menu.Item leftSection={<Export />}>Export All</Menu.Item>
                  <Menu.Item leftSection={<Check />}>Export Selected</Menu.Item>
                </Menu.Dropdown>
              </Menu>

              <TextInput
                disabled={isFetching}
                w={350}
                placeholder="Search"
                onChange={(e) => {
                  setSearchVal(e.target.value);
                }}
                leftSection={
                  serverSearch ? (
                    <Tooltip label="This is a server-side search.">
                      <MagnifyingGlassPlus />
                    </Tooltip>
                  ) : (
                    <MagnifyingGlass />
                  )
                }
              />

              <ActionIcon
                disabled={isFetching}
                size="lg"
                onClick={() => {
                  refetch();
                }}
              >
                <ArrowsClockwise />
              </ActionIcon>
            </Group>
          </Grid.Col>
        </Grid>

        <Space h="md" />

        <div className={classes.contentPreTable}>{contentPreTable}</div>

        <Paper m="md" withBorder mt="sm">
          <DataTable
            fetching={isFetching}
            styles={{
              header: {
                background: "var(--mantine-color-gray-1)",
              },
            }}
            fz="xs"
            fw={500}
            highlightOnHover
            verticalSpacing="xs"
            horizontalSpacing="md"
            idAccessor={idAccessor}
            // * DATA
            columns={[
              {
                accessor: "#",
                title: "#",
                width: 50,
                render: (row, index) => <>{index + 1}</>,
              },
              ...columns,
              {
                accessor: "ac",
                title: "Actions",
                width: 160,
                textAlign: "right",
                render: (row: any) => (
                  <Group gap="4" justify="flex-end">
                    
                    {extraActions && extraActions({ row })}

                    {!hideView && (
                      <ActionIcon
                        size="sm"
                        variant="subtle"
                        color="teal"
                        onClick={() => {
                          Router.push(Pathname + "/" + row.id);
                        }}
                      >
                        <Eye />
                      </ActionIcon>
                    )}

                    <ActionEdit row={row} />

                    <ActionIcon
                      size="sm"
                      variant="subtle"
                      color="red"
                      onClick={() => {
                        console.log("Deleting", row);
                        handleDelete(row.id);
                      }}
                    >
                      <Trash />
                    </ActionIcon>
                  </Group>
                ),
              },
            ]}
            records={records || []}
            // >  emptyState="No records to show"

            classNames={{
              header: classes.tableheader,
            }}
            // > Selection
            selectionTrigger="cell"
            selectedRecords={selectedRecords}
            onSelectedRecordsChange={(e) => {
              dispatch({
                type: "SET_SELECTED_RECORDS",
                payload: e,
              });
            }}
            selectionCheckboxProps={{ size: "xs" }}
            selectionColumnStyle={{ width: 16 }}
            // > Sorting
            sortStatus={sortStatus}
            onSortStatusChange={setSortStatus}
            // > Pagination
            totalRecords={999}
            page={page}
            onPageChange={(p) => {
              dispatch({
                type: "SET_PAGE",
                payload: p,
              });
            }}
            // > Pagination Size
            recordsPerPage={pageSize}
            recordsPerPageOptions={PAGE_SIZES}
            onRecordsPerPageChange={(e) => {
              dispatch({
                type: "SET_PAGE_DATA",
                payload: {
                  pageSize: e,
                  page: 1,
                },
              });
            }}
            // > Context Menu
            //textSelectionDisabled={isTouch}

            // > Row Styling
            rowColor={rowColor}
            rowBackgroundColor={rowBackgroundColor}
            rowStyle={enableRowStyle ? rowStyle : undefined}
            {...tableprops}
          />
        </Paper>

        <div className={classes.contentPostTable}>{contentPostTable}</div>

        {hasModalForms && (
          <Modal
            size={width}
            opened={openFormModal}
            onClose={handlersFormModal.close}
            title={
              <Text tt="uppercase" size="xs" fw={700}>
                {(activeEdit ? "Edit " : "New ") + moduleConfig.moduleName}
              </Text>
            }
          >
            <LoadingOverlay visible={editLoading} />
            <ModuleLayout.Modal
              variant={activeEdit ? "edit" : "new"}
              isLoading={false}
              moduleConfig={moduleConfig}
            >
              {modalFormComponent}
            </ModuleLayout.Modal>
          </Modal>
        )}
      </section>
    </FormHandler>
  );
}
