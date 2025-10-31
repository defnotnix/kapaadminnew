import axios from "axios";
import { get, post, patch, del } from "../apiDispatch";
//apis

async function handleTokenExpiry() {
  const res = await axios
    .post(
      "/authenticate/refresh/token/",
      {},
      {
        headers: {
          Authorization: "Congobongo " + sessionStorage.getItem("sswtoken"),
        },
      }
    )
    .then((e) => {
      console.log(e);
      sessionStorage.setItem("sswtoken", e?.headers?.xauthorization);
      return true;
    })
    .catch((err) => {
      console.log(err);
      return false;
    });

  console.log("Token Expired, Calling Refresh Token");

  return res;
}

async function getRecords({
  endpoint,
  searchValue = "",
  page,
  pageSize,
  params,
  ...props
}: {
  endpoint: string;
  searchValue?: string;
  page?: number;
  pageSize?: number;
  params?: any;
}) {
  const res: any = await get({
    url: endpoint,
    params: params,
  });
  return res.err ? [] : res.data;
}

async function getSingleRecord(endpoint: string, id: any): Promise<any> {
  try {
    const res: any = await get({
      url: endpoint + id + "/",
    });
    return res.err ? [] : res.data;
  } catch (error: any) {
    let err: any = new Error("Error");

    if (error?.response?.data?.detail == "Access Token Expired") {
      const res = await handleTokenExpiry();

      if (res) {
        return await getSingleRecord(endpoint, id);
      } else {
        throw err;
      }
    } else {
      err.object = error;
      throw err;
    }
  }
}

async function createRecord(endpoint: string, body: any): Promise<any> {
  const isFormData = body instanceof FormData;
  console.log(isFormData);

  try {
    return await post({
      url: endpoint,
      body: body,
      headers: isFormData
        ? {}
        : {
            "Content-Type": "application/json",
          },
    });
  } catch (error: any) {
    let err: any = new Error("Error");

    if (error?.response?.data?.detail == "Access Token Expired") {
      const res = await handleTokenExpiry();

      if (res) {
        return await createRecord(endpoint, body);
      } else {
        throw err;
      }
    } else {
      err.object = error;
      throw err;
    }
  }
}

// async function createJSONRecord(endpoint: string, body: any): Promise<any> {
//   return await post({
//     url: endpoint,
//     body: body,
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
// }

async function editRecord(endpoint: string, body: any, id: any): Promise<any> {
  const isFormData = body instanceof FormData;

  try {
    return await patch({
      url: endpoint + id + "/",
      body: body,
      headers: isFormData
        ? {}
        : {
            "Content-Type": "application/json",
          },
    });
  } catch (error: any) {
    let err: any = new Error("Error");

    if (error?.response?.data?.detail == "Access Token Expired") {
      const res = await handleTokenExpiry();

      if (res) {
        return await editRecord(endpoint, body, id);
      } else {
        throw err;
      }
    } else {
      err.object = error;
      throw err;
    }
  }
}

async function deleteRecord(endpoint: string, body: any): Promise<any> {
  try {
    return await del({
      url: endpoint,
      id: body,
    });
  } catch (error: any) {
    let err: any = new Error("Error");

    if (error?.response?.data?.detail == "Access Token Expired") {
      const res = await handleTokenExpiry();

      if (res) {
        return await deleteRecord(endpoint, body);
      } else {
        throw err;
      }
    } else {
      err.object = error;
      throw err;
    }
  }
}

export const moduleApiCall = {
  getRecords,
  getSingleRecord,
  createRecord,
  editRecord,
  deleteRecord,
  //   createJSONRecord,
};
