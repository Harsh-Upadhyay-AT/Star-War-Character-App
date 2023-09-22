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
import { Strings } from "../../resource/Strings";

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
            <div className="vehicle-container">
              {list.map((vehicle, id) => {
                const image = imageList[id];
                const splitId = vehicle?.url?.split("/vehicles/");
                return (
                  <div key={id} className="vehicle-card">
                    <img src={image?.download_url} alt={image?.author} />
                    <li style={{ marginBottom: "10px" }}>
                      <span className="title-text">{Strings.name}:</span>{" "}
                      {vehicle.name}
                    </li>

                    <li style={{ marginBottom: "10px" }}>
                      <span className="title-text">{Strings.model}:</span>{" "}
                      {vehicle.model}
                    </li>
                    <Link to={`/vehicle/${splitId?.[1]?.replace("/", "")}`} title={Strings.view}>
                      <button>{Strings.view}</button>
                    </Link>
                  </div>
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
