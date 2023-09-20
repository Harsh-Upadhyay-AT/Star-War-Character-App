import { createAsyncThunk } from "@reduxjs/toolkit";
import { getIndividualStarship, getStarship } from "../../service/StarshipService";
import constant from "../../config/constant";

export interface GetStarshipList {
  id?: number;
  page: number;
  size: number;
}
export interface GetIndividualStarshipList {
  id: number;
}

export const getStarshipActions = createAsyncThunk(
  "starship/getStarshipActions",
  async (payload: GetStarshipList, { dispatch, getState }) => {
    try {
      const response = await getStarship(payload);
      if (response.status === constant.APIResponse.defaultStatusCode) {
        return{ 
        data: response?.data?.results,
        count: response?.data?.count
      }
      } else if (response.status === constant.APIResponse.errorStatusCode) {
        return response?.data?.message;
      }
    } catch (error) {
      return error;
    }
  }
);
export const getIndividualStarshipActions = createAsyncThunk(
  "Individualstarship/getIndividualStarshipActions",
  async (payload: GetIndividualStarshipList, { dispatch, getState }) => {
    try {
      const response = await getIndividualStarship(payload);
      if (response.status === constant.APIResponse.defaultStatusCode) {
        return{ 
        data: response?.data
      }
      } else if (response.status === constant.APIResponse.errorStatusCode) {
        return response?.data?.message;
      }
    } catch (error) {
      return error;
    }
  }
);
