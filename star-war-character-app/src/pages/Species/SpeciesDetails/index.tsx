import { useSelector } from "react-redux";
import { Fragment, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import moment from "moment";
import "./index.css"
import { IRootState, useAppDispatch } from "redux/store";
import { getIndividualSpeciesActions } from "redux/SpeciesSlice/SpeciesAsyncThunk";
import { speciesAction } from "redux/SpeciesSlice/SpeciesSlice";
import { Loader } from "Loader";
import { Strings } from "resource/Strings";

const SpeciesDetails = () => {
  const { specificSpecies } = useSelector(
    (state: IRootState) => state.speciesStateData
  );
  const dispatch = useAppDispatch();
  const isLoading = useSelector(
    (state: IRootState) => state.speciesStateData.isLoading
  );
  const { speciesId } = useParams();
  useEffect(() => {
    const id = Number(speciesId);
    dispatch(getIndividualSpeciesActions({ id }));
    return () => {
      speciesAction.resetSpecificSpecies();
    };
  }, [dispatch, speciesId]);
  return (
    <div>
    <Fragment>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="speciesDetailsContainer">
            <li style={{ marginBottom: "10px" }}>
              <span className="title-text">{Strings.name}:</span>
              {specificSpecies.name}
            </li>

            <li style={{ marginBottom: "10px" }}>
              <span className="title-text">{Strings.classification}:</span>
              {specificSpecies.classification}
            </li>

            <li style={{ marginBottom: "10px" }}>
              <span className="title-text">{Strings.designation}:</span>
              {specificSpecies.designation}
            </li>

            <li style={{ marginBottom: "10px" }}>
              <span className="title-text">{Strings.averageHeight}:</span>
              {specificSpecies.average_height} {Strings.cm}
            </li>

            <li style={{ marginBottom: "10px" }}>
              <span className="title-text">{Strings.averageLifespan}:</span>
              {specificSpecies.average_lifespan} {Strings.years}
            </li>

            <li style={{ marginBottom: "10px" }}>
              <span className="title-text">{Strings.eyeColor}:</span>
              {specificSpecies.eye_colors}
            </li>

            <li style={{ marginBottom: "10px" }}>
              <span className="title-text">{Strings.hairColor}:</span>
              {specificSpecies.hair_colors}
            </li>

            <li style={{ marginBottom: "10px" }}>
              <span className="title-text">{Strings.skinColor}:</span>
              {specificSpecies.skin_colors}
            </li>

            <li style={{ marginBottom: "10px" }}>
              <span className="title-text">{Strings.language}:</span>
              {specificSpecies.language}
            </li>

            <li style={{ marginBottom: "10px" }}>
              <span className="title-text">{Strings.created}:</span>
              {moment(specificSpecies.created)?.format("YYYY-MM-DD HH:mm:ss")}
            </li>

            <li style={{ marginBottom: "10px" }}>
              <span className="title-text">{Strings.edited}:</span>
              {moment(specificSpecies.edited)?.format("YYYY-MM-DD HH:mm:ss")}
            </li>
          </div>
          <Link to="/species" title={Strings.back}>
                <button id="backButton">{Strings.back}</button>
            </Link>
        </>
      )}
    </Fragment>
    </div>
  );
};
export default SpeciesDetails;
