import { appClient } from "./NetworkService";
import apiConfig from "../config/api";
import { hasError, hasSuccess } from "./ApiHelper";
import { GetIndividualStarshipList, GetStarshipList } from "../redux/StarshipSlice/StarshipAsyncThunk";

export async function getStarship(payload: GetStarshipList) {
  try {
    const response = await appClient.get(apiConfig.endPoints.starShip + "?page=" + payload.page + "&size=" + payload.size);
    return hasSuccess(response.data);
  } catch (error) {
    return hasError(error);
  }
}

export async function getIndividualStarship(payload: GetIndividualStarshipList) {
  try {
    const response = await appClient.get(apiConfig.endPoints.starShip + payload.id);
    return hasSuccess(response.data);
  } catch (error) {
    return hasError(error);
  }
}