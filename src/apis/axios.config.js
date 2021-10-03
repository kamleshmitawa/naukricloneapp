import axios from "axios";
import { getLocalStorage } from "../utils/utils";

const baseURL = process.env.REACT_APP_BASE_URL;
const axiosInstance = axios.create({
  baseURL,
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (error.response) {
      if (error.response.status === 401) {
        //show toast here if any error comes
        console.log(error?.response?.data?.message);
      }

      return Promise.reject(error?.response?.data);
    }
  }
);

const config = {
  headers: {
    "content-type": "application/json",
    authorization: `Bearer ${getLocalStorage("token")}`,
  },
};

export const axiosRequest = async (url, type, data = {}) => {
  try {
    // let response = {};
    console.log({ url, type, data });
    // response = await axiosInstance.post(url, data, config);

    // if (type === "GET") {
    //   response = await axiosInstance.get(url);
    // } else {
    let response = await axiosInstance[type](url, data, config);
    // }
    console.log({ response });
    return response?.data;
  } catch (error) {
    console.log(error, "axiosRequesterrorerror");
    return Promise.reject(error);
  }
};
