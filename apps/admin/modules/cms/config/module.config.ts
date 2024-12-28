import { PropConfigModule } from "@vsphere/core";

export const configModule: PropConfigModule = {
  queryKey: ["admin", "event-cms-config"],
  moduleName: "CMS-Config",
  endpoint: "/cms/content/",
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
      label: "CMS-Config",
      url: "/cmsconfig",
    },
  ],
};
