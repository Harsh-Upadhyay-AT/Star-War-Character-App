import { createSlice } from "@reduxjs/toolkit";
import {  getIndividualPlanetActions, getPlanetActions } from "./PlanetAsyncThunk";
import constant from "../../config/constant";
import { PlanetList } from "./PlanetsType";

const initialSpecificPlanet ={
  name: "",
  diameter: "",
  rotation_period: "",
  orbital_period: "",
  gravity: "",
  population: "",
  climate: "",
  terrain: "",
  surface_water: "",
  residents: [],
  films: [],
  url: "",
  created: "",
  edited: "",
}


const initialState: PlanetList = {
  list: [],
  isLoading: false,
  page: constant.page.defaultNumber,
  total: constant.page.defaultTotal,
  limit: constant.page.size,
  specificPlanet: initialSpecificPlanet
};


const PlanetSlice = createSlice({
  name: "Film",
  initialState,
  reducers: {
    setCurrentPage(state, action) {
      state.page = action.payload
    },
    resetSpecificPlanet(state){
      state.specificPlanet = initialSpecificPlanet
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPlanetActions.pending, (state: PlanetList) => {
        state.isLoading = true;
      })
      .addCase(getPlanetActions.fulfilled, (state: PlanetList, { payload }) => {
        if (payload) {
          state.list = payload?.data;
          state.total = payload?.count;
        } else {
          state.list = [];
        }
        state.isLoading = false;
      })
      .addCase(getPlanetActions.rejected, (state: PlanetList) => {
        state.isLoading = false;
      })
      .addCase(getIndividualPlanetActions.pending, (state: PlanetList) => {
        state.isLoading = true;
      })
      .addCase(getIndividualPlanetActions.fulfilled, (state: PlanetList, { payload }) => {
        if (payload) {
          state.specificPlanet = payload?.data;
        } else {
          state.specificPlanet = initialSpecificPlanet;
        }
        state.isLoading = false;
      })
      .addCase(getIndividualPlanetActions.rejected, (state: PlanetList) => {
        state.isLoading = false;
      });
  },
});
export const planetReducer = PlanetSlice.reducer;
export const planetAction = PlanetSlice.actions;
