import { appClient } from "./NetworkService";
import apiConfig from "../config/api";
import { hasError, hasSuccess } from "./ApiHelper";
import { GetIndividualPlanetList, GetPlanetList } from "redux/PlanetsSlice/PlanetAsyncThunk";


export async function getPlanet(payload: GetPlanetList) {
  try {
    const response = await appClient.get(
      apiConfig.endPoints.planets +
        "?page=" +
        payload.page +
        "&size=" +
        payload.size
    );
    return hasSuccess(response.data);
  } catch (error) {
    return hasError(error);
  }
}

export async function getIndividualPlanet(payload: GetIndividualPlanetList) {
  try {
    const response = await appClient.get(
      apiConfig.endPoints.planets + payload.id
    );
    return hasSuccess(response.data);
  } catch (error) {
    return hasError(error);
  }
}
