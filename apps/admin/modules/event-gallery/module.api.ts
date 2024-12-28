import { configModule } from "./module.config";
import { moduleApiCall } from "@vsphere/core";

export const apiEventImages = () => {
  const endpoint = "/events/image/";

  const getRecords = moduleApiCall.getRecords;

  const getSingleRecord = (id: any) =>
    moduleApiCall.getSingleRecord(endpoint, id);
  const deleteRecord = moduleApiCall.deleteRecord;
  const createRecord = (body: any) =>
    moduleApiCall.createRecord(endpoint, body);
  const editRecord = (body: any, id: any) =>
    moduleApiCall.editRecord(endpoint, body, id);

  return {
    getRecords,
    getSingleRecord,
    deleteRecord,
    createRecord,
    editRecord,
  };
};

export const apiEventGallery = () => {
  const endpoint = "/events/video/";

  const getRecords = moduleApiCall.getRecords;

  const getSingleRecord = (id: any) =>
    moduleApiCall.getSingleRecord(endpoint, id);
  const deleteRecord = moduleApiCall.deleteRecord;
  const createRecord = (body: any) =>
    moduleApiCall.createRecord(endpoint, body);
  const editRecord = (body: any, id: any) =>
    moduleApiCall.editRecord(endpoint, body, id);

  return {
    getRecords,
    getSingleRecord,
    deleteRecord,
    createRecord,
    editRecord,
  };
};
