import { appClient } from "./NetworkService";
import apiConfig from "../config/api";
import { hasError, hasSuccess } from "./ApiHelper";
import { GetIndividualPeopleList, GetPeopleList } from "redux/PeopleSlice/PeopleAsyncThunk";


export async function getPeople(payload: GetPeopleList) {
  try {
    const response = await appClient.get(
      apiConfig.endPoints.people +
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
export async function getIndividualPeople(payload: GetIndividualPeopleList) {
  try {
    const response = await appClient.get(
      apiConfig.endPoints.people + payload.id
    );
    return hasSuccess(response.data);
  } catch (error) {
    return hasError(error);
  }
}
