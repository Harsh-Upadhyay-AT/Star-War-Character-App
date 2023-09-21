import { useSelector } from "react-redux";
import { IRootState, useAppDispatch } from "../../redux/store";
import { Fragment, useEffect } from "react";
import { getSpeciesActions } from "../../redux/SpeciesSlice/SpeciesAsyncThunk";
import constant from "../../config/constant";
import { setTotalPageCount } from "../../service/ApiHelper";
import { Link } from "react-router-dom";
import { getImageActions } from "../../redux/ImageSlice/ImageAsyncThunk";
import { speciesAction } from "../../redux/SpeciesSlice/SpeciesSlice";
import { Loader } from "../../Loader/Loader";
import Pagination from "../../Components/Pagination/Pagination";
import { Strings } from "../../resource/Strings";
import "./Species.css";

const Species = () => {
  const { list, page, total, limit } = useSelector(
    (state: IRootState) => state.speciesStateData
  );
  const imageList = useSelector(
    (state: IRootState) => state.imageStateData.list
  );
  const dispatch = useAppDispatch();
  const isLoading = useSelector(
    (state: IRootState) => state.speciesStateData.isLoading
  );
  const totalPage = setTotalPageCount(total, limit);
  useEffect(() => {
    dispatch(
      getSpeciesActions({
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
    dispatch(speciesAction.setCurrentPage(page));
    dispatch(
      getSpeciesActions({
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
            <div className="species-container">
              {list.map((species, id) => {
                const image = imageList[id];
                const splitId = species?.url?.split("/species/");
                return (
                  <div key={id} className="species-card">
                    <img
                      style={{ height: "200px" }}
                      src={image?.download_url}
                      alt={image?.author}
                    />
                    <li style={{ marginBottom: "10px" }}>
                      <span className="title-text">{Strings.name}:</span>{" "}
                      {species.name}
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      <span className="title-text">
                        {Strings.classification}:
                      </span>{" "}
                      {species.classification}
                    </li>
                    <Link to={`/species/${splitId?.[1]?.replace("/", "")}`}>
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
export default Species;
