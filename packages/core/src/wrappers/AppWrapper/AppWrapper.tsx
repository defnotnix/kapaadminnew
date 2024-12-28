"use client";

//mantine
import {
  ColorSchemeScript,
  MantineProvider,
  useMantineColorScheme,
} from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { Notifications } from "@mantine/notifications";
//@mantine-styles
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/spotlight/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/notifications/styles.css";
//datatable
import "mantine-datatable/styles.css";
//props
import { PropAppWrapper } from "./AppWrapper.type";
//clsx
import cx from "clsx";
//styles
import classes from "./AppWrapper.module.css";

export function AppWrapper({
  children,
  theme,
  defaultColorScheme,
  title,
  classNames,
}: PropAppWrapper) {
  // * Color Scheme

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ColorSchemeScript
          nonce="8IBTHwOdqNKAWeKl7plt8g=="
          defaultColorScheme={defaultColorScheme}
        />
        <title>{title}</title>
      </head>
      <body
        className={cx(classes.root, {
          [classNames.body]: classNames.body,
        })}
      >
        <MantineProvider theme={theme} defaultColorScheme={defaultColorScheme}>
          <ModalsProvider>
            <Notifications />
            {children}
          </ModalsProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
