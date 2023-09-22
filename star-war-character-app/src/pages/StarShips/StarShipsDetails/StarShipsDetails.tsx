import { Link, useParams } from "react-router-dom";
import { IRootState, useAppDispatch } from "../../../redux/store";
import { useSelector } from "react-redux";
import { getIndividualStarshipActions } from "../../../redux/StarshipSlice/StarshipAsyncThunk";
import { Fragment, useEffect } from "react";
import './StarShipsDetails.css';
import { Strings } from "../../../resource/Strings";
import moment from "moment";
import { Loader } from "../../../Loader/Loader";



const StarShipsDetails = () => {
  const { starshipId } = useParams();
  const dispatch = useAppDispatch();
  const isLoading = useSelector(
    (state: IRootState) => state.starShipStateData.isLoading
  );
  const { specificStarship } = useSelector(
    (state: IRootState) => state.starShipStateData
  );
  useEffect(() => {
    const id = Number(starshipId);
    dispatch(getIndividualStarshipActions({id})
    );
  }, [dispatch, starshipId]);

  return (
    <div>
    <Fragment>
      {isLoading ? <Loader/> : <>
    <div className="starship-details-container">
      <li style={{ marginBottom: '10px'}}>
          <span className="title-text">{Strings.name}: </span> {specificStarship.name}
      </li>
      <li style={{ marginBottom: '10px'}}>
          <span className="title-text">{Strings.model}: </span> {specificStarship.model}
      </li>

      <li style={{ marginBottom: '10px'}}>
          <span className="title-text">{Strings.starshipClass}: </span> {specificStarship.starship_class}
      </li>

      <li style={{ marginBottom: '10px'}}>
          <span className="title-text">{Strings.manufacturer}: </span> {specificStarship.manufacturer}
      </li>

      <li style={{ marginBottom: '10px'}}>
          <span className="title-text">{Strings.costInCredits}: </span> {specificStarship.cost_in_credits}
      </li>

      <li style={{ marginBottom: '10px'}}>
          <span className="title-text">{Strings.length}: </span> {specificStarship.length}
      </li>

      <li style={{ marginBottom: '10px'}}>
          <span className="title-text">{Strings.crew}: </span> {specificStarship.crew}
      </li>

      <li style={{ marginBottom: '10px'}}>
          <span className="title-text">{Strings.passengers}: </span> {specificStarship.passengers}
      </li>

      <li style={{ marginBottom: '10px'}}>
          <span className="title-text">{Strings.maxAtmosphereSpeed}: </span> {specificStarship.max_atmosphering_speed}
      </li>

      <li style={{ marginBottom: '10px'}}>
          <span className="title-text">{Strings.mglt}: </span> {specificStarship.MGLT}
      </li>

      <li style={{ marginBottom: '10px'}}>
          <span className="title-text">{Strings.cargoCapacity}: </span> {specificStarship.cargo_capacity}
      </li>

      <li style={{ marginBottom: '10px'}}>
          <span className="title-text">{Strings.consumables}: </span> {specificStarship.consumables}
      </li>

      <li style={{ marginBottom: '10px'}}>
          <span className="title-text">{Strings.hyperDriveRating}: </span> {specificStarship.hyperdrive_rating}
      </li>


      <li style={{ marginBottom: '10px'}}>
          <span className="title-text">{Strings.created}: </span> {moment(specificStarship.created)?.format("DD-MM-YYYY")}
      </li>

      <li style={{ marginBottom: '10px'}}>
          <span className="title-text">{Strings.edited}: </span> {moment(specificStarship.edited)?.format("DD-MM-YYYY")}
      </li>
    </div>
            <Link to="/starship" title={Strings.back}>
                <button id="backButton">{Strings.back}</button>
            </Link>
    </>}
    </Fragment>
    </div>
  );
};
export default StarShipsDetails;
