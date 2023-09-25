import { Link } from "react-router-dom";
import "./index.css";
import { Strings } from "resource/Strings";

const Home = () => {
  return (
    <div className="container">
      <div className="card">
        <li className="image-container">
        <img src="https://t4.ftcdn.net/jpg/02/39/24/45/360_F_239244529_DvA47OXFQic9krRTFm49g9RUDPRTSIJV.jpg"  style={{ width: '220px' }} alt="Film" title="image" />
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
          <img src="https://media.istockphoto.com/id/1131418344/photo/space-shuttle-in-the-rays-of-sun.jpg?s=612x612&w=0&k=20&c=sWDbIkxaV4-0Ou8cgUJa6a06bcF78hkJ5GvL8WZmJr4=" style={{ width: '200px' }} alt="StarShip" title="image"/>
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
          <img src="https://parade.com/.image/t_share/MTkwNTgxMzY0NzA2ODQ1ODIx/whats-world-population-jpg.jpg" style={{ width: '220px' }} alt="people" title="image"/>
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
          <img src="https://qph.cf2.quoracdn.net/main-qimg-b5a2ea9c840fe8fe49bd0dc347a394ca.webp" style={{ width:'220px'}} alt="Vehicles " title="image"/>
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
          <img src="https://twinfinite.net/wp-content/uploads/2022/08/what-species-yoda-star-wars-explained.jpg?fit=1200%2C675" style={{ width:"220px"}} alt="Species" title="image"/>
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
          <img src="https://sm.ign.com/ign_in/gallery/e/every-plan/every-planet-and-location-in-star-wars-battlefront-2s-multip_te1n.jpg" style={{ width:"220px" }} alt="planets" title="image"/>
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
