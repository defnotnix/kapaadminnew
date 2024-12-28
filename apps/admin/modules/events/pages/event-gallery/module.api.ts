import { configModule } from "./module.config";
import { moduleApiCall } from "@vsphere/core";

const endpoint_image = "/events/image/";

const apiEventGalleryImage = {
  getRecords: (id: any) =>
    moduleApiCall.getRecords({
      endpoint: endpoint_image,
      params: {
        event_id: id,
      },
    }),
  getSingleRecord: (id: any) =>
    moduleApiCall.getSingleRecord(endpoint_image, id),
  getDeleteRecord: (id: any) => moduleApiCall.deleteRecord(endpoint_image, id),
  createRecord: (body: any) => moduleApiCall.createRecord(endpoint_image, body),
  editRecord: (body: any, id: any) =>
    moduleApiCall.editRecord(endpoint_image, body, id),
  deleteRecord: (id: any) => moduleApiCall.deleteRecord(endpoint_image, id),
};

const endpoint_video = "/events/video/";

const apiEventGalleryVideo = {
  getRecords: (id: any) =>
    moduleApiCall.getRecords({
      endpoint: endpoint_video,
      params: {
        event_id: id,
      },
    }),
  getSingleRecord: (id: any) =>
    moduleApiCall.getSingleRecord(endpoint_video, id),
  getDeleteRecord: (id: any) => moduleApiCall.deleteRecord(endpoint_video, id),
  createRecord: (body: any) => moduleApiCall.createRecord(endpoint_video, body),
  editRecord: (body: any, id: any) =>
    moduleApiCall.editRecord(endpoint_video, body, id),
  deleteRecord: (id: any) => moduleApiCall.deleteRecord(endpoint_video, id),
};

export { apiEventGalleryImage, apiEventGalleryVideo };
