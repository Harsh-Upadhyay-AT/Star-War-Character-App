import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "../Layout/Layout"
import Home from "../pages/Home/Home"
import Films from "../pages/Films/Films"
import People from "../pages/People/People"
import Planets from "../pages/Planets/Planets"
import Species from "../pages/Species/Species"
import Vehicle from "../pages/Vehicle/Vehicle"
import StarShips from "../pages/StarShips/StarShips"
import FilmDetails from "../pages/Films/FilmDetails/FilmDetails"
import PeopleDetails from "../pages/People/PeopleDetails/PeopleDetails"
import PlanetDetails from "../pages/Planets/PlanetDetails/PlanetDetails"
import StarShipsDetails from "../pages/StarShips/StarShipsDetails/StarShipsDetails"
import VehicleDetails from "../pages/Vehicle/VehicleDetails/VehicleDetails"
import SpeciesDetails from "../pages/Species/SpeciesDetails/SpeciesDetails"

const AppRoutes = () =>{
    return (
        <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route  path="/films" element={<Films />}/>
          <Route path="/people" element={<People />}/>
          <Route path="/planets" element={<Planets />}/>
          <Route path="/species" element={<Species />}/>
          <Route path="/vehicle" element={<Vehicle />}/>
          <Route path="/starship" element={<StarShips />}/>
          <Route path="/films/:filmId" element={<FilmDetails/>}/>
          <Route path="/people/:peopleId" element={<PeopleDetails/>}/>
          <Route path="/planet/:planetId" element={<PlanetDetails/>}/>
          <Route path="/species/:speciesId" element={<SpeciesDetails/>}/>
          <Route path="/starship/:starshipId" element={<StarShipsDetails/>}/>
          <Route path="/vehicle/:vehicleId" element={<VehicleDetails/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    )
}

export default AppRoutes