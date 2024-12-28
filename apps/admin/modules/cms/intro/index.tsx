"use client";

import React, { useState } from "react";
//mantine
import {
  ActionIcon,
  Button,
  Card,
  Container,
  Divider,
  Group,
  Paper,
  SimpleGrid,
  Stack,
  Text,
} from "@mantine/core";
import { cmsConfig } from "@/config/cms/cms.config";
import { ArrowUpRight, Divide } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

export function ModuleCMSIntro() {
  const [active, setActive] = useState(0);

  const Router = useRouter();

  return (
    <>
      <Container size="md">
        <Stack gap="xl">
          <Stack gap={0}>
            <Group justify="space-between" h={60}>
              <Text size="sm">
                Classics<b>Admin</b> CMS.
              </Text>
              <Button variant="light">Back to Classics Admin.</Button>
            </Group>
            <Divider opacity={0.5} />
          </Stack>

          <Stack gap="sxs">
            <Text ta="center" size="xs">
              Organize page contents to your preference.
            </Text>
            <Text ta="center" size="2rem">
              Customize Page Content
            </Text>
            <Group justify="center" my="xl">
              {cmsConfig.map((item: any, index: number) => (
                <Text
                  size="xl"
                  key={index}
                  opacity={active == index ? 1 : 0.3}
                  onClick={() => {
                    setActive(index);
                  }}
                >
                  {item.label}
                </Text>
              ))}
            </Group>
          </Stack>

          <SimpleGrid cols={3}>
            {cmsConfig[active].pages.map((item: any, index: number) => (
              <Card
                withBorder
                h={250}
                key={index}
                onClick={() => {
                  Router.push("/cms" + cmsConfig[active].url + item.url);
                }}
              >
                <Card.Section h={200} bg="brand.0"></Card.Section>
                <Card.Section p="sm">
                  <Group justify="space-between">
                    <div>
                      <Text size="10px" opacity={0.4}>
                        {cmsConfig[active].label}
                      </Text>
                      <Text>{item.label}</Text>
                    </div>
                    <ActionIcon color="dark" radius="xl" size="lg">
                      <ArrowUpRight />
                    </ActionIcon>
                  </Group>
                </Card.Section>
              </Card>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </>
  );
}
