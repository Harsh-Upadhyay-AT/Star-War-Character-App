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
        <div className="starship-container">
          {list.map((starShips, id) => {
            const image = imageList[id];
            const splitId = starShips?.url?.split("/starships/");
            return (
              <div key={id} className="starship-card">
                  <img src={image?.download_url} alt={image?.author} />
                <li style={{ marginBottom: '10px'}}>
                <span className="title-text">{Strings.name} :</span> {starShips.name}
                </li>
                <li style={{ marginBottom: '10px'}}>
                <span className="title-text">{Strings.model} :</span> {starShips.model}
                </li>
                <Link to={`/starship/${splitId?.[1]?.replace("/", "")}`}>
                <button>
                  {Strings.view}
                </button>
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

export default StarShips;
