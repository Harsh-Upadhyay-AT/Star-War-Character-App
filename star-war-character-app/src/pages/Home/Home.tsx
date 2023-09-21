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
              <Link to="/films">view</Link>
            </button>
          </div>
        </li>
      </div>

      <div className="card">
        <li>
          {Strings.starShips}
          <div>
            <button>
              <Link to="/starship">view</Link>
            </button>
          </div>
        </li>
      </div>

      <div className="card">
        <li>
          {Strings.people}
          <div>
            <button>
              <Link to="/people">view</Link>
            </button>
          </div>
        </li>
      </div>

      <div className="card">
        <li>
          {Strings.vehicles}
          <div>
            <button>
              <Link to="/vehicle">view</Link>
            </button>
          </div>
        </li>
      </div>

      <div className="card">
        <li>
          {Strings.species}
          <div>
            <button>
              <Link to="/species">view</Link>
            </button>
          </div>
        </li>
      </div>

      <div className="card">
        <li>
          {Strings.planets}
          <div>
            <button>
              <Link to="/planets">view</Link>
            </button>
          </div>
        </li>
      </div>
    </div>
  );
};

export default Home;
