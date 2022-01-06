import { FC } from "react";
import { IFilm } from "../../types/film";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducer/rootReducer";
import FilmPreview from "../../components/Admin/FilmPreview";

const FilmPrev: FC = () => {
  const film: IFilm = useSelector((state: RootState) => state.filmId);

  return (
    <>
      <FilmPreview
        id={film.id}
        key={film.id}
        title={film.title}
        img={film.img}
        description={film.description}
      />
    </>
  );
};

export default FilmPrev;
