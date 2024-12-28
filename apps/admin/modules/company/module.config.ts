import { PropConfigModule } from "@vsphere/core";

export const configModule: PropConfigModule = {
    queryKey: ["admin", "company"],
    moduleName: "Company",
    endpoint: "/company/about/",
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
            label: "Projects",
            url: "/projects",
        },
    ],
};
