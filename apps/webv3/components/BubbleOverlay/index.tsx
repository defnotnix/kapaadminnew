"use client";

import {
  Button,
  Group,
  Image,
  Overlay,
  Paper,
  Space,
  Stack,
  Tooltip,
  UnstyledButton,
} from "@mantine/core";
// styles
import classes from "./bubble.module.css";
import cx from "clsx";
import { useState } from "react";

import { motion } from "framer-motion";
import { WhatsappLogo } from "@phosphor-icons/react";

const branches = [
  {
    id: 1,
    label: "Celebrations",
    description: "Celebrations with your loved ones",
    quote: "For your cherished moments",
    url: "/celebrations",
    image:
      "https://vdocs.classicsprojects.com.np/media/profile/celebrations.png",
    background: "var(--color-celebrations-cream)",
  },
  {
    id: 2,
    label: "Events",
    description: "Memorable events to cherish forever",
    quote: "For Your Public and Corporate Events",
    url: "/events",
    image: "https://vdocs.classicsprojects.com.np/media/profile/events.png",
    background: "var(--mantine-color-brand-0)",
  },
  {
    id: 3,
    label: "Societies",
    description: "Connecting communities worldwide",
    quote: "For Unique Event Goods & Décor",
    url: "/societies",
    image: "https://vdocs.classicsprojects.com.np/media/profile/societies.png",
    background: "var(--mantine-color-sky-3)",
  },
  {
    id: 4,
    label: "Creations",
    description: "Innovative designs and masterpieces",
    quote: "For Meaningful Social Causes",
    url: "/creations",
    image: "https://vdocs.classicsprojects.com.np/media/profile/creations.png",
  },
];

export function BubbleOverlay() {
  const [active, setActive] = useState(false);

  return (
    <>
      <div className={classes.root}>
        <div
          className={classes.btn_main}
          onClick={() => {
            setActive(!active);
          }}
        >
          <svg
            width="1020"
            height="1006"
            viewBox="0 0 1020 1006"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M482.611 815L2.61126 505C-16.6989 351 69.8011 156 305.111 280V94L180.611 16L211.611 0L407.611 128V321L462.611 358V281L564.611 346V754.5L462.111 685V402L406.611 365V729.5L499.111 788.5L500.111 806C498.278 808.667 492.211 814.2 482.611 815ZM107.801 528L155.801 563C156.968 503.833 188.501 384.4 305.301 380V327C216.301 325 111.801 334 107.801 528Z"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M547.301 218L1019.8 524V602C1012.13 694.833 941.701 853.8 721.301 747V914L831.801 987L805.301 1006L618.301 879.5V300L527.801 242V225C530.134 221.167 537.301 214.4 547.301 218ZM719.801 697.5V644C764.635 645.667 857.001 612.6 867.801 467L914.801 500C914.801 612.5 874.301 709.5 719.801 697.5Z"
            />
          </svg>

          <div className={classes.btn_whatsapp}>
            <Button
              mr={active ? 10 : 0}
              style={{
                boxShadow: "0 0 30px rgba(0,0,0,.3)",
                fontSize: "var(--mantine-font-size-xs)",
                transition: ".2s ease-in-out",
              }}
              size="xl"
              leftSection={<WhatsappLogo size={10} weight="fill" />}
              bg="linear-gradient(90deg,var(--mantine-color-teal-8), var(--mantine-color-teal-6))"
              radius="xl"
            >
              Chat on Whatsapp
            </Button>
          </div>
        </div>

        <motion.div
          style={{
            position: "absolute",
            bottom: 6,
            right: 6,
            zIndex: 12,
          }}
          initial={{ opacity: 0, y: 300 }}
          animate={active ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.2,
            ease: "anticipate",
          }}
        >
          <Paper w={80} p={5} radius="999" shadow="xl">
            <Stack gap={0}>
              {branches.map((branchinfo: any, index: number) => (
                <Tooltip
                  position="left"
                  withArrow
                  label={"KaPa " + branchinfo.label}
                  key={index}
                >
                  <UnstyledButton className={classes.branch} h={70} w={70}>
                    <Image h={32} fit="contain" src={branchinfo.image} />
                  </UnstyledButton>
                </Tooltip>
              ))}
            </Stack>

            <Space h={80} />
          </Paper>
        </motion.div>
      </div>
    </>
  );
}
