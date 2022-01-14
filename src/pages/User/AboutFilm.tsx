import { FC } from "react";
import FilmDesc from "../../components/User/FilmDesc";
import { useParams } from "react-router-dom";
import { IFilm } from "../../types/film";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducer/rootReducer";

const AboutFilm: FC = () => {
  const { id } = useParams();
  const filmId = Number(id);
  const films: IFilm[] = useSelector((state: RootState) => state.films);
  const film = films.find((film) => film.id === filmId);
  return (
    <>
      {film ? (
        <FilmDesc
          id={film.id}
          key={film.id}
          title={film.title}
          img={film.img}
          description={film.description}
        />
      ) : null}
    </>
  );
};

export default AboutFilm;
