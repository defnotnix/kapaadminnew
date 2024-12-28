"use client";

import { PropsWithChildren } from "react";
//mantine
import {} from "@mantine/core";
//@vsphere
import { AdminNavLayout } from "@vsphere/ui";
//icons
import { CreditCard, GearSix, User } from "@phosphor-icons/react";
//vsphere
import { ProfileAdminNavLayoutProfileMenu } from "@vsphere/ui";
//config
import { navItems } from "@/config/nav/nav.main";

import { useRouter } from "next/navigation";

const profileMenu: ProfileAdminNavLayoutProfileMenu[] = [
  {
    icon: User,
    label: "My Profile",
    url: "",
  },
  {
    icon: GearSix,
    label: "Settings",
    url: "",
  },
  {
    icon: CreditCard,
    label: "Subscription",
    url: "",
  },
  {
    label: "divider",
  },
  {
    icon: User,
    label: "Changelog",
    url: "",
  },
  {
    icon: GearSix,
    label: "Team",
    url: "",
  },
  {
    icon: CreditCard,
    label: "Invite Member",
    url: "",
  },
];

export function LayoutAdmin({ children }: PropsWithChildren) {
  // * DEFINITON

  const Router = useRouter();

  // * STATE

  // * METHODS

  // * FUNCTIONS

  // * COMPONENTS

  return (
    <AdminNavLayout
      // > Header
      headerShellProps={{
        height: 50,
      }}
      // * Announcement
      enableAnnouncement
      // * Notification
      enableNotification
      // * Chat
      enableChat
      // > Sidenav
      onBrandIconClick={() => {
        Router.push("/");
      }}
      sidenavShellProps={{
        width: 300,
        breakpoint: "sm",
      }}
      navItems={navItems}
      profileMenuItems={profileMenu}
      onProfileClick={() => {
        // ... profileclickactions
      }}
      onLogout={() => {
        // ... logoutclickactions
      }}
      // > config
      organization={{
        name: "VSphere",
        url: "/",
      }}
    >
      {children}
    </AdminNavLayout>
  );
}
