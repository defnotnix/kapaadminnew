import { PropConfigModule } from "@vsphere/core";

export const configModule: PropConfigModule = {
  queryKey: ["admin", "client-invoice"],
  moduleName: "Client Invoices",
  endpoint: "/clients/invoice/",
  moduleDescription: {
    default: "Manage sub-client Portfolio",
    new: "Create a new Invoice.",
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
