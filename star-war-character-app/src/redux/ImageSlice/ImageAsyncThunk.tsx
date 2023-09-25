import { createAsyncThunk } from "@reduxjs/toolkit";
import constant from "config/constant";
import { getImage } from "service/imageService";


export interface GetImageList{
    id: number
}

export const getImageActions = createAsyncThunk(
    "image/getImageActions",
    async (payload: GetImageList, { dispatch, getState }) => {
      try {
        const response = await getImage(payload);
        if (response.status === constant.APIResponse.defaultStatusCode) {
          return {
            data: response?.data,
          }
        } else if (response.status === constant.APIResponse.errorStatusCode) {
          return response?.data?.message;
        }
      } catch (error) {
        return error;
      }
    }
  );