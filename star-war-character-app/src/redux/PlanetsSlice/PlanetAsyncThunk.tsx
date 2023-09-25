import { createAsyncThunk } from "@reduxjs/toolkit";
import constant from "config/constant";
import { getIndividualPlanet, getPlanet } from "service/PlanetService";


export interface GetPlanetList {
  id?: number;
  page: number
  size: number;
}

export interface GetIndividualPlanetList{
  id: number
}

export const getPlanetActions = createAsyncThunk(
  "planet/getPlanetActions",
  async (payload: GetPlanetList, { dispatch, getState }) => {
    try {
      const response = await getPlanet(payload);
      if (response.status === constant.APIResponse.defaultStatusCode) {
        return {
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
export const getIndividualPlanetActions = createAsyncThunk(
  "individualPlanet/getIndividualPlanetActions",
  async (payload: GetIndividualPlanetList, { dispatch, getState }) => {
    try {
      const response = await getIndividualPlanet(payload);
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
