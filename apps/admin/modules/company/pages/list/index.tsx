"use client";

import { ListHandler, useListHandlerContext } from "@vsphere/core";
//api
import { moduleApiCall } from "@vsphere/core"
//config
import { configModule } from "../../module.config";
import { getRecords } from "../../module.api";
import { ModuleLayout } from "@vsphere/ui";
import { ActionIcon, Box, Card, Center, Group, Image, Loader, Paper, SimpleGrid, Text } from "@mantine/core";
import { ArrowRight } from "@phosphor-icons/react";
import { usePathname, useRouter } from "next/navigation";

export function _List() {

    const Pathname = usePathname()
    const Router = useRouter()

    const RenderCards = () => {

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


        if (isFetching) {
            return (
                <Center h={300}>
                    <Loader size={24} />
                </Center>
            )
        }



        return (
            <section
                style={{
                    padding: "var(--mantine-spacing-md)",
                }}
            >
                <SimpleGrid cols={{ base: 12, md: 3, lg: 5 }} spacing="xs">
                    {
                        data.map((cardinfo: any, index: number) =>
                            <Card key={index} withBorder onClick={() => {
                                Router.push(Pathname + "/profile/" + cardinfo.id)
                            }}>
                                <Card.Section h={200} bg="brand.1">
                                    <Center h={200}>
                                        <Image
                                            src={cardinfo.logo}
                                            h={100}
                                            w={100}
                                            fit="contain"
                                        />
                                    </Center>
                                </Card.Section>
                                <Card.Section p="md">
                                    <Group justify="space-between" wrap="nowrap">
                                        <Box>
                                            <Text size="sm">
                                                {cardinfo.name}
                                            </Text>
                                            <Text size="10px" opacity={.5}>
                                                {cardinfo.address}
                                            </Text>
                                        </Box>
                                        <ActionIcon variant="subtle" color="dark">
                                            <ArrowRight />
                                        </ActionIcon>
                                    </Group>
                                </Card.Section>
                            </Card>
                        )
                    }
                </SimpleGrid>
            </section>
        )
    }

    return (
        <>
            <ListHandler
                endpoint={configModule.endpoint}
                api={getRecords}

            >
                <ModuleLayout.List
                    // * CONFIG
                    moduleConfig={configModule}
                    // * TABS
                    tabs={[{ label: "All Records" }]}
                    // * TABLE DATA
                    columns={[]}

                >
                    <RenderCards />
                </ModuleLayout.List>
            </ListHandler>
        </>
    )
}