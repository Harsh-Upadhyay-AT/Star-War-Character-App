import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { IRootState, useAppDispatch } from "../../../redux/store";
import { getIndividualFilmActions } from "../../../redux/FilmSlice/FilmAsyncThunk";
import { useEffect } from "react";
import { Strings } from "../../../resource/Strings";
import moment from "moment";

const FilmDetails = () => {
  const { specificFilm } = useSelector(
    (state: IRootState) => state.filmStateData
  );
  const { filmId } = useParams();
  const dispatch = useAppDispatch();
  useEffect(() => {
    const id = Number(filmId);
    dispatch(getIndividualFilmActions({ id }));
  }, [dispatch, filmId]);

  return (
    <>
    <div></div>
      <div style={{ padding: "20px", border: "1px solid #ccc" }}>
        <div style={{ marginBottom: "10px" }}>{Strings.title}: {specificFilm.title}</div>
        <div style={{ marginBottom: "10px" }}>{Strings.episode}: {specificFilm.episode_id}</div>
        <div style={{ marginBottom: "10px" }}>{Strings.openingCrawl}: {specificFilm.opening_crawl}</div>
        <div style={{ marginBottom: '10px' }}>{Strings.created}: {moment(specificFilm.created)?.format("YYYY-MM-DD HH:mm:ss")}</div>
        <div style={{ marginBottom: "10px" }}>{Strings.director}: {specificFilm.director}</div>
        <div style={{ marginBottom: "10px" }}>{Strings.producer}: {specificFilm.producer}</div>
        <div style={{ marginBottom: "10px" }}>{Strings.releaseDate}: {specificFilm.release_date}</div>
        <div style={{ marginBottom: "10px" }}>{Strings.edited}: {moment(specificFilm.edited)?.format("YYYY-MM-DD HH:mm:ss")}</div>
      </div>
    </>
  );
};

export default FilmDetails;
