import { Icon } from "@phosphor-icons/react";

type AdminNavHeaderBread = {
  label?: string;
  url?: string;
};

type AdminNavHeaderNotification = any;

type AdminNavHeaderAnnouncement = any;

type AdminNavHeaderChat = any;

type AdminNavHeaderLayout = {
  withHeader?: boolean;
  headerShellProps?: any;
  sidenavWidth?: number;
  //announcements
  enableAnnouncement?: boolean;
  //notification
  enableNotification?: boolean;
  //chat
  enableChat?: boolean;
  enableSearch?: boolean;
};

type NavItemsChildren = {
  label: string;
  icon: Icon;
  url: string;
};

type NavItemsMainChildren = {
  group: string;
  childrens?: NavItemsChildren[];
};

type NavItems = {
  label: string;
  icon?: Icon;
  url?: string;
  description: string;
  color?: string;
  childrens?: NavItemsMainChildren[];
};

type ProfileMenuItems =
  | {
      label: "divider";
    }
  | {
      icon: Icon;
      label: string;
      url?: string;
      menuProps?: any;
    };

type AdminNavSidenavLayout = {
  withSidenav?: boolean;
  onBrandIconClick?: () => void;
  sidenavShellProps?: any;
  navItems: NavItems[];
  profileMenuItems?: ProfileMenuItems[];
  onProfileClick?: () => void;
  onLogout?: () => void;
};

type AdminNavLayoutShared = {
  organization?: {
    name: string;
    url: string;
  };
};

type AdminNavStyles = {
  classNames?: {
    root?: any;
    topnav?: any;
    sidenav?: any;
  };
};

type AdminNavLayout = {
  children: React.ReactNode;
  //Header

  //Sidenav
} & PropAdminNavHeaderLayout &
  AdminNavSidenavLayout &
  AdminNavLayoutShared &
  AdminNavStyles;

// Exports

export type PropAdminNavHeaderLayout = AdminNavHeaderLayout &
  AdminNavLayoutShared &
  AdminNavStyles;

export type PropAdminNavSidenavLayout = AdminNavSidenavLayout &
  AdminNavLayoutShared &
  AdminNavStyles;

export type PropAdminNavLayout = AdminNavLayout;

export type PropAdminNavLayoutNavItems = NavItems;

export type ProfileAdminNavLayoutProfileMenu = ProfileMenuItems;

export type PropAdminNavBread = AdminNavHeaderBread[];

export type PropAdminNavNotification = AdminNavHeaderNotification;
export type PropAdminNavAnnounement = AdminNavHeaderAnnouncement;
export type PropAdminNavChat = AdminNavHeaderChat;
