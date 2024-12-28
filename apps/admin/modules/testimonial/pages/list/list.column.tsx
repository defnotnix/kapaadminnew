import { Avatar, Badge, Group, Stack, Text } from "@mantine/core";

export const columns = [
    {
        accessor: "title",
        title: "Testimonial From",
        sortable: true,
        width: 300,
        render: (row: any) => (
            <Group>
                <Avatar src={row.avatar} />
                <b>{row.writer_name} </b>
            </Group>
        ),
    },
    {
        accessor: "post",
        title: "Post",
        sortable: true,
        width: 300,
    },
    {
        accessor: "quote",
        title: "Quote",
        sortable: true,
        width: 300,
    },
];
