import { useSelector } from "react-redux";
import { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import moment from "moment";
import { IRootState, useAppDispatch } from "redux/store";
import { getFilmActions } from "redux/FilmSlice/FilmAsyncThunk";
import { getImageActions } from "redux/ImageSlice/ImageAsyncThunk";
import constant from "config/constant";
import { setTotalPageCount } from "service/ApiHelper";
import { filmAction } from "redux/FilmSlice/FilmSlice";
import { Loader } from "Loader";
import { Strings } from "resource/Strings";
import Pagination from "Components/Pagination";

const Films = () => {
  const { list, page, total, limit } = useSelector(
    (state: IRootState) => state.filmStateData
  );
  const imageList = useSelector(
    (state: IRootState) => state.imageStateData.list
  );
  const { isLoading } = useSelector((state: IRootState) => state.filmStateData);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(
      getFilmActions({
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
    dispatch(filmAction.setCurrentPage(page));
  };
  return (
    <div>
      <Fragment>
        {isLoading && list.length === 0 ? (
          <Loader />
        ) : (
          <>
            <div className="filmStyle-container">
              {list?.map((films, id) => {
                const image = imageList[id];
                const splitId = films?.url?.split("/films/");
                return (
                  <div key={id} className="filmStyle-card">
                    <img src={image?.download_url} alt={image?.author} title={Strings.image} />
                    <li style={{ marginBottom: "10px" }} >
                      <span className="title-text">{Strings.title}:</span>
                      {films.title}
                    </li>
                    <li style={{ marginBottom: "10px" }} >
                      <span className="title-text">{Strings.episode}:</span>
                      {films.episode_id}
                    </li>
                    <li style={{ marginBottom: "10px" }} >
                      <span className="title-text">{Strings.releaseDate}:</span>
                      {moment(films.release_date)?.format("DD-MM-YYYY")}
                    </li>
                    <Link title={Strings.view}
                      to={`/films/${splitId?.[1]?.replace("/", "")}`}
                    >
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

export default Films;
