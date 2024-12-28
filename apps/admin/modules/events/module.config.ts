import { PropConfigModule } from "@vsphere/core";

export const configModule: PropConfigModule = {
  queryKey: ["admin", "events"],
  moduleName: "Events",
  endpoint: "/events/info/",
  moduleDescription: {
    default: "Manage Events",
    new: "Create a new Event.",
  },
  bread: [
    {
      label: "Classic Admin",
      url: "/",
    },
    {
      label: "Events",
      url: "/events",
    },
  ],
};
