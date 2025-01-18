"use client";

import {
  Button,
  Center,
  Container,
  Grid,
  Group,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@mantine/core";
import { ArrowLeft } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

export function ModuleCreation() {
  const Router = useRouter();

  return (
    <>
      <Container size="md" py={100}>
        <Group wrap="nowrap">
          <Group>
            <Image
              h={40}
              w={40}
              src={
                "https://vdocs.classicsprojects.com.np/media/profile/creations.png"
              }
            />
            <Text size="xs" fw={600} lh=".9rem">
              KaPa
              <br />
              Creations
            </Text>
          </Group>
          {true && (
            <>
              <Text visibleFrom="lg" size="md">
                *
              </Text>
              <Text
                visibleFrom="lg"
                size="xs"
                opacity={0.8}
                fw={600}
                lh=".9rem"
              >
                Innovative decors and designs to elevate
                <br /> your events with us or without.
              </Text>
            </>
          )}
        </Group>

        <Text mt="xl" size="xs">
          Hello there!
          <br />
          The webpages under this is currently under development. Please browse
          our other branches.
        </Text>

        <Button
          color="orange"
          variant="light"
          mt="xl"
          onClick={() => Router.push("/")}
          leftSection={<ArrowLeft />}
        >
          Take me back
        </Button>
      </Container>
    </>
  );
}
