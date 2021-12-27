import { FC } from "react";
import { useSelector } from "react-redux";
import Film from "../components/Film/Film";
import { RootState } from "../redux/reducer/rootReducer";
import { IFilm } from "../types/film";

const Films: FC = () => {
  const films: IFilm[] = useSelector((state: RootState) => state.films);

  return (
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
  );
};

export default Films;
