"use client";

import {
  Anchor,
  Center,
  Drawer,
  Group,
  Image,
  SimpleGrid,
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
import { useCelebrationContext } from "../celebration.context";

const baseurl = "/celebrations";

export function LayoutCelebrationNavDrawer() {
  const Router = useRouter();

  const { state, dispatch } = useCelebrationContext();
  const { navStatus } = state;

  const close = () => {
    dispatch({
      type: "SET_NAV_STATUS",
      payload: false,
    });
  };

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
      <Drawer
        opened={navStatus}
        position="top"
        size="100%"
        onClose={close}
        withCloseButton={false}
        transitionProps={{
          transition: "fade",
          duration: 150,
        }}
        styles={{
          content: {
            background: "var(--color-celebrations-primary-200)",
          },
          header: {
            background: "var(--color-celebrations-primary-200)",
          },
          inner: {
            background: "var(--color-celebrations-primary-200)",
          },
          body: {
            padding: 0,
          },
        }}
      >
        <section
          style={{
            width: "100vw",
            height: "90vh",
            position: "relative",
          }}
        >
          <SimpleGrid cols={2}>
            <Image
              style={{
                filter: "brightness(.5)",
              }}
              h="100vh"
              src="https://images.unsplash.com/photo-1555447405-057915b40299?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <div style={{ position: "relative" }}>
              <Space h={160} />
              <Stack gap="xs" visibleFrom="lg">
                {navlinks.map((navlink, index) => (
                  <Title
                    fw={700}
                    style={{
                      fontFamily: "var(--font-celebrations-heading)",
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
                      fontFamily: "var(--font-celebrations-heading)",
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
            </div>
          </SimpleGrid>
        </section>
      </Drawer>
    </>
  );
}
