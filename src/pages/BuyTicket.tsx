import { FC } from "react";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "../redux/reducer/rootReducer";
import Hall from "../components/Hall/Hall";
import { IFilm } from "../types/film";
import { SERVER } from "../utils/constsPath";

const BuyTicket: FC = () => {
  const { id } = useSelector((state: RootState) => state.filmId);
  const films: IFilm[] = useSelector((state: RootState) => state.films);
  const film = films.find((film) => film.id === id);

  return (
    <div className="w-100 d-flex justify-content-between align-items-start">
      <div className="w-40 d-flex justify-content-start align-items-start">
        {film ? (
          <Card className="w-100 ">
            <Card.Img variant="top" className="w-100" src={SERVER + film.img} />
            <Card.Body>
              <Card.Title className="fs-3 ">{film.title}</Card.Title>
              <Card.Text className="fs-6 truncate-text">
                {film.description}
              </Card.Text>
            </Card.Body>
          </Card>
        ) : null}
      </div>
      <div className="w-50 d-flex flex-column justify-content-center align-items-center">
        <Hall />
      </div>
    </div>
  );
};

export default BuyTicket;
