import Layout from "Layout";
import Films from "pages/Films";
import FilmDetails from "pages/Films/FilmDetails";
import Home from "pages/Home";
import People from "pages/People";
import PeopleDetails from "pages/People/PeopleDetails";
import Planets from "pages/Planets";
import PlanetDetails from "pages/Planets/PlanetDetails";
import Species from "pages/Species";
import SpeciesDetails from "pages/Species/SpeciesDetails";
import StarShips from "pages/StarShips";
import StarShipsDetails from "pages/StarShips/StarShipsDetails";
import Vehicle from "pages/Vehicle";
import VehicleDetails from "pages/Vehicle/VehicleDetails";
import { BrowserRouter, Route, Routes } from "react-router-dom";


const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/films" element={<Films />} />
          <Route path="/people" element={<People />} />
          <Route path="/planets" element={<Planets />} />
          <Route path="/species" element={<Species />} />
          <Route path="/vehicle" element={<Vehicle />} />
          <Route path="/starship" element={<StarShips />} />
          <Route path="/films/:filmId" element={<FilmDetails />} />
          <Route path="/people/:peopleId" element={<PeopleDetails />} />
          <Route path="/planet/:planetId" element={<PlanetDetails />} />
          <Route path="/species/:speciesId" element={<SpeciesDetails />} />
          <Route path="/starship/:starshipId" element={<StarShipsDetails />} />
          <Route path="/vehicle/:vehicleId" element={<VehicleDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
