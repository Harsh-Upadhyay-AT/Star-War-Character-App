import { createSlice } from "@reduxjs/toolkit";
import { VehicleList } from "./Vehicletypes";
import {
  getIndividualVehicleActions,
  getVehicleActions,
} from "./VehicleAsyncThunk";
import constant from "../../config/constant";

const initialSpecificVehicle = {
  name: "string",
  model: "string",
  vehicle_class: "string",
  manufacturer: "string",
  length: "string",
  cost_in_credits: "string",
  crew: "string",
  passengers: "string",
  max_atmosphering_speed: "string",
  cargo_capacity: "string",
  consumables: "string",
  films: [],
  pilots: [],
  url: "string",
  created: "string",
  edited: "string",
};
const initialState: VehicleList = {
  list: [],
  isLoading: false,
  page: constant.page.defaultNumber,
  total: constant.page.defaultTotal,
  limit: constant.page.size,
  specificVehicle: initialSpecificVehicle,
};
const VehicleSlice = createSlice({
  name: "Vehicle",
  initialState,
  reducers: {
    setCurrentPage(state, action) {
      state.page = action.payload;
    },
    resetSpecificVehicle(state) {
      state.specificVehicle = initialSpecificVehicle;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getVehicleActions.pending, (state: VehicleList) => {
        state.isLoading = true;
      })
      .addCase(
        getVehicleActions.fulfilled,
        (state: VehicleList, { payload }) => {
          if (payload) {
            state.list = payload?.data;
            state.total = payload?.count;
          } else {
            state.list = [];
          }
          state.isLoading = false;
        }
      )
      .addCase(getVehicleActions.rejected, (state: VehicleList) => {
        state.isLoading = false;
      })
      .addCase(getIndividualVehicleActions.pending, (state: VehicleList) => {
        state.isLoading = true;
      })
      .addCase(
        getIndividualVehicleActions.fulfilled,
        (state: VehicleList, { payload }) => {
          if (payload) {
            state.specificVehicle = payload?.data;
          } else {
            state.specificVehicle = initialSpecificVehicle;
          }
          state.isLoading = false;
        }
      )
      .addCase(getIndividualVehicleActions.rejected, (state: VehicleList) => {
        state.isLoading = false;
      });
  },
});
export const vehicleReducer = VehicleSlice.reducer;
export const vehicleAction = VehicleSlice.actions;
