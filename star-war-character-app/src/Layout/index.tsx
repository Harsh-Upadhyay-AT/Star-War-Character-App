import { Link, Outlet } from "react-router-dom";
import "./index.css";
import { Strings } from "resource/Strings";

const Layout = () => {
    return (
      <>
        <div className="header">
          <h1 title={Strings.starWar}>{Strings.starWar}</h1>
        </div>
        <div className="navbar">
          <li title={Strings.home}>
            <Link to="/">{Strings.home}</Link>
          </li>
          <li title={Strings.films}>
            <Link to="/films">{Strings.films}</Link>
          </li>
          <li title={Strings.starShips}>
            <Link to="/starship">{Strings.starShips}</Link>
          </li>
          <li title={Strings.people}>
            <Link to="/people">{Strings.people}</Link>
          </li>
          <li title={Strings.vehicles}>
            <Link to="/vehicle">{Strings.vehicles}</Link>
          </li>
          <li title={Strings.species}>
            <Link to="/species">{Strings.species}</Link>
          </li>
          <li title={Strings.planets}>
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