import { useParams } from "react-router-dom";
import { IRootState, useAppDispatch } from "../../../redux/store";
import { useSelector } from "react-redux";
import { getIndividualStarshipActions } from "../../../redux/StarshipSlice/StarshipAsyncThunk";
import { useEffect } from "react";
import './StarShipsDetails.css';



const StarShipsDetails = () => {
  const { starshipId } = useParams();
  const dispatch = useAppDispatch();
  const { specificStarship } = useSelector(
    (state: IRootState) => state.starShipStateData
  );
  useEffect(() => {
    const id = Number(starshipId);
    dispatch(getIndividualStarshipActions({id})
    );
  }, [dispatch, starshipId]);

  return (
    <div className="starship-details-container">
      <div className="starship-details-item">{specificStarship.name}</div>
      <div className="starship-details-item">{specificStarship.MGLT}</div>
      <div className="starship-details-item">{specificStarship.length}</div>
      <div className="starship-details-item">{specificStarship.crew}</div>
      <div className="starship-details-item">{specificStarship.hyperdrive_rating}</div>
      <div className="starship-details-item">{specificStarship.manufacturer}</div>
      <div className="starship-details-item">{specificStarship.model}</div>
      <div className="starship-details-item">{specificStarship.max_atmosphering_speed}</div>
      <div className="starship-details-item">{specificStarship.consumables}</div>
    </div>
  );
};
export default StarShipsDetails;
