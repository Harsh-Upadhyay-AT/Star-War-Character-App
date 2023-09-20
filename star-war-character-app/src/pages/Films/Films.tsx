import { useSelector } from "react-redux"
import { IRootState, useAppDispatch } from "../../redux/store"
import { Fragment, useEffect } from "react"
import { getFilmActions } from "../../redux/FilmSlice/FilmAsyncThunk"
import { getImageActions } from "../../redux/ImageSlice/ImageAsyncThunk"
import constant from "../../config/constant"
import { Loader } from "../../Loader/Loader"
import { filmAction } from "../../redux/FilmSlice/FilmSlice"
import { setTotalPageCount } from "../../service/ApiHelper"
import { Link } from "react-router-dom"
import Pagination from "../../Components/Pagination/Pagination"
import "./Films.css";
import { Strings } from "../../resource/Strings"
import moment from "moment"


const Films = () => {
    const { list, page, total, limit } = useSelector((state:IRootState)=>state.filmStateData)
    const imageList = useSelector((state:IRootState)=>state.imageStateData.list)
    const { isLoading } = useSelector((state:IRootState)=>state.filmStateData)
    const dispatch = useAppDispatch();
    useEffect(()=>{
        dispatch(
            getFilmActions({
                page,
                size:limit
            })
        )
        dispatch(getImageActions({
            id:constant.defaultUserId
        }))
    },[dispatch, limit, page])
    const totalPage = setTotalPageCount(total, limit);
  const pageChangeHandler = (currentPage: number) => {
    const page = Number(currentPage);
    dispatch(filmAction.setCurrentPage(page));

  };
  return (
    <Fragment>
        {isLoading && list.length === 0 ? <Loader /> : <>
          <div className="filmStyle">
            {list?.map((films, id) => {
              const image = imageList[id];
              const splitId = films?.url?.split("/films/");
              return (
                <div key={id}>
                  <img src={image?.download_url} alt={image?.author}  />
                  <li style={{ marginBottom: '10px' }}>
                    <span className="title-text">{Strings.title}</span> {films.title}
                      </li>
                    <li style={{ marginBottom: '10px' }}>
                    <span className="title-text">{Strings.episode}</span> {films.episode_id}
                      </li>
                    <li style={{ marginBottom: '10px'}}>
                      <span className="title-text">{Strings.created}</span> {moment(films.created)?.format("YYYY-MM-DD HH:mm:ss")}
                      </li>
                    <li style={{ marginBottom: '10px' }}>
                      <span className="title-text">{Strings.director}</span> {films.director}</li>
                    <li style={{ marginBottom: '10px' }}>
                      <span className="title-text">{Strings.edited}</span> {moment(films.edited)?.format("YYYY-MM-DD HH:mm:ss")}</li>
                    <li style={{ marginBottom: '10px' }}>
                      <span className="title-text">{Strings.openingCrawl}</span> {films.opening_crawl}</li>
                    <li style={{ marginBottom: '10px' }}>
                      <span className="title-text">{Strings.producer}</span>: {films.producer}</li>
                    <li style={{ marginBottom: '10px' }}>
                      <span className="title-text">{Strings.releaseDate}</span>: {moment(films.release_date)?.format("DD-MM-YYYY")}</li>
                      <Link to={`/films/${splitId?.[1]?.replace("/", "")}`} style={{ color: 'blue', textDecoration: 'underline' }}>
                      <button>
                        {Strings.view}
                      </button>
                      </Link>
                </div>
              );
            })}
          </div>
          <div className = "pagination">
          <Pagination
            page={page}
            onPageChangeHandler={pageChangeHandler}
            totalPages={totalPage > 0 ? totalPage : constant.page.defaultCurrentPaginationNumber}
          />

      </div>
    </>}
    </Fragment>
  );

}

export default Films