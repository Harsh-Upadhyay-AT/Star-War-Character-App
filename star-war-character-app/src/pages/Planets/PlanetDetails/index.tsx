import { Fragment, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import moment from "moment";
import "./index.css";
import { IRootState, useAppDispatch } from "redux/store";
import { getIndividualPlanetActions } from "redux/PlanetsSlice/PlanetAsyncThunk";
import { planetAction } from "redux/PlanetsSlice/PlanetsSlice";
import { Loader } from "Loader";
import { Strings } from "resource/Strings";

const PlanetDetails = () => {
  const { planetId } = useParams();
  const dispatch = useAppDispatch();
  const isLoading = useSelector(
    (state: IRootState) => state.planetStateData.isLoading
  );
  const { specificPlanet } = useSelector(
    (state: IRootState) => state.planetStateData
  );
  useEffect(() => {
    const id = Number(planetId);
    dispatch(getIndividualPlanetActions({ id }));
    return () => {
      dispatch(planetAction.resetSpecificPlanet());
    };
  }, [dispatch, planetId]);


  return (
    <div>
    <Fragment>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="planetDetailsContainer">
            <li style={{ marginBottom: "10px" }}>
              <span className="title-text">{Strings.name}:</span>
              {specificPlanet.name}
            </li>
            <li style={{ marginBottom: "10px" }}>
              <span className="title-text">{Strings.diameter}:</span>
              {specificPlanet.diameter}{Strings.mm}
            </li>
            <li style={{ marginBottom: "10px" }}>
              <span className="title-text">{Strings.gravity}:</span>
              {specificPlanet.gravity}
            </li>
            <li style={{ marginBottom: "10px" }}>
              <span className="title-text">{Strings.population}:</span>
              {specificPlanet.population}
            </li>
            <li style={{ marginBottom: "10px" }}>
              <span className="title-text">{Strings.rotationPeriod}:</span>
              {specificPlanet.rotation_period} {Strings.hour}
            </li>
            <li style={{ marginBottom: "10px" }}>
              <span className="title-text">{Strings.orbitalPeriod}:</span>
              {specificPlanet.orbital_period} {Strings.ms}
            </li>
            <li style={{ marginBottom: "10px" }}>
              <span className="title-text">{Strings.climate}:</span>
              {specificPlanet.climate}
            </li>
            <li style={{ marginBottom: "10px" }}>
              <span className="title-text">{Strings.terrain}:</span>
              {specificPlanet.terrain}
            </li>
            <li style={{ marginBottom: "10px" }}>
              <span className="title-text">{Strings.surfaceWater}: </span>
              {specificPlanet.surface_water} {Strings.percentage}
            </li>
            <li style={{ marginBottom: "10px" }}>
              <span className="title-text">{Strings.created}:</span>
              {moment(specificPlanet.created)?.format("YYYY-MM-DD HH:mm:ss")}
            </li>
            <li style={{ marginBottom: "10px" }}>
              <span className="title-text">{Strings.edited}:</span>
              {moment(specificPlanet.edited)?.format("YYYY-MM-DD HH:mm:ss")}
            </li>
          </div>
            <Link to="/planets" title={Strings.back}>
                <button id="backButton">{Strings.back}</button>
            </Link>
        </>
      )}
    </Fragment>
    </div>
  );
};
export default PlanetDetails;
