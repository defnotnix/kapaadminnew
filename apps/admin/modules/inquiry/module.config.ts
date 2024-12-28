import { PropConfigModule } from "@vsphere/core";

export const configModule: PropConfigModule = {
  queryKey: ["admin", "inquiry"],
  moduleName: "Inquiry",
  endpoint: "/inquiry/time/",
  moduleDescription: {
    default: "Manage sub-inquiry Portfolio",
    new: "Create a new Inquiry.",
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
