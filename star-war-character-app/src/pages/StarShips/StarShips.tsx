import { useSelector } from "react-redux";
import { IRootState, useAppDispatch } from "../../redux/store";
import { setTotalPageCount } from "../../service/ApiHelper";
import { Fragment, useEffect } from "react";
import { getStarshipActions } from "../../redux/StarshipSlice/StarshipAsyncThunk";
import constant from "../../config/constant";
import { getImageActions } from "../../redux/ImageSlice/ImageAsyncThunk";
import { starshipAction } from "../../redux/StarshipSlice/StarshipSlice";
import { Loader } from "../../Loader/Loader";
import { Link } from "react-router-dom";
import Pagination from "../../Components/Pagination/Pagination";
import './StarShips.css';
import { Strings } from "../../resource/Strings";
import moment from "moment";

const StarShips = () => {
  const dispatch = useAppDispatch();
  const { list, page, total, limit } = useSelector(
    (state: IRootState) => state.starShipStateData
  );
  const totalPage = setTotalPageCount(total, limit);
  const isLoading = useSelector(
    (state: IRootState) => state.starShipStateData.isLoading
  );
  const imageList = useSelector(
    (state: IRootState) => state.imageStateData.list
  );
  useEffect(() => {
    dispatch(
      getStarshipActions({
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

  const pageChangeHandler = (currentPage: number) => {
    const page = Number(currentPage);
    dispatch(starshipAction.setCurrentPage(page));
    dispatch(
      getStarshipActions({
        page,
        size: limit,
      })
    );
  };


return (
    <div>
  <Fragment>
    {isLoading && list.length === 0 ? (<Loader />) : (
      <>
        <div className="starship-list">
          {list.map((starShips, id) => {
            const image = imageList[id];
            const splitId = starShips?.url?.split("/starships/");
            return (
              <ul key={id}>
                <div>
                  <img src={image?.download_url} alt={image?.author} />
                </div>
                <div className="starship-link">
                    {starShips.name}
                </div>
                <p>{starShips.model}</p>
                <p>{starShips.starship_class}</p>
                <p>{starShips.manufacturer}</p>
                <p>{starShips.cost_in_credits}</p>
                <p>{starShips.length}</p>
                <p>{starShips.crew}</p>
                <p>{starShips.passengers}</p>
                <p>{starShips.max_atmosphering_speed}</p>
                <p>{starShips.hyperdrive_rating}</p>
                <p>{starShips.MGLT}</p>
                <p>{starShips.cargo_capacity}</p>
                <p>{starShips.consumables}</p>
                <p>{moment(starShips.created)?.format("DD-MM-YYYY")}</p>
                <p>{moment(starShips.edited)?.format("DD-MM-YYYY")}</p>
                <Link to={`/starship/${splitId?.[1]?.replace("/", "")}`}>
                <button>
                  {Strings.view}
                </button>
                </Link>
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

export default StarShips;
