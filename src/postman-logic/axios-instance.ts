import axios from "axios";

export const AxiosInstance = (baseUrl: string): string => {
  return `
  import axios from "axios";
  const request = axios.create({
    baseURL:"${baseUrl}"
  });`;
};
