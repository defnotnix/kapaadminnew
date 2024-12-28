import { PropConfigModule } from "@vsphere/core";

export const configModule: PropConfigModule = {
    queryKey: ["admin", "testimonials"],
    moduleName: "Company Testimonials",
    endpoint: "/company/testimonials/",
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
