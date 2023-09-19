import { hasError, hasSuccess } from "./ApiHelper";
import { appClient } from "./NetworkService";
import apiConfig from "../config/api";
import { GetFilmList, GetIndividualFilmList } from "../redux/FilmSlice/FilmAsyncThunk";

export async function getFilm(payload: GetFilmList) {
    try {
      const response = await appClient.get(apiConfig.endPoints.film + "?page=" + payload.page + "&size=" + payload.size );
      return hasSuccess(response.data);
    } catch (error) {
      return hasError(error);
    }
  }
  export async function getIndividualFilm(payload: GetIndividualFilmList) {
    try {
      const response = await appClient.get(apiConfig.endPoints.film + payload.id );
      return hasSuccess(response.data);
    } catch (error) {
      return hasError(error);
    }
  }

