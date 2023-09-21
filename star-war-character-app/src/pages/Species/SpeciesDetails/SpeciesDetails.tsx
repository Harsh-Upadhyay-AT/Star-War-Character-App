import { useSelector } from "react-redux";
import { IRootState, useAppDispatch } from "../../../redux/store";
import { Fragment, useEffect } from "react";
import { getIndividualSpeciesActions } from "../../../redux/SpeciesSlice/SpeciesAsyncThunk";
import { Link, useParams } from "react-router-dom";
import { speciesAction } from "../../../redux/SpeciesSlice/SpeciesSlice";
import { Strings } from "../../../resource/Strings";
import moment from "moment";
import { Loader } from "../../../Loader/Loader";
import "./SpeciesDetails.css"

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
              <span className="title-text">{Strings.name}:</span>{" "}
              {specificSpecies.name}
            </li>

            <li style={{ marginBottom: "10px" }}>
              <span className="title-text">{Strings.classification}:</span>{" "}
              {specificSpecies.classification}
            </li>

            <li style={{ marginBottom: "10px" }}>
              <span className="title-text">{Strings.designation}:</span>{" "}
              {specificSpecies.designation}
            </li>

            <li style={{ marginBottom: "10px" }}>
              <span className="title-text">{Strings.averageHeight}:</span>{" "}
              {specificSpecies.average_height}
            </li>

            <li style={{ marginBottom: "10px" }}>
              <span className="title-text">{Strings.averageLifespan}:</span>{" "}
              {specificSpecies.average_lifespan}
            </li>

            <li style={{ marginBottom: "10px" }}>
              <span className="title-text">{Strings.eyeColor}:</span>{" "}
              {specificSpecies.eye_colors}
            </li>

            <li style={{ marginBottom: "10px" }}>
              <span className="title-text">{Strings.hairColor}:</span>{" "}
              {specificSpecies.hair_colors}
            </li>

            <li style={{ marginBottom: "10px" }}>
              <span className="title-text">{Strings.skinColor}:</span>{" "}
              {specificSpecies.skin_colors}
            </li>

            <li style={{ marginBottom: "10px" }}>
              <span className="title-text">{Strings.language}:</span>{" "}
              {specificSpecies.language}
            </li>

            <li style={{ marginBottom: "10px" }}>
              <span className="title-text">{Strings.created}:</span>{" "}
              {moment(specificSpecies.created)?.format("YYYY-MM-DD HH:mm:ss")}
            </li>

            <li style={{ marginBottom: "10px" }}>
              <span className="title-text">{Strings.edited}:</span>{" "}
              {moment(specificSpecies.edited)?.format("YYYY-MM-DD HH:mm:ss")}
            </li>
          </div>
          <Link to="/species">
                <button id="backButton">{Strings.back}</button>
            </Link>
        </>
      )}
    </Fragment>
    </div>
  );
};
export default SpeciesDetails;
