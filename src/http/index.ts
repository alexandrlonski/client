import axios, { AxiosRequestConfig, AxiosRequestHeaders } from "axios";

const $host = axios.create({
  baseURL: "http://localhost:7011/",
});

const $authHost = axios.create({
  baseURL: "http://localhost:7011/",
});

const authInterceptor = (config: AxiosRequestConfig): AxiosRequestConfig => {
  const headers: AxiosRequestHeaders = config.headers || {};
  headers.authorization = `Bearer ${localStorage.getItem("token")}`;
  config.headers = headers;

  return config;
};

$authHost.interceptors.request.use(authInterceptor);

export { $host, $authHost };
