import { createSlice } from "@reduxjs/toolkit";
import { StarshipList } from "./StarshipTypes";
import {
  getIndividualStarshipActions,
  getStarshipActions,
} from "./StarshipAsyncThunk";
import constant from "../../config/constant";

const initialSpecificStarship = {
  name: "",
  model: "",
  starship_class: "",
  manufacturer: "",
  cost_in_credits: "",
  length: "",
  crew: "",
  passengers: "",
  max_atmosphering_speed: "",
  hyperdrive_rating: "",
  MGLT: "",
  cargo_capacity: "",
  consumables: "",
  films: [],
  pilots: [],
  url: "",
  created: "",
  edited: "",
};
const initialState: StarshipList = {
  list: [],
  isLoading: false,
  page: constant.page.defaultNumber,
  total: constant.page.defaultTotal,
  limit: constant.page.size,
  specificStarship: initialSpecificStarship,
};
const StarshipSlice = createSlice({
  name: "StarShip",
  initialState,
  reducers: {
    setCurrentPage(state, action) {
      state.page = action.payload;
    },
    resetSpecificStarship(state) {
      state.specificStarship = initialSpecificStarship;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getStarshipActions.pending, (state: StarshipList) => {
        state.isLoading = true;
      })
      .addCase(
        getStarshipActions.fulfilled,
        (state: StarshipList, { payload }) => {
          if (payload) {
            state.list = payload?.data;
            state.total = payload?.count;
          } else {
            state.list = [];
          }
          state.isLoading = false;
        }
      )
      .addCase(getStarshipActions.rejected, (state: StarshipList) => {
        state.isLoading = false;
      })
      .addCase(getIndividualStarshipActions.pending, (state: StarshipList) => {
        state.isLoading = true;
      })
      .addCase(
        getIndividualStarshipActions.fulfilled,
        (state: StarshipList, { payload }) => {
          if (payload) {
            state.specificStarship = payload?.data;
          } else {
            state.specificStarship = initialSpecificStarship;
          }
          state.isLoading = false;
        }
      )
      .addCase(getIndividualStarshipActions.rejected, (state: StarshipList) => {
        state.isLoading = false;
      });
  },
});
export const starshipReducer = StarshipSlice.reducer;
export const starshipAction = StarshipSlice.actions;
