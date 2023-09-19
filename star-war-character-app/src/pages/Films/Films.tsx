import { useSelector } from "react-redux"
import { IRootState, useAppDispatch } from "../../redux/store"
import { useEffect } from "react"
import { getFilmActions } from "../../redux/FilmSlice/FilmAsyncThunk"
import { getImageActions } from "../../redux/ImageSlice/ImageAsyncThunk"
import constant from "../../config/constant"
import { Loader } from "../../Loader/Loader"
import { filmAction } from "../../redux/FilmSlice/FilmSlice"
import { setTotalPageCount } from "../../service/ApiHelper"
import { Link } from "react-router-dom"
import Pagination from "../../Components/Pagination/Pagination"

const Films = () => {
    const { list, page, total, limit } = useSelector((state:IRootState)=>state.filmStateData)
    const imageList = useSelector((state:IRootState)=>state.imageStateData.list) 
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
    const loading = useSelector(
        (state: IRootState) => state.filmStateData.isLoading
    )
    const totalPage = setTotalPageCount(total, limit);
  const pageChangeHandler = (currentPage: number) => {
    const page = Number(currentPage);
    dispatch(filmAction.setCurrentPage(page));
    
  };
  return (
    <>
      <div>
        {loading ? (
          <Loader />
        ) : (
          <div className="filmStyle">
            {list?.map((films, id) => {
              const image = imageList[id];
              const splitId = films?.url?.split("/films/");
              return (
                <div key={id}>
                   <img style={{height: "200px"}} src={image?.download_url} alt={image?.author} />
                  <ul>
                    <li>{films.episode_id}</li>
                    <Link to={`/films/${splitId?.[1]?.replace("/", "")}`}>{films.title}</Link>
                    <li>created {films.created}</li>
                    <li>director {films.director}</li>
                    <li>edited {films.edited}</li>
                    <li>opening_crawl {films.opening_crawl}</li>
                    <li>producer  {films.producer}</li>
                    <li>release_date  {films.release_date}</li>
                    {/* <li>{films.url}</li> */}
                  </ul>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <Pagination
        page={page}
        onPageChangeHandler={pageChangeHandler}
        totalPages={
          totalPage > 0 ? totalPage : constant.page.defaultCurrentPaginationNumber
        }
      />
    </>
  );
}

export default Films