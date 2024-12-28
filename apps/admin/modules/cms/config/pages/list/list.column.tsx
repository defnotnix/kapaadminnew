import { Avatar, Badge, Stack, Text } from "@mantine/core";

export const columns = [
  {
    accessor: "image",
    title: "Image",
    sortable: false, // Assuming images are not sortable

    render: (row: any) => <Avatar src={row.image} />,
  },
  {
    accessor: "id",
    title: "ID",
    sortable: true,
  },
  {
    accessor: "link",
    title: "Link",
    sortable: true,
  },
  {
    accessor: "holder",
    title: "Holder",
    sortable: true,
  },

  {
    accessor: "caption",
    title: "Caption",
    sortable: true,
    width: 300,
  },
  {
    accessor: "attribute",
    title: "Attribute",
    sortable: true,
    width: 300,
  },
  {
    accessor: "meta_keyphrase",
    title: "Meta Keyphrase",
    sortable: true,
    width: 300,
  },
  {
    accessor: "meta_description",
    title: "Meta Description",
    sortable: true,
    width: 500,
  },
];
