import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Fragment, useEffect } from "react";
import moment from "moment";
import "./index.css"
import { getIndividualVehicleActions } from "redux/VehicleSlice/VehicleAsyncThunk";
import { Strings } from "resource/Strings";
import { Loader } from "Loader";
import { IRootState, useAppDispatch } from "redux/store";


const VehicleDetails = () => {
  const dispatch = useAppDispatch();
  const { vehicleId } = useParams();
  const isLoading = useSelector(
    (state: IRootState) => state.vehicleStateData.isLoading
  );
  const { specificVehicle } = useSelector(
    (state: IRootState) => state.vehicleStateData
  );
  useEffect(() => {
    const id = Number(vehicleId);
    dispatch(getIndividualVehicleActions({ id }));
  }, [dispatch, vehicleId]);
  return (
    <div>
    <Fragment>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="vehicleDetailsContainer">
            <div className="detail-item">
              <label>{Strings.name}:</label> {specificVehicle.name}
            </div>

            <div className="detail-item">
              <label>{Strings.model}:</label> {specificVehicle.model}
            </div>

            <div className="detail-item">
              <label>{Strings.vehicleClass}:</label> {specificVehicle.vehicle_class}
            </div>

            <div className="detail-item">
              <label>{Strings.consumables}:</label>
              {specificVehicle.consumables}
            </div>

            <div className="detail-item">
              <label>{Strings.cargoCapacity}:</label>
              {specificVehicle.cargo_capacity}
            </div>

            <div className="detail-item">
              <label>{Strings.costInCredits}:</label>
              {specificVehicle.cost_in_credits}
            </div>

            <div className="detail-item">
              <label>{Strings.manufacturer}:</label>
              {specificVehicle.manufacturer}
            </div>

            <div className="detail-item">
              <label>{Strings.length}:</label> {specificVehicle.length}
            </div>

            <div className="detail-item">
              <label>{Strings.crew}:</label> {specificVehicle.crew}
            </div>

            <div className="detail-item">
              <label>{Strings.passengers}:</label> {specificVehicle.passengers}
            </div>

            <div className="detail-item">
              <label>{Strings.maxAtmosphereSpeed}:</label>
              {specificVehicle.max_atmosphering_speed}
            </div>

            <div className="detail-item">
              <label>{Strings.created}:</label>
              {moment(specificVehicle.created)?.format("YYYY-MM-DD HH:mm:ss")}
            </div>

            <div className="detail-item">
              <label>{Strings.edited}:</label>
              {moment(specificVehicle.edited)?.format("YYYY-MM-DD HH:mm:ss")}
            </div>
          </div>
          <Link to="/vehicle" title={Strings.back}>
            <button id="backButton">{Strings.back}</button>
          </Link>
        </>
      )}
    </Fragment>
    </div>
  );
};
export default VehicleDetails;
