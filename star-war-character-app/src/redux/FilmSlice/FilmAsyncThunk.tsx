import { createAsyncThunk } from "@reduxjs/toolkit";
import constant from "config/constant";
import { getFilm, getIndividualFilm } from "service/filmService";


export interface GetFilmList {
  id?: number;
  page: number;
  size: number;
}

export interface GetIndividualFilmList {
  id: number;
}
export const getFilmActions = createAsyncThunk(
  "film/getFilmAction",
  async (payload: GetFilmList, { dispatch, getState }) => {
    try {
      const response = await getFilm(payload);
      if (response.status === constant.APIResponse.defaultStatusCode) {
        return {
          data: response?.data?.results,
        };
      } else if (response.status === constant.APIResponse.errorStatusCode) {
        return response?.data?.message;
      }
    } catch (error) {
      return error;
    }
  }
);

export const getIndividualFilmActions = createAsyncThunk(
  "IndividualFilm/getIndividualFilmAction",
  async (payload: GetIndividualFilmList, { dispatch, getState }) => {
    try {
      const response = await getIndividualFilm(payload);
      if (response.status === constant.APIResponse.defaultStatusCode) {
        return {
          data: response?.data,
        };
      } else if (response.status === constant.APIResponse.errorStatusCode) {
        return response?.data?.message;
      }
    } catch (error) {
      return error;
    }
  }
);
