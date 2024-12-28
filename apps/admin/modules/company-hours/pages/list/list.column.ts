import { Avatar, Badge, Group, Stack, Text } from "@mantine/core";

export const columns = [
    {
        accessor: "day",
        title: "Day of Week",
        sortable: true,
        width: 300,
    },
    {
        accessor: "opentime",
        title: "Open Time",
        sortable: true,
        width: 300,
    },
    {
        accessor: "closetime",
        title: "Closing Time",
        sortable: true,
        width: 300,
    },
];
