import { appClient } from "./NetworkService";
import apiConfig from "../config/api";
import { hasError, hasSuccess } from "./ApiHelper";
import { GetIndividualVehicleList, GetVehicleList } from "../redux/VehicleSlice/VehicleAsyncThunk";

export async function getVehicle(payload: GetVehicleList) {
  try {
    const response = await appClient.get(apiConfig.endPoints.vehicle + "?page=" + payload.page + "&size=" + payload.size);
    return hasSuccess(response.data);
  } catch (error) {
    return hasError(error);
  }
}
export async function getIndividualVehicle(payload: GetIndividualVehicleList) {
  try {
    const response = await appClient.get(apiConfig.endPoints.vehicle + payload.id);
    return hasSuccess(response.data);
  } catch (error) {
    return hasError(error);
  }
}