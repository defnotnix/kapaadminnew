import { PropConfigModule } from "@vsphere/core";

export const configModule: PropConfigModule = {
    queryKey: ["admin", "company-hours"],
    moduleName: "Company Hours",
    endpoint: "/company/time/",
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
