import { Fragment, useEffect } from "react";
import { IRootState, useAppDispatch } from "../../../redux/store";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getIndividualPlanetActions } from "../../../redux/PlanetsSlice/PlanetAsyncThunk";
import { planetAction } from "../../../redux/PlanetsSlice/PlanetsSlice";
import { Loader } from "../../../Loader/Loader";
import { Strings } from "../../../resource/Strings";
import moment from "moment";
import "./PlanetDetails.css";

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
              <span className="title-text">{Strings.name}:</span>{" "}
              {specificPlanet.name}
            </li>
            <li style={{ marginBottom: "10px" }}>
              <span className="title-text">{Strings.diameter}:</span>{" "}
              {specificPlanet.diameter}
            </li>
            <li style={{ marginBottom: "10px" }}>
              <span className="title-text">{Strings.gravity}:</span>{" "}
              {specificPlanet.gravity}
            </li>
            <li style={{ marginBottom: "10px" }}>
              <span className="title-text">{Strings.population}:</span>{" "}
              {specificPlanet.population}
            </li>
            <li style={{ marginBottom: "10px" }}>
              <span className="title-text">{Strings.rotationPeriod}:</span>{" "}
              {specificPlanet.rotation_period}
            </li>
            <li style={{ marginBottom: "10px" }}>
              <span className="title-text">{Strings.orbitalPeriod}:</span>{" "}
              {specificPlanet.orbital_period}
            </li>
            <li style={{ marginBottom: "10px" }}>
              <span className="title-text">{Strings.climate}:</span>{" "}
              {specificPlanet.climate}
            </li>
            <li style={{ marginBottom: "10px" }}>
              <span className="title-text">{Strings.terrain}:</span>{" "}
              {specificPlanet.terrain}
            </li>
            <li style={{ marginBottom: "10px" }}>
              <span className="title-text">{Strings.surfaceWater}:</span>{" "}
              {specificPlanet.surface_water}
            </li>
            <li style={{ marginBottom: "10px" }}>
              <span className="title-text">{Strings.created}:</span>{" "}
              {moment(specificPlanet.created)?.format("YYYY-MM-DD HH:mm:ss")}
            </li>
            <li style={{ marginBottom: "10px" }}>
              <span className="title-text">{Strings.edited}:</span>{" "}
              {moment(specificPlanet.edited)?.format("YYYY-MM-DD HH:mm:ss")}
            </li>
          </div>
            <Link to="/planets">
                <button id="backButton">{Strings.back}</button>
            </Link>
        </>
      )}
    </Fragment>
    </div>
  );
};
export default PlanetDetails;
