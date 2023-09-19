import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "../Layout/Layout"
import Home from "../pages/Home/Home"
import Films from "../pages/Films/Films"
import People from "../pages/People/People"
import Planets from "../pages/Planets/Planets"
import Species from "../pages/Species/Species"
import Vehicle from "../pages/Vehicle/Vehicle"
import StarShips from "../pages/StarShips/StarShips"

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
        </Route>
      </Routes>
    </BrowserRouter>
    )
}

export default AppRoutes