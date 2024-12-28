import { PropConfigModule } from "@vsphere/core";

export const configModule: PropConfigModule = {
  queryKey: ["admin", "clients"],
  moduleName: "Clients",
  endpoint: "/clients/info/",
  moduleDescription: {
    default: "Manage Clients",
    new: "Create a new Client.",
  },
  bread: [
    {
      label: "Classic Admin",
      url: "/",
    },
    {
      label: "Clients",
      url: "/clients",
    },
  ],
};
