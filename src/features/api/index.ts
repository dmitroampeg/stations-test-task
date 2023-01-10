import axios, { AxiosError, AxiosInstance } from "axios";

const DOMAIN = "https://reqres.in";

const API: AxiosInstance = axios.create({
  baseURL: `${DOMAIN}/api/`,
});

API.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    error.config = error.config ?? {};

    console.log(JSON.stringify(error.response?.data));

    if (error.response?.status === 401) {
      alert("You got logged out, try to login again");
    }

    return Promise.reject(error);
  }
);

export default API;
