import { useSelector } from "react-redux";
import { IRootState, useAppDispatch } from "../../../redux/store";
import { Fragment, useEffect } from "react";
import { getIndividualPeopleActions } from "../../../redux/PeopleSlice/PeopleAsyncThunk";
import { useParams } from "react-router-dom";
import { peopleAction } from "../../../redux/PeopleSlice/PeopleSlice";
import { Loader } from "../../../Loader/Loader";
import { Strings } from "../../../resource/Strings";
import "./PeopleDetails.css";

const PeopleDetails = () => {
  const dispatch = useAppDispatch();
  const { list } = useSelector(
    (state: IRootState) => state.peopleStateData
  );
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
    <Fragment>
      {isLoading && list.length === 0 ? (
        <div className="loader-container">
          <Loader />
        </div>
      ) : (
        <>
          <div className="people-details-container">
            <div className="detail-item">
              <label>{Strings.name}:</label> {specificPerson?.name}
            </div>
            <div className="detail-item">
              <label>{Strings.age}:</label> {specificPerson?.birth_year}
            </div>
            <div className="detail-item">
              <label>{Strings.eyeColor}:</label> {specificPerson?.eye_color}
            </div>
            <div className="detail-item">
              <label>{Strings.hairColor}:</label> {specificPerson?.hair_color}
            </div>
            <div className="detail-item">
              <label>{Strings.gender}:</label> {specificPerson?.gender}
            </div>
            <div className="detail-item">
              <label>{Strings.height}:</label> {specificPerson?.height}
            </div>
            <div className="detail-item">
              <label>{Strings.mass}:</label> {specificPerson?.mass}
            </div>
          </div>
        </>
      )}
    </Fragment>
  );
};
export default PeopleDetails;
