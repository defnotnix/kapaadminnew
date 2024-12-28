"use client";

import React, { useEffect, useState } from "react";

//next
import {} from "next/navigation";
//mantine
import { Container, Group, Paper, Stack, Text } from "@mantine/core";
//styles
import cx from "clsx";
import classes from "./services.module.css";
import { ServiceText } from "./component/ServiceText";
import { useTimeout } from "@mantine/hooks";

import { animate } from "framer-motion";

const mservices = [
  "Seminars",
  "Events",
  "Award",
  "Ceremonies",
  "Workshops",
  "Product Demonstrations",
  "Concerts",
  "Brand Launch",
  "Shows",
  "Fundraisers",
  "Webminars",
  "Conferences",
  "Networking Events",
];

export function _SectionServices() {
  // * DEFINITIONS

  const [activeServices, setActiveServices] = useState([
    "Seminars",
    "Events",
    "Award",
    "Ceremonies",
    "Workshops",
    "Product Demonstrations",
    "Concerts",
    "Brand Launch",
    "Shows",
    "Fundraisers",
    "Webminars",
    "Conferences",
    "Networking Events",
  ]);

  const [extra, setExtra] = useState([
    "Team Building Activities",
    "Hackathons",
    "Training Sessions",
    "Panel Discussions",
    "Keynote Speeches",
    "Charity Auctions",
    "Book Signings",
    "Film Screenings",
    "Trade Shows",
    "Exhibitions",
    "Retreats",
    "Press Conferences",
    "Community Gatherings",
    "Town Hall Meetings",
    "Virtual Reality Events",
    "Fitness Events",
    "Food Tastings",
    "Art Exhibitions",
    "Cultural Festivals",
    "Startup Pitches",
    "Photography Workshops",
    "Networking Mixers",
    "Pop-Up Events",
    "Gala Dinners",
    "Annual General Meetings (AGMs)",
  ]);

  // * CONTEXTS

  // * STATES

  // * PRELOADING

  // * FUNCTIONS

  const initiateAnimateFunction = async () => {
    console.log("initiate");

    const dataId = Math.floor(Math.random() * activeServices.length) + 1; // Assuming this is a number, not a string.

    // Animate color to transparent
    await animate(
      `#srv_${dataId}`,
      { color: "var(--mantine-color-yellow-6)" },
      { duration: 1 }
    );

    // Animate width to 0
    await animate(`#srv_${dataId}`, { width: 0 });

    // Generate a random new data ID
    const newDataId = Math.floor(Math.random() * extra.length); // Index, no +1 needed

    // Get the previous data and the new replacement data
    const prevData = activeServices[dataId - 1];
    const newData = extra[newDataId];

    // Update activeServices and extra without directly mutating state
    setActiveServices((prevActive) => {
      const updatedActive = [...prevActive];
      updatedActive[dataId - 1] = newData;
      return updatedActive;
    });

    setExtra((prevExtra) => {
      const updatedExtra = [...prevExtra];
      updatedExtra[newDataId] = prevData;
      return updatedExtra;
    });

    // Animate width back to "auto"
    await animate(`#srv_${dataId}`, { width: "auto" });

    // Animate color back to original
    await animate(`#srv_${dataId}`, {
      color: "var(--color-events-primary-950)",
    });

    initiateAnimateFunction();
  };

  useEffect(() => {
    initiateAnimateFunction();
  }, []);

  // * COMPONENTS

  return (
    <>
      <Container py={{ base: 50, lg: 160 }}>
        <Text size="sm" fw={600} ta="center">
          We manage a diverse array of events.
        </Text>

        <Stack py={50} visibleFrom="lg">
          <Group justify="center">
            <ServiceText id="srv_1" text={activeServices[0]} />
            <ServiceText id="srv_2" text={activeServices[1]} />
          </Group>
          <Group justify="center">
            <ServiceText id="srv_3" text={activeServices[2]} />
            <ServiceText id="srv_4" text={activeServices[3]} />
            <ServiceText id="srv_5" text={activeServices[4]} />
          </Group>
          <Group justify="center">
            <ServiceText id="srv_6" text={activeServices[5]} />
          </Group>
          <Group justify="center">
            <ServiceText id="srv_7" text={activeServices[6]} />{" "}
            <ServiceText id="srv_8" text={activeServices[7]} />
          </Group>
          <Group justify="center">
            <ServiceText id="srv_9" text={activeServices[8]} />{" "}
            <ServiceText id="srv_10" text={activeServices[9]} />{" "}
            <ServiceText id="srv_11" text={activeServices[10]} />
          </Group>
          <Group justify="center">
            <ServiceText id="srv_12" text={activeServices[11]} />{" "}
            <ServiceText id="srv_13" text={activeServices[12]} />
          </Group>
          <Group justify="center">
            <ServiceText id="srv_14" text={activeServices[13]} />
          </Group>
        </Stack>

        <Group justify="center" hiddenFrom="lg" my="xl">
          {mservices.map((item: any) => {
            return (
              <Text size="1.5rem" tt="uppercase" fw={700}>
                {item}
              </Text>
            );
          })}
        </Group>

        <Text size="sm" fw={600} ta="center" opacity={0.5}>
          Our Offerings
        </Text>
      </Container>
    </>
  );
}
