import { useSelector } from "react-redux";
import { Fragment, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./index.css";
import moment from "moment";
import { IRootState, useAppDispatch } from "redux/store";
import { getIndividualPeopleActions } from "redux/PeopleSlice/PeopleAsyncThunk";
import { peopleAction } from "redux/PeopleSlice/PeopleSlice";
import { Loader } from "Loader";
import { Strings } from "resource/Strings";

const PeopleDetails = () => {
  const dispatch = useAppDispatch();
  const isLoading = useSelector(
    (state: IRootState) => state.peopleStateData.isLoading
  );
  const { specificPerson } = useSelector(
    (state: IRootState) => state.peopleStateData
  );
  const { peopleId } = useParams();
  useEffect(() => {
    const id = Number(peopleId);
    dispatch(getIndividualPeopleActions({
      id
    }))
    return () => {
      dispatch(peopleAction.resetSpecificPerson())
    }
  }, [dispatch, peopleId]);
  return (
    <div>
    <Fragment>
      {isLoading ? <Loader/> :
        <>
          <div className="people-details-container">
            <li style={{ marginBottom: "10px" }}>
              <span className="title-text">{Strings.name}:</span> {specificPerson?.name}
            </li>
            <li style={{ marginBottom: "10px" }}>
              <span className="title-text">{Strings.dateOfBirth}:</span> {specificPerson?.birth_year}
            </li>
            <li style={{ marginBottom: "10px" }}>
              <span className="title-text">{Strings.eyeColor}:</span> {specificPerson?.eye_color}
            </li>
            <li style={{ marginBottom: "10px" }}>
              <span className="title-text">{Strings.hairColor}:</span> {specificPerson?.hair_color}
            </li>
            <li style={{ marginBottom: "10px" }}>
                <span className="title-text">{Strings.skinColor}:</span> {specificPerson?.skin_color}
            </li>
            <li style={{ marginBottom: "10px" }}>
              <span className="title-text">{Strings.gender}:</span> {specificPerson?.gender}
            </li>
            <li style={{ marginBottom: "10px" }}>
              <span className="title-text">{Strings.height}:</span> {specificPerson?.height}
            </li>
            <li style={{ marginBottom: "10px" }}>
              <span className="title-text">{Strings.mass}:</span> {specificPerson?.mass}
            </li>

            <li style={{ marginBottom: "10px" }}>
              <span className="title-text">{Strings.edited}:</span> {moment(specificPerson?.edited)?.format("YYYY-MM-DD HH:mm:ss")}
            </li>

            <li style={{ marginBottom: "10px" }}>
              <span className="title-text">{Strings.created}:</span> {moment(specificPerson?.created)?.format("YYYY-MM-DD HH:mm:ss")}
            </li>

          </div>
          <Link to="/people" title={Strings.back}>
                <button id="backButton">{Strings.back}</button>
            </Link>
        </>
      }
    </Fragment>
    </div>
  );
};
export default PeopleDetails;
