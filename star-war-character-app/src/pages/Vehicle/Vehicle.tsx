import { useSelector } from "react-redux";
import { IRootState, useAppDispatch } from "../../redux/store";
import { Fragment, useEffect } from "react";
import { getVehicleActions } from "../../redux/VehicleSlice/VehicleAsyncThunk";
import constant from "../../config/constant";
import { getImageActions } from "../../redux/ImageSlice/ImageAsyncThunk";
import { setTotalPageCount } from "../../service/ApiHelper";
import { Loader } from "../../Loader/Loader";
import { Link } from "react-router-dom";
import Pagination from "../../Components/Pagination/Pagination";
import "./Vehicle.css";
import { vehicleAction } from "../../redux/VehicleSlice/VehicleSlice";

const Vehicle = () => {
  const dispatch = useAppDispatch();
  const { list, page, total, limit } = useSelector(
    (state: IRootState) => state.vehicleStateData
  );
  const imageList = useSelector(
    (state: IRootState) => state.imageStateData.list
  );
  const isLoading = useSelector(
    (state: IRootState) => state.vehicleStateData.isLoading
  );
  useEffect(() => {
    dispatch(
      getVehicleActions({
        id: constant.defaultUserId,
        page,
        size: limit,
      })
    );
    dispatch(
      getImageActions({
        id: constant.defaultUserId,
      })
    );
  }, [dispatch, limit, page]);
  const totalPage = setTotalPageCount(total, limit);
  const pageChangeHandler = (currentPage: number) => {
    const page = Number(currentPage);
    dispatch(vehicleAction.setCurrentPage(page));
    dispatch(
      getVehicleActions({
        page,
        size: limit,
      })
    );
  };
  return (
    <div>
      <Fragment>
        {isLoading && list.length === 0 ? (
          <Loader />
        ) : (
          <>
            <div>
              {list.map((vehicle, id) => {
                const image = imageList[id];
                const splitId = vehicle?.url?.split("/vehicles/");
                return (
                  <ul key={id}>
                    <div className="vehicleContainer">
                      <img src={image?.download_url} alt={image?.author} />
                    </div>
                    <h4>Name:</h4>
                    <Link to={`/vehicle/${splitId?.[1]?.replace("/", "")}`}>
                      {vehicle.name}
                    </Link>
                    <p>
                      <h4>model:</h4>
                      {vehicle.model}
                    </p>
                    <p>
                      <h4>vehicle class:</h4>
                      {vehicle.vehicle_class}
                    </p>
                    <p>
                      <h4>manufacturer:</h4>
                      {vehicle.manufacturer}
                    </p>
                    <p>
                      <h4>length:</h4>
                      {vehicle.length}
                    </p>
                    <p>
                      <h4>Cost in credits:</h4>
                      {vehicle.cost_in_credits}
                    </p>
                    <p>
                      <h4>crew:</h4>
                      {vehicle.crew}
                    </p>
                    <p>
                      <h4>passengers:</h4>
                      {vehicle.passengers}
                    </p>
                    <p>
                      <h4>max atmosphering speed:</h4>
                      {vehicle.max_atmosphering_speed}
                    </p>
                    <p>
                      <h4>cargo capacity:</h4>
                      {vehicle.cargo_capacity}
                    </p>
                    <p>
                      <h4>consumables:</h4>
                      {vehicle.consumables}
                    </p>
                    <p>
                      <h4>url:</h4>
                      {vehicle.url}
                    </p>
                    <p>
                      <h4>created:</h4>
                      {vehicle.created}
                    </p>
                    <p>
                      <h4>edited:</h4>
                      {vehicle.edited}
                    </p>
                  </ul>
                );
              })}
            </div>
            <div className="pagination">
              <Pagination
                page={page}
                onPageChangeHandler={pageChangeHandler}
                totalPages={
                  totalPage > 0
                    ? totalPage
                    : constant.page.defaultCurrentPaginationNumber
                }
              />
            </div>
          </>
        )}
      </Fragment>
    </div>
  );
};

export default Vehicle;
