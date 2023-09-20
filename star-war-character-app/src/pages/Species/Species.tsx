import { useSelector } from "react-redux";
import { IRootState, useAppDispatch } from "../../redux/store";
// import { Loader } from "../../Loader";
import { useEffect } from "react";
import { getSpeciesActions } from "../../redux/SpeciesSlice/SpeciesAsyncThunk";
// import Pagination from "../../Components/Pagination";
import constant from "../../config/constant";
import { setTotalPageCount } from "../../service/ApiHelper";
// import { speciesAction } from "../../redux/SpeciesSlice";
import { Link } from "react-router-dom";
import { getImageActions } from "../../redux/ImageSlice/ImageAsyncThunk";
import { speciesAction } from "../../redux/SpeciesSlice/SpeciesSlice";
import { Loader } from "../../Loader/Loader";
import Pagination from "../../Components/Pagination/Pagination";
// import { getImageActions } from "../../redux/imageSlice/imageAsyncThunk";

const Species = () => {
  const {list,page, total, limit} = useSelector(
    (state: IRootState) => state.speciesStateData
  );
  const imageList = useSelector((state:IRootState)=>state.imageStateData.list)
  const dispatch = useAppDispatch()
  const loading = useSelector((state: IRootState) => state.speciesStateData.isLoading)
  const totalPage = setTotalPageCount(total, limit);
  useEffect(()=>{
    dispatch(getSpeciesActions({
      id: constant.defaultUserId,
        page,
        size: limit,
    }))
    dispatch(getImageActions({
      id: constant.defaultUserId
    }))
  },[dispatch, limit, page])

  const pageChangeHandler = (currentPage: number) => {
    const page = Number(currentPage);
    dispatch(speciesAction.setCurrentPage(page))
    dispatch(
      getSpeciesActions({
        page,
        size: limit,
      })
    );
  };
  return (
    <>
    <div className="species-container">
    {loading ? <Loader/>:<div>
      {list.map((species, id) => {
        const image  = imageList[id]
        const splitId = species?.url?.split("/species/");
        return (
          <ul key={id}>
            <div>
              <img style={{height: "200px"}} src={image?.download_url} alt={image?.author} />
            </div>
              <h4>Name:</h4>
            <Link to={`/species/${splitId?.[1]?.replace("/", "")}`}>
              {species.name}
            </Link>
            <p>
              <h4>classification:</h4>
              {species.classification}
            </p>
            <p>
              <h4>designation:</h4>
              {species.designation}
            </p>
            <p>
              <h4>average_height:</h4>
              {species.average_height}
            </p>
            <p>
              <h4>average_lifespan:</h4>
              {species.average_lifespan}
            </p>
            <p>
              <h4>eye_colors:</h4>
              {species.eye_colors}
            </p>
            <p>
              <h4>hair_colors:</h4>
              {species.hair_colors}
            </p>
            <p>
              <h4>skin_colors:</h4>
              {species.skin_colors}
            </p>
            <p>
              <h4>language:</h4>
              {species.language}
            </p>
            <p>
              <h4>Home World:</h4>
              {species.homeworld}
            </p>
            <p>
              <h4>url:</h4>
              {species.url}
            </p>
            <p>
              <h4>created:</h4>
              {species.created}
            </p>
            <p>
              <h4>edited:</h4>
              {species.edited}
            </p>
          </ul>
        );
      })}
      </div>}
      <Pagination
        page={page}
        onPageChangeHandler={pageChangeHandler}
        totalPages={totalPage > 0
          ? totalPage
          : constant.page.defaultCurrentPaginationNumber}
      />
      </div>
    </>
  );
};
export default Species;
