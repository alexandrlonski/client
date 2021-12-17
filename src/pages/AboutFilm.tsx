import { FC } from "react";
import FilmDesc from "../components/FilmDesc/FilmDesc";
import { films } from "../data/data";
import { useParams } from "react-router-dom";

const AboutFilm: FC = () => {
  const { id } = useParams();
  const filmId = Number(id);
  return (
    <div>
      {films
        .filter((film) => film.id === filmId)
        .map((film) => (
          <FilmDesc
            id={film.id}
            key={film.id}
            title={film.title}
            src={film.src}
            desc={film.desc}
          />
        ))}
    </div>
  );
};

export default AboutFilm;
