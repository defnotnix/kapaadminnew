import { configModule } from "./module.config";
import { moduleApiCall } from "@vsphere/core"

const { endpoint } = configModule

export const getRecords = moduleApiCall.getRecords
export const getSingleRecord = moduleApiCall.getSingleRecord
export const createRecord = moduleApiCall.createRecord
export const editRecord = moduleApiCall.editRecord
export const deleteRecord = moduleApiCall.deleteRecord