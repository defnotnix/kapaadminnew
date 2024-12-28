import { apiDispatch } from "@vsphere/core";

export const getRecords = async () =>
  apiDispatch.get({
    url: "/cms/content/",
  });
