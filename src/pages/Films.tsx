import { FC } from "react";
import Film from "../components/Film/Film";
import { films } from "../data/data";

const Films: FC = () => {
  return (
    <div className="d-flex justify-content-center flex-wrap">
      {films.map((film) => (
        <Film
          key={film.id}
          title={film.title}
          src={film.src}
          desc={film.desc}
          id={film.id}
        />
      ))}
    </div>
  );
};

export default Films;
