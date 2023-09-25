import { createSlice } from "@reduxjs/toolkit";
import { getFilmActions, getIndividualFilmActions } from "./FilmAsyncThunk";
import constant from "config/constant";
import { FilmList } from "./FilmType";

const initialSpecificFilm = {
  title: "",
  episode_id: constant.defaultUserId,
  characters: [],
  created: "",
  director: "",
  edited: "",
  opening_crawl: "",
  producer: "",
  release_date: "",
  url: "",
  starships: [],
  species: [],
  planets: [],
};

const initialState: FilmList = {
  list: [],
  isLoading: false,
  page: constant.page.defaultNumber,
  total: constant.page.defaultTotal,
  limit: constant.page.size,
  specificFilm: initialSpecificFilm,
};

const FilmSlice = createSlice({
  name: "Film",
  initialState,
  reducers: {
    setCurrentPageSize: (state, action) => {
      state.limit = action.payload;
    },
    setCurrentPage(state, action) {
      state.page = action.payload;
    },
    resetSpecificFilm(state) {
      state.specificFilm = initialSpecificFilm;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getFilmActions.pending, (state: FilmList) => {
        state.isLoading = true;
      })
      .addCase(getFilmActions.fulfilled, (state: FilmList, { payload }) => {
        if (payload) {
          state.list = payload?.data;
          state.total = payload?.count;
        } else {
          state.list = [];
        }
        state.isLoading = false;
      })
      .addCase(getFilmActions.rejected, (state: FilmList) => {
        state.isLoading = false;
      })
      .addCase(getIndividualFilmActions.pending, (state: FilmList) => {
        state.isLoading = true;
      })
      .addCase(
        getIndividualFilmActions.fulfilled,
        (state: FilmList, { payload }) => {
          if (payload) {
            state.specificFilm = payload?.data;
          } else {
            state.specificFilm = initialSpecificFilm;
          }
          state.isLoading = false;
        }
      )
      .addCase(getIndividualFilmActions.rejected, (state: FilmList) => {
        state.isLoading = false;
      });
  },
});

export const filmReducer = FilmSlice.reducer;
export const filmAction = FilmSlice.actions;
