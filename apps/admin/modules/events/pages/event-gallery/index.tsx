"use client";

import { useState } from "react";
import {
  DragDropContext,
  Draggable,
  type DropResult,
  Droppable,
} from "@hello-pangea/dnd";

const _ = require("lodash");

//nextjs
import { useParams, usePathname } from "next/navigation";

import {
  ActionIcon,
  Button,
  Center,
  Container,
  Divider,
  FileButton,
  FileInput,
  Group,
  Image,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
  TableTd,
  Space,
  Avatar,
  Modal,
  Select,
  AspectRatio,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useForm } from "@mantine/form";

//api
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  ArrowLeft,
  Check,
  DotsSix,
  ImageSquare,
  Pen,
  Plus,
  Trash,
  Upload,
  UploadSimple,
  Video,
  Warning,
} from "@phosphor-icons/react";

import {
  DataTable,
  DataTableColumn,
  DataTableDraggableRow,
} from "mantine-datatable";

import {
  apiEventGalleryImage,
  apiEventGalleryVideo,
} from "@/modules/events/pages/event-gallery/module.api";
import { ImageUpload, triggerNotification } from "@vsphere/ui";
import { toFormData } from "@vsphere/core";
import { modals } from "@mantine/modals";

export function _Gallery() {
  const Params = useParams();

  const [opened, { open, close, toggle }] = useDisclosure(false);

  const [records, setRecords] = useState<any[]>([]);

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const items = Array.from(records);
    const sourceIndex = result.source.index;
    const destinationIndex = result.destination.index;
    const [reorderedItem] = items.splice(sourceIndex, 1);
    items.splice(destinationIndex, 0, reorderedItem);

    setRecords(items);
  };

  const columns: any = [
    // add empty header column for the drag handle
    {
      accessor: "",
      hiddenContent: true,
      width: 30,
    },
    {
      accessor: "image",
      title: "Image",
      sortable: false, // Assuming images are not sortable

      render: (row: any) =>
        row.image ? (
          <Image h={200} src={row.image} />
        ) : (
          <AspectRatio ratio={16 / 9}>
            <iframe
              src={row?.link}
              title="YouTube video player"
              style={{ border: 0 }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </AspectRatio>
        ),
    },
    {
      accessor: "caption",
      title: "Caption",
      sortable: false, // Assuming images are not sortable
    },
  ];

  // * DEFINITIONS

  const Router = usePathname();

  const mutationDelete = useMutation({
    mutationFn: async (delData) => {
      triggerNotification.form.isLoading({});

      const res =
        (await delData.type) == "Image"
          ? apiEventGalleryImage.deleteRecord(delData.id)
          : apiEventGalleryVideo.deleteRecord(delData.id);
      return res;
    },
    onSuccess: (res: any, delId: any) => {
      triggerNotification.form.isSuccess({});
      queryData.refetch();
    },
    onError: (err: any) => {
      triggerNotification.form.isError({});
    },
  });

  const queryData = useQuery({
    queryKey: ["events", "gallery"],
    queryFn: async () => {
      const _dataImage = await apiEventGalleryImage.getRecords(Params.id);
      const _dataVideo = await apiEventGalleryVideo.getRecords(Params.id);

      const _newArray = _.sortBy(
        [
          ..._dataImage.map((e: any) => ({ ...e, type: "Image" })),
          ..._dataVideo.map((e: any) => ({ ...e, type: "Video" })),
        ],
        ["holder"]
      );

      setRecords(
        _newArray.map((e: any) => {
          return {
            ...e,
            id: String(e.id),
          };
        })
      );

      return [];
    },
    initialData: [],
  });

  // * STATE

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      id: null,
      image: null,
      link: null,
      type: null,
      _dirtcheck: null,
    },
  });

  // * QUERIES

  const queryDataImages = useQuery({
    queryKey: ["events", "gallery", "images"],
    queryFn: () => {
      return [];
    },
    initialData: [],
  });

  const queryDataVideo = useQuery({
    queryKey: ["events", "gallery", "gallery"],
    queryFn: () => {
      return [];
    },
    initialData: [],
  });

  // * FUNCTIONS

  async function mutationSubmiFunction() {
    triggerNotification.form.isLoading({});

    const { image, ...others }: any = form.getValues();

    // PROCESSING DATA
    const _dataToProcess = {
      ...others,
      ...(image instanceof File ? { image } : {}),
      event: Params.id,
      holder: others.holder || records.length + 1,
    };
    const _dataToSend =
      form.getValues().type == "Image"
        ? await toFormData({
            values: _dataToProcess,
            ...{},
            hasDirtCheck: form.getValues()._dirtcheck !== null,
          })
        : _dataToProcess;
    // TEST
    console.log(_dataToSend);
    // SUBMIT
    return form.getValues()._dirtcheck
      ? form.getValues().type == "Image"
        ? apiEventGalleryImage.editRecord(_dataToSend, form.getValues()?.id)
        : apiEventGalleryVideo.editRecord(_dataToSend, form.getValues()?.id)
      : form.getValues().type == "Image"
        ? apiEventGalleryImage.createRecord(_dataToSend)
        : apiEventGalleryVideo.createRecord(_dataToSend);
  }

  const mutationSubmit = useMutation({
    mutationFn: mutationSubmiFunction,
    // SUCCESS HANDLER
    onSuccess: (res: any) => {
      console.log("success");
      form.reset();
      close();
      queryData.refetch();

      triggerNotification.form.isSuccess({});
      // initialization
    },
    // ERROR HANDLER
    onError: (err: any) => {
      let errObject = err.object?.response?.data;

      console.log(err, errObject);

      switch (errObject.type) {
        case "Validation Error":
          form.setErrors(errObject);
          triggerNotification.form.isError({
            title: "Whoops! Hold on a Moment 🖐️",
            message:
              "It seems some fields are missing or incorrect. Please review and resubmit.",
          });
          break;
        default:
          triggerNotification.form.isError({});
      }
    },
  });

  const handleDelete = (data: any) => {
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
        mutationDelete.mutate(data);
      },
      styles: {
        header: {
          background: "var(--mantine-color-red-1)",
        },
      },
      size: "sm",
    });
  };

  // * RENDER

  return (
    <>
      <Container size="md" py="xl">
        <Group justify="space-between">
          <Group>
            <Button variant="light" leftSection={<ArrowLeft />}>
              Back to Events.
            </Button>
            <Text size="xl" fw={700} tt="capitalize">
              <span
                style={{
                  opacity: 0.3,
                }}
              >
                Organize
              </span>{" "}
              Events Gallery
            </Text>
          </Group>

          <Group gap="xs">
            <Button onClick={open} leftSection={<Plus />}>
              Add Media
            </Button>
          </Group>
        </Group>
        <Group justify="space-between">
          <Text size="xs" opacity={0.5}></Text>
        </Group>

        <Space h="xl" />

        <DragDropContext onDragEnd={handleDragEnd}>
          <DataTable
            columns={[
              ...columns,
              {
                accessor: "",
                width: 100,
                render: (row: any) => (
                  <Group gap="xs">
                    <ActionIcon
                      color="blue"
                      onClick={() => {
                        form.setValues({
                          ...row,
                          _dirtcheck: row,
                        });
                        open();
                      }}
                    >
                      <Pen />
                    </ActionIcon>

                    <ActionIcon
                      color="red"
                      onClick={() => {
                        handleDelete(row);
                      }}
                    >
                      <Trash />
                    </ActionIcon>
                  </Group>
                ),
              },
            ]}
            records={records}
            withTableBorder
            withColumnBorders
            tableWrapper={({ children }) => (
              <Droppable droppableId="datatable">
                {(provided) => (
                  <div {...provided.droppableProps} ref={provided.innerRef}>
                    {children}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            )}
            styles={{ table: { tableLayout: "fixed" } }}
            rowFactory={({ record, index, rowProps, children }) => (
              <Draggable key={record.id} draggableId={record.id} index={index}>
                {(provided, snapshot) => (
                  <DataTableDraggableRow
                    isDragging={snapshot.isDragging}
                    {...rowProps}
                    {...provided.draggableProps}
                  >
                    {/** custom drag handle */}
                    <TableTd
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      <DotsSix size={16} />
                    </TableTd>
                    {children}
                  </DataTableDraggableRow>
                )}
              </Draggable>
            )}
          />
        </DragDropContext>
      </Container>

      <Modal
        opened={opened}
        onClose={() => {
          close();
        }}
        title={<Text size="xs">New Media</Text>}
      >
        <Stack p="md">
          <Select
            label="Media Type"
            data={["Image", "Video"]}
            placeholder="Select Type"
            {...form.getInputProps("type")}
          />

          {form.getValues()?.type == "Image" && (
            <>
              <ImageUpload
                {...form.getInputProps("image")}
                label="Image"
                onChange={(image: any) => form.setFieldValue("image", image)}
                value={form.getValues().image}
              />
              <TextInput
                label="Caption"
                description="Image Caption"
                {...form.getInputProps("caption")}
                placeholder="e.g. The event was held at..."
              />
            </>
          )}

          {form.getValues()?.type == "Video" && (
            <>
              <AspectRatio ratio={16 / 9}>
                <iframe
                  src={form.getValues().link || ""}
                  title="YouTube video player"
                  style={{ border: 0 }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </AspectRatio>

              <TextInput
                label="Youtube Embed URL"
                {...form.getInputProps("link")}
              />
              <TextInput
                label="Caption"
                description="Image Caption"
                {...form.getInputProps("caption")}
                placeholder="e.g. The event was held at..."
              />
            </>
          )}

          <Group justify="flex-end">
            <Button onClick={close}>Cancel</Button>
            <Button
              leftSection={<Check />}
              onClick={() => {
                mutationSubmit.mutate();
              }}
            >
              Save
            </Button>
          </Group>
        </Stack>
      </Modal>
    </>
  );
}
