import axios from "axios";
import appConfig from "../config/config";

const defaultHeaders = {
  "content-Type": "application/json",
};
const appClient = axios.create({
  baseURL: appConfig.apiUrl,
  timeout: 40000,
  headers: defaultHeaders,
});
export { appClient };

const imageApiClient = axios.create({
  baseURL: appConfig.imageUrl,
  timeout: 40000,
  headers: {
    ...defaultHeaders,
  },
});
export default imageApiClient;
