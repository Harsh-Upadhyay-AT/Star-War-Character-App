import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Fragment, useEffect } from "react";
import moment from "moment";
import "./index.css"
import { Loader } from "Loader";
import { Strings } from "resource/Strings";
import { getIndividualFilmActions } from "redux/FilmSlice/FilmAsyncThunk";
import { IRootState, useAppDispatch } from "redux/store";

const FilmDetails = () => {
  const { specificFilm } = useSelector(
    (state: IRootState) => state.filmStateData
  );
  const { isLoading } = useSelector((state: IRootState) => state.filmStateData);
  const { filmId } = useParams();
  const dispatch = useAppDispatch();
  useEffect(() => {
    const id = Number(filmId);
    dispatch(getIndividualFilmActions({ id }));
  }, [dispatch, filmId]);

  return (
    <Fragment>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="filmDetailsContainer">
            <li style={{ marginBottom: "10px" }}>
              <span className="title-text">{Strings.title}:</span>
              {specificFilm.title}
            </li>

            <li style={{ marginBottom: "10px" }}>
              <span className="title-text">{Strings.episode}:</span>
              {specificFilm.episode_id}
            </li>

            <li style={{ marginBottom: "10px" }}>
              <span className="title-text">{Strings.openingCrawl}:</span>
              {specificFilm.opening_crawl}
            </li>

            <li style={{ marginBottom: "10px" }}>
              <span className="title-text">{Strings.director}:</span>
              {specificFilm.director}
            </li>

            <li style={{ marginBottom: "10px" }}>
              <span className="title-text">{Strings.producer}:</span>
              {specificFilm.producer}
            </li>

            <li style={{ marginBottom: "10px" }}>
              <span className="title-text">{Strings.releaseDate}:</span>
              {moment(specificFilm.release_date)?.format("DD-MM-YYYY")}
            </li>

            <li style={{ marginBottom: "10px" }}>
              <span className="title-text">{Strings.created}:</span>
              {moment(specificFilm.created)?.format("YYYY-MM-DD HH:mm:ss")}
            </li>

            <li style={{ marginBottom: "10px" }}>
              <span className="title-text">{Strings.edited}:</span>
              {moment(specificFilm.edited)?.format("YYYY-MM-DD HH:mm:ss")}
            </li>
          </div>

          <Link to="/films" title={Strings.back}>
            <button id="backButton">{Strings.back}</button>
          </Link>
        </>
      )}
    </Fragment>
  );
};

export default FilmDetails;
