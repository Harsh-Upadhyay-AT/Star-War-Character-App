import { createAsyncThunk } from "@reduxjs/toolkit";
import constant from "config/constant";
import { getIndividualSpecies, getSpecies } from "service/SpeciesService";


export interface GetSpeciesList {
  id?: number;
  page: number;
  size: number;
}

export interface GetIndividualSpeciesList{
  id: number
}

export const getSpeciesActions = createAsyncThunk(
  "species/getSpeciesActions",
  async (payload: GetSpeciesList, { dispatch, getState }) => {
    try {
      const response = await getSpecies(payload);
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
export const getIndividualSpeciesActions = createAsyncThunk(
  "individualSpecies/getIndividualSpeciesActions",
  async (payload: GetIndividualSpeciesList, { dispatch, getState }) => {
    try {
      const response = await getIndividualSpecies(payload);
      if (response.status === constant.APIResponse.defaultStatusCode) {
        return {
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
