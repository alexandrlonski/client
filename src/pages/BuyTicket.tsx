import { FC } from "react";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { films } from "../data/data";
import { RootState } from "../redux/reducer/rootReducer";
import Hall from "../components/Hall/Hall";

const BuyTicket: FC = () => {
  const { filmId } = useSelector((state: RootState) => state.filmId);
  return (
    <div className="w-100 d-flex justify-content-between align-items-start">
      <div className="w-40 d-flex justify-content-start align-items-start">
        {films
          .filter((film) => film.id === filmId)
          .map((film) => (
            <Card className="w-100 ">
              <Card.Img variant="top" className="w-100" src={film.src} />
              <Card.Body>
                <Card.Title className="fs-3 ">{film.title}</Card.Title>
                <Card.Text className="fs-6 truncate-text">
                  {film.desc}
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
      </div>
      <div className="w-50 d-flex flex-column justify-content-center align-items-center">
        <Hall />
      </div>
    </div>
  );
};

export default BuyTicket;
