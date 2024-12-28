import { PropConfigModule } from "@vsphere/core";

export const configModule: PropConfigModule = {
  queryKey: ["admin", "event-category"],
  moduleName: "Event Category",
  endpoint: "/events/category/",
  moduleDescription: {
    default: "Manage sub-company Portfolio",
    new: "Create a new Company.",
  },
  bread: [
    {
      label: "Classic Admin",
      url: "/",
    },
    {
      label: "Hours",
      url: "/hours",
    },
  ],
};
