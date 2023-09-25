import { createSlice } from "@reduxjs/toolkit";
import { PeopleList } from "./PeopleType";
import { getIndividualPeopleActions, getPeopleActions } from "./PeopleAsyncThunk";
import constant from "config/constant";


const initialSpecificPerson = {
    url: "",
    id: 0,
    name: "",
    height: 0,
    mass: 0,
    hair_color: "",
    skin_color: "",
    eye_color: "",
    birth_year: "",
    gender: "",
    homeworld: "",
    created: "",
    edited: "",
    films: [],
    species: []
}
const initialState: PeopleList = {
  list: [],
  isLoading: false,
  page: constant.page.defaultNumber,
  total: constant.page.defaultTotal,
  limit: constant.page.size,
  specificPerson: initialSpecificPerson
};
const PeopleSlice = createSlice({
  name: "people",
  initialState,
  reducers: {
    setCurrentPage(state, action) {
      state.page = action.payload
    },
    resetSpecificPerson(state) {
      state.specificPerson = initialSpecificPerson
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPeopleActions.pending, (state: PeopleList) => {
        state.isLoading = true;
      })
      .addCase(
        getPeopleActions.fulfilled,
        (state: PeopleList, { payload }) => {
          if (payload) {
            state.list = payload?.data;
            state.total = payload?.count;
          } else {
            state.list = [];
          }
          state.isLoading = false;
        }
      )
      .addCase(getPeopleActions.rejected, (state: PeopleList) => {
        state.isLoading = false;
      })
      .addCase(getIndividualPeopleActions.pending, (state: PeopleList) => {
        state.isLoading = true;
      })
      .addCase(
        getIndividualPeopleActions.fulfilled,
        (state: PeopleList, { payload }) => {
          if (payload) {
            state.specificPerson = payload?.data;
          } else {
            state.specificPerson = initialSpecificPerson
          }
          state.isLoading = false;
        }
      )
      .addCase(getIndividualPeopleActions.rejected, (state: PeopleList) => {
        state.isLoading = false;
      });
  },
});
export const peopleReducer = PeopleSlice.reducer;
export const peopleAction = PeopleSlice.actions;
