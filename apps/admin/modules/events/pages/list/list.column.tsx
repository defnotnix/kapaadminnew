import { Badge, Stack, Text } from "@mantine/core";

export const columns = [
  {
    accessor: "shortname",
    title: "Short Name",
    sortable: true,
  },
  {
    accessor: "fullname",
    title: "Full Name",
    sortable: true,
  },
  {
    accessor: "event_date",
    title: "Event Date",
    sortable: true,
    render: ({ event_date }: any) => (
      <Text size="xs">{new Date(event_date).toLocaleDateString()}</Text>
    ),
  },
  {
    accessor: "event_category",
    title: "Event Category",
    sortable: true,
    render: ({ event_category }: any) => (
      <Text size="xs">{event_category?.name || "N/A"}</Text>
    ), // Adjust based on how event_category is structured.
  },
  {
    accessor: "venue",
    title: "Venue",
    sortable: true,
  },
  {
    accessor: "theme",
    title: "Theme",
    sortable: true,
  },
  {
    accessor: "highlight_message",
    title: "Highlight Message",
    sortable: true,
  },
  {
    accessor: "event_description",
    title: "Description",
    sortable: true,
  },
  {
    accessor: "is_featured",
    title: "Featured",
    sortable: true,
    render: ({ is_featured }: any) => (
      <Badge color={is_featured ? "green" : "red"}>
        {is_featured ? "Yes" : "No"}
      </Badge>
    ),
  },
];
