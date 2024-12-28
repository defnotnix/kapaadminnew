import { configModule } from "./module.config";
import { moduleApiCall } from "@vsphere/core";

const { endpoint } = configModule;

export const getRecords = moduleApiCall.getRecords;
export const getSingleRecord = (body: any) =>
  moduleApiCall.getSingleRecord(endpoint, body);
export const createRecord = (body: any) =>
  moduleApiCall.createRecord(endpoint, body);
export const editRecord = (body: any, id: any) =>
  moduleApiCall.editRecord(endpoint, body, id);
export const deleteRecord = moduleApiCall.deleteRecord;
