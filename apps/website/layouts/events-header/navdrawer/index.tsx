"use client";

import { Anchor, Center, Group, Space, Stack, Title } from "@mantine/core";
import { usePathname } from "next/navigation";

import classes from "./navdrawer.module.css";
import cx from "clsx";

import { motion } from "framer-motion";
import { variantGeneralDelay } from "@/animation/variantGeneral";
import { AnimatedText } from "@/components/AnimatedText";

const baseurl = "/celebrations";

export function LayoutCelebrationNavDrawer({ open, close }: any) {
  const navlinks = [
    {
      url: baseurl + "",
      label: "Home",
    },
    {
      url: baseurl + "/about",
      label: "About",
    },
    {
      url: baseurl + "/projects",
      label: "Projects",
    },
    {
      url: baseurl + "/contact",
      label: "Contact",
    },
    {
      url: baseurl + "/socials",
      label: "Socials",
    },
  ];

  const socialLinks = [
    { label: "Instagram", url: "https://instagram.com" },
    { label: "Facebook", url: "https://facebook.com" },
    { label: "X", url: "https://twitter.com" }, // Adjusted "X" to link to Twitter
    { label: "LinkedIn", url: "https://linkedin.com" },
    { label: "Youtube", url: "https://youtube.com" },
    { label: "Whatsapp", url: "https://whatsapp.com" },
  ];

  const Pathname = usePathname();

  return (
    <>
      <Space h={160} />
      <Stack gap="xs">
        {navlinks.map((navlink, index) => (
          <Title
            style={{
              fontFamily: "Made Mirage",
            }}
            key={index}
            size="5rem"
            className={cx(classes.navlink, {
              [classes.active]: Pathname === navlink.url,
            })}
          >
            <AnimatedText text={navlink.label} />
          </Title>
        ))}
      </Stack>

      <div className={classes.socials}>
        <Group pb="xl" justify="center">
          {socialLinks.map((socialLink, index) => (
            <motion.div
              variants={variantGeneralDelay(0.1 * index)}
              key={index}
              initial="initial"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              <Anchor
                c="dark.9"
                size="xs"
                href={socialLink.url}
                className={classes.social}
                onClick={() => {
                  close();
                }}
              >
                {socialLink.label}
              </Anchor>
            </motion.div>
          ))}
        </Group>
      </div>
    </>
  );
}
