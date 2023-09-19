import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { IRootState, useAppDispatch } from "../../../redux/store";
import { getIndividualFilmActions } from "../../../redux/FilmSlice/FilmAsyncThunk";
import { useEffect } from "react";

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
      <div>
        <div>{specificFilm.title}</div>
        <div>{specificFilm.episode_id}</div>
        <div>{specificFilm.opening_crawl}</div>
        <div>{specificFilm.characters}</div>
        <div>{specificFilm.created}</div>
        <div>{specificFilm.director}</div>
        <div>{specificFilm.producer}</div>
        <div>{specificFilm.release_date}</div>
        <div>{specificFilm.edited}</div>
      </div>
    </>
  );
};

export default FilmDetails;
