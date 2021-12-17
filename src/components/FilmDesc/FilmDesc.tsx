import { FC } from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { IFilm } from "../../types/film";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducer/rootReducer";
import { BUY_TICKET } from "../../utils/constsRoutes";

const FilmDesc: FC<IFilm> = (props) => {
  const { desc, src, title } = props;
  const { isAuth } = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();

  return (
    <Card className="w-100 flex-row">
      <Card.Img variant="top" className="w-50" src={src} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{desc}</Card.Text>
        <Button
          className="link button cursor"
          onClick={() => (isAuth ? navigate(BUY_TICKET) : navigate("/login"))}>
          Buy a ticket online
        </Button>
      </Card.Body>
    </Card>
  );
};

export default FilmDesc;
