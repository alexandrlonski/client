import { FC } from "react";
import { useDispatch } from "react-redux";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FILMS_ROUTE } from "../../utils/constsRoutes";
import { IFilm } from "../../types/film";
import { changeFilm } from "../../redux/reducer/filmReducer";
import "./Film.scss";

const Film: FC<IFilm> = (props) => {
  const { id, desc, src, title } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const chooseFilm = (): void => {
    dispatch(changeFilm(id));
    navigate(`${FILMS_ROUTE}/${id}`);
    localStorage.setItem("filmId", `${id}`);
  };

  return (
    <Card className="card">
      <Card.Img variant="top" src={src} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text className="truncate-text">{desc}</Card.Text>
        <Button onClick={chooseFilm} className="link button">
          Read more
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Film;
