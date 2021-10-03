import axios from "axios";
import { routePath } from "../routes/routePath";
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

export const axiosRequest = async (url, type, history, data = undefined) => {
  try {
    let response = {};
    console.log({ url, type, token: getLocalStorage("token"), config });

    if (data) {
      response = await axiosInstance[type](url, data, config);
    } else {
      response = await axiosInstance.get(url, config);
    }
    console.log({ response });
    return response?.data;
  } catch (error) {
    console.log(error, "axiosRequesterrorerror");
    if (error.code === 401) {
      // history.push(routePath.login)
    }
    return Promise.reject(error);
  }
};
