import { createSlice } from "@reduxjs/toolkit";
import { getIndividualSpeciesActions, getSpeciesActions } from "./SpeciesAsyncThunk";
import { SpeciesList } from "./SpeciesType";
import constant from "config/constant";

const initialSpecificSpecies ={
  name: "",
  classification: "",
  designation: "",
  average_height: "",
  average_lifespan: "",
  eye_colors: "",
  hair_colors: "",
  skin_colors: "",
  language: "",
  homeworld: "",
  people: [],
  films: [],
  url: "",
  created: "",
  edited: "",
}
const initialState: SpeciesList = {
  list: [],
  isLoading: false,
  page: constant.page.defaultNumber,
  total: constant.page.defaultTotal,
  limit: constant.page.size,
  specificSpecies: initialSpecificSpecies
};
const SpeciesSlice = createSlice({
  name: "species",
  initialState,
  reducers: {
    setCurrentPage(state, action) {
      state.page = action.payload
    },
    resetSpecificSpecies(state){
      state.specificSpecies = initialSpecificSpecies
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSpeciesActions.pending, (state: SpeciesList) => {
        state.isLoading = true;
      })
      .addCase(
        getSpeciesActions.fulfilled,
        (state: SpeciesList, { payload }) => {
          if (payload) {
            state.list = payload?.data;
            state.total = payload?.count
          } else {
            state.list = [];
          }
          state.isLoading = false;
        }
      )
      .addCase(getSpeciesActions.rejected, (state: SpeciesList) => {
        state.isLoading = false;
      })
      .addCase(getIndividualSpeciesActions.pending, (state: SpeciesList) => {
        state.isLoading = true;
      })
      .addCase(
        getIndividualSpeciesActions.fulfilled,
        (state: SpeciesList, { payload }) => {
          if (payload) {
            state.specificSpecies = payload?.data;
          } else {
            state.specificSpecies = initialSpecificSpecies;
          }
          state.isLoading = false;
        }
      )
      .addCase(getIndividualSpeciesActions.rejected, (state: SpeciesList) => {
        state.isLoading = false;
      });
  },
});
export const speciesReducer = SpeciesSlice.reducer;
export const speciesAction = SpeciesSlice.actions;
