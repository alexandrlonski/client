import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Film from "../components/Film/Film";
import { RootState } from "../redux/reducer/rootReducer";
import { IFilm } from "../types/film";
import PaginationList from "../components/Pagination/PaginationList";
import { showFilms } from "../redux/async-actions/film";

const Films: FC = () => {
  const films: IFilm[] = useSelector((state: RootState) => state.films);
  const { limit, pageNumber } = useSelector(
    (state: RootState) => state.pageView
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showFilms(pageNumber, limit));
  }, [pageNumber, dispatch, limit]);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center flex-wrap">
      <div className="d-flex justify-content-center flex-wrap">
        {films.map((film) => (
          <Film
            key={film.id}
            id={film.id}
            description={film.description}
            img={film.img}
            title={film.title}
          />
        ))}
      </div>
      <PaginationList />
    </div>
  );
};

export default Films;
