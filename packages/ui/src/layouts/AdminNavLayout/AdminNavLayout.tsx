"use client";

import {} from "react";
//mantine
import { AppShell } from "@mantine/core";
import { AdminNavLayoutHeader } from "./components/Header/AdminNavLayout.Header";
import { AdminNavLayoutSideNav } from "./components/SideNav/AdminNavLayout.Sidenav";
import { PropAdminNavLayout } from "./AdminNavLayout.type";
//styles
import cx from "clsx";
import classes from "./AdminNavLayout.module.css";
import { useDisclosure } from "@mantine/hooks";
import { AdminNavLayoutContext } from "./AdminNavLayout.context";
//context

export function AdminNavLayout({
  children,
  // > Header
  withHeader,
  headerShellProps = {},
  //actions
  enableAnnouncement,
  enableNotification,
  enableChat,
  enableSearch,

  // > Sidenav
  onBrandIconClick = () => {},
  withSidenav,
  sidenavShellProps = {},
  navItems = [],
  profileMenuItems = [],
  // > Styles
  classNames = {},
  // > Shared
  organization,
}: PropAdminNavLayout) {
  return (
    <>
      <AdminNavLayoutContext>
        <AppShell
          className={cx(classes.root, classNames?.root)}
          navbar={sidenavShellProps}
          //header={headerShellProps}
        >
          <AdminNavLayoutHeader
            organization={organization}
            withHeader={withHeader}
            headerShellProps={headerShellProps}
            sidenavWidth={sidenavShellProps?.width || 300}
            enableAnnouncement={enableAnnouncement}
            enableNotification={enableNotification}
            enableChat={enableChat}
          />
          <AdminNavLayoutSideNav
            onBrandIconClick={onBrandIconClick}
            organization={organization}
            withSidenav={withSidenav}
            sidenavShellProps={sidenavShellProps}
            navItems={navItems}
            profileMenuItems={profileMenuItems}
            //styles
            classNames={classNames}
          />
          <AppShell.Main pt={headerShellProps?.height}>
            {children}
          </AppShell.Main>
        </AppShell>
      </AdminNavLayoutContext>
    </>
  );
}
