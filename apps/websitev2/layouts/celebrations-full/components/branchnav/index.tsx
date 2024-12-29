"use client";

import { Paper, Image, ActionIcon, Stack, Space, Box } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
//icons
import { CaretDown } from "@phosphor-icons/react";
//classes
import classes from "./branchnav.module.css";
import cx from "clsx";
//assets
import imgMain from "@/assets/images/brand/theclassics.png";
import imgCelebrations from "@/assets/images/brand/celebrations.png";
import imgEvents from "@/assets/images/brand/events.png";
import imgSocieties from "@/assets/images/brand/societies.png";
import imgCreations from "@/assets/images/brand/creations.png";
//motion
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

const branches = [
  {
    label: "Celebrations",
    image: imgCelebrations.src,
    url: "/celebrations",
  },
  {
    label: "Events",
    image: imgEvents.src,
    url: "/events",
  },
  {
    label: "Societies",
    image: imgSocieties.src,
    url: "/societies",
  },
  {
    label: "Creations",
    image: imgCreations.src,
    url: "/creations",
  },
];

export function BranchNav() {
  // * DEFINITIONS

  const [active, { toggle }] = useDisclosure(false);

  const Router = useRouter();

  // * CONTEXTS

  // * STATES

  // * CONTEXTS

  // * HANDLERS

  return (
    <>
      <section className={classes.root}>
        <AnimatePresence>
          {active && (
            <motion.div
              initial={{ height: 0, opacity: 0, filter: "blur(24px)" }}
              animate={{
                height: "auto",
                opacity: 1,
                filter: "blur(0px)",
              }}
              exit={{ height: 0, opacity: 0, filter: "blur(24px)" }}
              style={{
                borderRadius: "var(--mantine-radius-xl)",
                overflow: "hidden",
                background: "rgba(255,255,255,.5)",
                backdropFilter: "blur(24px)",
                marginBottom: 8,
              }}
            >
              <Stack gap="xs">
                <Space h="md" />
                {branches.map((item: any, index: number) => (
                  <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    key={index}
                  >
                    <Box
                      p="md"
                      onClick={() => {
                        Router.push(item.url);
                        toggle();
                      }}
                    >
                      <Image h={64} w={64} src={item.image} />
                    </Box>
                  </motion.div>
                ))}
                <Space h="xs" />
              </Stack>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <Paper
            onClick={toggle}
            p="md"
            radius="xl"
            bg="rgba(255,255,255,.5)"
            style={{
              backdropFilter: "blur(24px)",
              transition: ".3s ease-in-out",
            }}
          >
            {active ? (
              <ActionIcon radius="999" variant="subtle" color="dark" size={64}>
                <CaretDown />
              </ActionIcon>
            ) : (
              <Image h={64} w={64} src={imgMain.src} />
            )}
          </Paper>
        </motion.div>
      </section>
    </>
  );
}
