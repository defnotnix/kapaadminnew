// @ts-nocheck

"use client";

import {
  Anchor,
  Center,
  Group,
  Space,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { usePathname } from "next/navigation";

import classes from "./navdrawer.module.css";
import cx from "clsx";

import { motion } from "framer-motion";
import { variantGeneralDelay } from "@/animation/variantGeneral";
import { AnimatedText } from "@/components/AnimatedText";
import { useRouter } from "next/navigation";

const baseurl = "/events";

export function LayoutEventNavDrawer({ open, close }: any) {
  const Router = useRouter();

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
      url: baseurl + "/events",
      label: "Projects",
    },
    {
      url: baseurl + "/contact",
      label: "Contact",
    },
    {
      url: baseurl + "/",
      label: "Classics Home",
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
      <section
        style={{
          width: "100vw",
          height: "90vh",
          position: "relative",
        }}
      >
        <Space h={160} />
        <Stack gap="xs" visibleFrom="lg">
          {navlinks.map((navlink, index) => (
            <Title
              style={{
                fontFamily: "var(--font-events-heading)",
              }}
              key={index}
              size="5rem"
              className={cx(classes.navlink, {
                [classes.active]: Pathname === navlink.url,
              })}
              onClick={() => {
                close();
                Router.push(navlink.url);
              }}
            >
              <AnimatedText text={navlink.label} />
            </Title>
          ))}
        </Stack>

        <Stack gap="xs" hiddenFrom="lg">
          {navlinks.map((navlink, index) => (
            <Title
              style={{
                fontFamily: "var(--font-events-heading)",
              }}
              key={index}
              size="3rem"
              className={cx(classes.navlink, {
                [classes.active]: Pathname === navlink.url,
              })}
              onClick={() => {
                close();
                Router.push(navlink.url);
              }}
            >
              <AnimatedText text={navlink.label} />
            </Title>
          ))}
        </Stack>

        <div className={classes.socials}>
          <Text ta="center" size="xs" opacity={0.3}>
            Follow us on social media
          </Text>
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
      </section>
    </>
  );
}
