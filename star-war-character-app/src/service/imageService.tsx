import imageApiClient from "./NetworkService";
import apiConfig from "../config/api";
import { hasError, hasSuccess } from "./ApiHelper";
import { GetImageList } from "redux/ImageSlice/ImageAsyncThunk";


export async function getImage(payload: GetImageList) {
  try {
    const response = await imageApiClient.get(apiConfig.imageEndPoint);
    return hasSuccess(response.data);
  } catch (error) {
    return hasError(error);
  }
}
