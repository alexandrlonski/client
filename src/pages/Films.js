import React from "react";
import Film from "../components/Film/Film";
import { films } from "../data/Data";

const Films = () => {
  return (
    <div className="d-flex justify-content-center" style={{ padding: "50px" }}>
      {films.map((film) => (
        <Film key={film.id} title={film.title} src={film.src} desc={film.desc} id={film.id} />
      ))}
    </div>
  );
};

export default Films;
