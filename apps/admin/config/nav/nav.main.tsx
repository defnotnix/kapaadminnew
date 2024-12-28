import {
  ArrowLeft,
  Bell,
  Book,
  Graph,
  GearSix,
  Building,
  Folder,
  Monitor,
  Calculator,
  CashRegister,
  ChartDonut,
  ChartPie,
  Cube,
  House,
  IdentificationBadge,
  Key,
  Lock,
  Money,
  Package,
  Planet,
  RadioButton,
  ShoppingBag,
  Storefront,
  Tree,
  Truck,
  Users,
  Warehouse,
  Wrench,
  BuildingOffice,
  User,
  Clock,
  GoogleCardboardLogo,
  MoneyWavy,
  TestTube,
  Confetti,
  SquareHalf,
  Chat,
  PictureInPicture,
  Lightbulb,
  ChatCentered,
  Lego,
  Code,
} from "@phosphor-icons/react";

export const navItemAuthentication = {
  label: "Web-Core",
  icon: Key,
  url: "/admin",
  importUrl: "@/framework/modules",
  description:
    "Manage user authentication, roles, and permissions for the application.",
  color: "brand",
  childrens: [
    {
      group: "Essentials",
      childrens: [
        {
          label: "Company Management",
          url: "/company",
          icon: BuildingOffice,
        },
      ],
    },
    {
      group: "Events Management",
      childrens: [
        {
          label: "Events",
          url: "/event",
          icon: Confetti,
        },
        {
          label: "Event Categories",
          url: "/event-category",
          icon: SquareHalf,
        },
      ],
    },
    {
      group: "Client Management",
      childrens: [
        {
          label: "Clients",
          url: "/clients",
          icon: Users,
        },
        {
          label: "Client Categories",
          url: "/client-category",
          icon: SquareHalf,
        },
        {
          label: "Inquiry",
          url: "/inquiry",
          icon: Users,
        },
      ],
    },

    {
      group: "Logs & System",
      childrens: [
        {
          label: "Activity Logs",
          url: "/logs",
          icon: Clock,
        },
        {
          label: "System Details",
          url: "/logs",
          icon: Lightbulb,
        },
      ],
    },
  ],
};

export const navItems = [
  {
    ...navItemAuthentication,
  },
  {
    label: "Web CMS",
    icon: Lego,
    url: "/cms",
    importUrl: "@/framework/modules",
    description:
      "Manage user authentication, roles, and permissions for the application.",
    color: "indigo",
  },
  {
    label: "Deeloper Config",
    icon: Code,
    url: "/code",
    importUrl: "@/framework/modules",
    description:
      "Manage user authentication, roles, and permissions for the application.",
    color: "teal",
  },
];
