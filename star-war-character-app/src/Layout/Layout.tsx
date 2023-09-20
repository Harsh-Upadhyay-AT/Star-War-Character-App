import { Link, Outlet } from "react-router-dom";
import { Strings } from "../resource/Strings";
import "./Layout.css";

const Layout = () => {
    return (
      <>
        <div className="header">
          <h1>{Strings.starWar}</h1>
        </div>
        <div className="navbar">
          <li>
            <Link to="/">{Strings.home}</Link>
          </li>
          <li>
            <Link to="/films">{Strings.films}</Link>
          </li>
          <li>
            <Link to="/starship">{Strings.starShips}</Link>
          </li>
          <li>
            <Link to="/people">{Strings.people}</Link>
          </li>
          <li>
            <Link to="/vehicle">{Strings.vehicles}</Link>
          </li>
          <li>
            <Link to="/species">{Strings.species}</Link>
          </li>
          <li>
            <Link to="/planets">{Strings.planets}</Link>
          </li>
          </div>
          <div className="container main-content">
        <Outlet />
          </div>
      </>
    );
  };
  export default Layout;