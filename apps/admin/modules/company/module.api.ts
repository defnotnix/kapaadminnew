import { configModule } from "./module.config";
import { moduleApiCall } from "@vsphere/core";

const { endpoint } = configModule;

export const getRecords = moduleApiCall.getRecords;
export const getSingleRecord = moduleApiCall.getSingleRecord;
export const deleteRecord = moduleApiCall.deleteRecord;
export const createRecord = (body: any) =>
  moduleApiCall.createRecord(endpoint, body);
