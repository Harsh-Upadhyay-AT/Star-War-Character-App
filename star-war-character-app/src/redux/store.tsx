import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { filmReducer } from "./FilmSlice/FilmSlice";
import { imageReducer } from "./ImageSlice/ImageSlice";


export const store = configureStore({
    reducer: {
        filmStateData: filmReducer,
        imageStateData: imageReducer,
    }
})

export type IRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;