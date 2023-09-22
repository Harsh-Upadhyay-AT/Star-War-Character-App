import { useSelector } from "react-redux";
import { IRootState, useAppDispatch } from "../../redux/store";
import { Fragment, useEffect } from "react";
import { getPlanetActions } from "../../redux/PlanetsSlice/PlanetAsyncThunk";
import constant from "../../config/constant";
import { setTotalPageCount } from "../../service/ApiHelper";
import { Link } from "react-router-dom";
import { getImageActions } from "../../redux/ImageSlice/ImageAsyncThunk";
import { planetAction } from "../../redux/PlanetsSlice/PlanetsSlice";
import { Loader } from "../../Loader/Loader";
import Pagination from "../../Components/Pagination/Pagination";
import { Strings } from "../../resource/Strings";
import "./Planets.css"


const Planets = () => {
  const { list, page, total, limit } = useSelector(
    (state: IRootState) => state.planetStateData
  );
  const dispatch = useAppDispatch();
  const isLoading = useSelector(
    (state: IRootState) => state.planetStateData.isLoading
  );
  const imageList = useSelector(
    (state: IRootState) => state.imageStateData.list
  );
  useEffect(() => {
    dispatch(
      getPlanetActions({
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
    dispatch(planetAction.setCurrentPage(page));
    dispatch(
      getPlanetActions({
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
            <div className="planets-container">
              {list.map((planet, id) => {
                const image = imageList[id];
                const splitId = planet?.url?.split("/planets/");
                return (
                <div key={id} className="planets-card">
                    <img
                        style={{ height: "200px" }}
                        src={image?.download_url}
                        alt={image?.author}
                        title={Strings.image}
                    />
                    <li style={{ marginBottom: "10px" }}>
                        <span className="title-text">{Strings.name}:</span>{" "}
                        {planet.name}
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                        <span className="title-text">{Strings.diameter}:</span>{" "}
                        {planet.diameter}
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                        <span className="title-text">{Strings.gravity}:</span>{" "}
                        {planet.gravity}
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                        <span className="title-text">{Strings.population}:</span>{" "}
                        {planet.population}
                    </li>
                    <Link to={`/planet/${splitId?.[1]?.replace("/", "")}`} title={Strings.view}>
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
export default Planets;
