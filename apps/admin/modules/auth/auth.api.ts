import { apiDispatch } from "@vsphere/core";

const endpoint = "/authenticate/login/";

export async function apiLogin(body: {
    username: string;
    password: string;
}) {
    return await apiDispatch.post({
        url: "/authenticate/login/",
        body,
    });
}
