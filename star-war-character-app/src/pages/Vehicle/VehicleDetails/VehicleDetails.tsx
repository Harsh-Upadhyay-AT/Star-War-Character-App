import { useParams } from "react-router-dom";
import { IRootState, useAppDispatch } from "../../../redux/store";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { getIndividualVehicleActions } from "../../../redux/VehicleSlice/VehicleAsyncThunk";

const VehicleDetails = () => {
  const dispatch = useAppDispatch();
  const { vehicleId } = useParams();
  const { specificVehicle } = useSelector(
    (state: IRootState) => state.vehicleStateData
  );
  useEffect(() => {
    const id = Number(vehicleId);
    dispatch(
      getIndividualVehicleActions({id})
    );
  }, [dispatch, vehicleId]);
  return (
    <div>
      <div>{specificVehicle.name}</div>
      <div>{specificVehicle.consumables}</div>
      <div>{specificVehicle.cargo_capacity}</div>
      <div>{specificVehicle.cost_in_credits}</div>
      <div>{specificVehicle.created}</div>
      <div>{specificVehicle.crew}</div>
      <div>{specificVehicle.edited}</div>
      <div>{specificVehicle.manufacturer}</div>
      <div>{specificVehicle.max_atmosphering_speed}</div>
    </div>
  );
};
export default VehicleDetails;
