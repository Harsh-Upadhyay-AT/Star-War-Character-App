import { Link } from "react-router-dom";
import "./index.css";
import { Strings } from "resource/Strings";

const Home = () => {
  return (
    <div className="container">
      <div className="card">
        <li>
          {Strings.films}
          <div>
            <button title={Strings.viewFilms}>
              <Link to="/films" >{Strings.view}</Link>
            </button>
          </div>
        </li>
      </div>

      <div className="card">
        <li>
          {Strings.starShips}
          <div>
            <button title={Strings.viewStarship}>
              <Link to="/starship" >{Strings.view}</Link>
            </button>
          </div>
        </li>
      </div>

      <div className="card">
        <li>
          {Strings.people}
          <div>
            <button title={Strings.viewPeople}>
              <Link to="/people" >{Strings.view}</Link>
            </button>
          </div>
        </li>
      </div>

      <div className="card">
        <li>
          {Strings.vehicles}
          <div>
            <button title={Strings.viewVehicle}>
              <Link to="/vehicle" >{Strings.view}</Link>
            </button>
          </div>
        </li>
      </div>

      <div className="card">
        <li>
          {Strings.species}
          <div>
            <button title={Strings.viewSpecies}>
              <Link to="/species" >{Strings.view}</Link>
            </button>
          </div>
        </li>
      </div>

      <div className="card">
        <li>
          {Strings.planets}
          <div>
            <button title={Strings.viewPlanets}>
              <Link to="/planets" >{Strings.view}</Link>
            </button>
          </div>
        </li>
      </div>
    </div>
  );
};

export default Home;
