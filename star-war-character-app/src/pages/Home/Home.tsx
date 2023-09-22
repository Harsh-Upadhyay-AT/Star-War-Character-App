import { Link } from "react-router-dom";
import { Strings } from "../../resource/Strings";
import "./Home.css";

const Home = () => {
  return (
    <div className="container">
      <div className="card">
        <li>
          {Strings.films}
          <div>
            <button>
              <Link to="/films" title={Strings.viewFilms}>{Strings.view}</Link>
            </button>
          </div>
        </li>
      </div>

      <div className="card">
        <li>
          {Strings.starShips}
          <div>
            <button>
              <Link to="/starship" title={Strings.viewStarship}>{Strings.view}</Link>
            </button>
          </div>
        </li>
      </div>

      <div className="card">
        <li>
          {Strings.people}
          <div>
            <button>
              <Link to="/people" title={Strings.viewPeople}>{Strings.view}</Link>
            </button>
          </div>
        </li>
      </div>

      <div className="card">
        <li>
          {Strings.vehicles}
          <div>
            <button>
              <Link to="/vehicle" title={Strings.viewVehicle}>{Strings.view}</Link>
            </button>
          </div>
        </li>
      </div>

      <div className="card">
        <li>
          {Strings.species}
          <div>
            <button>
              <Link to="/species" title={Strings.viewSpecies}>{Strings.view}</Link>
            </button>
          </div>
        </li>
      </div>

      <div className="card">
        <li>
          {Strings.planets}
          <div>
            <button>
              <Link to="/planets" title={Strings.viewPlanets}>{Strings.view}</Link>
            </button>
          </div>
        </li>
      </div>
    </div>
  );
};

export default Home;
