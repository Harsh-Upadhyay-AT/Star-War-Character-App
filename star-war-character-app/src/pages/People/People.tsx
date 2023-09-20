import { useSelector } from "react-redux";
import { IRootState, useAppDispatch } from "../../redux/store";
import { Fragment, useEffect } from "react";
import { getPeopleActions } from "../../redux/PeopleSlice/PeopleAsyncThunk";
import constant from "../../config/constant";
import { setTotalPageCount } from "../../service/ApiHelper";
import { Link } from "react-router-dom";
import { getImageActions } from "../../redux/ImageSlice/ImageAsyncThunk";
import { peopleAction } from "../../redux/PeopleSlice/PeopleSlice";
import { Loader } from "../../Loader/Loader";
import Pagination from "../../Components/Pagination/Pagination";
import "./People.css";
import { Strings } from "../../resource/Strings";

const People = () => {
  const { list, page, total, limit } = useSelector(
    (state: IRootState) => state.peopleStateData
  );
  const imageList = useSelector(
    (state: IRootState) => state.imageStateData.list
  );
  const isLoading = useSelector(
    (state: IRootState) => state.peopleStateData.isLoading
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(
      getPeopleActions({
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

  const totalPage = setTotalPageCount(total, limit);
  const pageChangeHandler = (currentPage: number) => {
    const page = Number(currentPage);
    dispatch(peopleAction.setCurrentPage(page));
    list.forEach((film, index) => {
      dispatch(getImageActions({ id: index }));
    });
    dispatch(
      getPeopleActions({
        page,
        size: limit,
      })
    );
  };
return (
    <Fragment>
    {isLoading && list.length === 0 ? (
        <Loader />
    ) : (
        <>
        <div className="people-container">
            {list.map((person, id) => {
            const image = imageList[id];
            const splitId = person?.url?.split("/people/");
            return (
                <div className="person-card" key={id}>
                    <img src={image?.download_url} alt={image?.author} />
                <div className="detail-item">
                    <label>{Strings.name}:</label> {person?.name}
                </div>
            <div className="detail-item">
                <label>{Strings.height}:</label> {person.height}
            </div>
            <div className="detail-item">
                <label>{Strings.skinColor}:</label> {person.skin_color}
            </div>
            <div className="detail-item">
                <label>{Strings.hairColor}:</label> {person.hair_color}
            </div>
            <div className="detail-item">
                <label>{Strings.eyeColor}:</label> {person.eye_color}
            </div>
            <div className="detail-item">
                <label>{Strings.birthYear}:</label> {person.birth_year}
            </div>
            <div className="detail-item">
                <label>{Strings.gender}:</label> {person.gender}
            </div>
                <button>
                    <Link to={`/people/${splitId?.[1]?.replace("/", "")}`}>
                        {Strings.view}
                    </Link>
                </button>
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
    );
};
export default People;
