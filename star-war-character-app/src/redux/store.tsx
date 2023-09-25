import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { filmReducer } from "./FilmSlice/FilmSlice";
import { imageReducer } from "./ImageSlice/ImageSlice";
import { starshipReducer } from "./StarshipSlice/StarshipSlice";
import { peopleReducer } from "./PeopleSlice/PeopleSlice";
import { planetReducer } from "./PlanetsSlice/PlanetsSlice";
import { speciesReducer } from "./SpeciesSlice/SpeciesSlice";
import { vehicleReducer } from "./VehicleSlice/VehicleSlice";

export const store = configureStore({
  reducer: {
    filmStateData: filmReducer,
    starShipStateData: starshipReducer,
    peopleStateData: peopleReducer,
    planetStateData: planetReducer,
    speciesStateData: speciesReducer,
    vehicleStateData: vehicleReducer,
    imageStateData: imageReducer,
  },
});

export type IRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
