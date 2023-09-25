import { createSlice } from "@reduxjs/toolkit";
import { ImageList } from "./ImageType";
import { getImageActions } from "./ImageAsyncThunk";

const initialState: ImageList= {
    list: [],
    loading: false
}
const ImageSlice = createSlice({
    name:"image",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getImageActions.pending, (state: ImageList) => {
            state.loading = true;
        })
        .addCase(
            getImageActions.fulfilled,
            (state: ImageList, { payload }) => {
              if (payload) {
                state.list = payload?.data;
              } else {
                state.list = [];
              }
              state.loading = false;
            }
          )
          .addCase(getImageActions.rejected, (state: ImageList) => {
            state.loading = false;
          });
    }
});
export const imageReducer = ImageSlice.reducer;
export const imageAction = ImageSlice.actions;