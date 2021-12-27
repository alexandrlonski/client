import { FC } from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { IFilm } from "../../types/film";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducer/rootReducer";
import { BUY_TICKET, LOGIN_ROUTE } from "../../utils/constsRoutes";
import { SERVER } from "../../utils/constsPath";

const FilmDesc: FC<IFilm> = (props) => {
  const { description, img, title } = props;
  const { isAuth } = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();

  return (
    <Card className="w-100 flex-row">
      <Card.Img variant="top" className="w-50" src={SERVER + img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button
          variant="secondary"
          className="link button cursor"
          onClick={() =>
            isAuth ? navigate(BUY_TICKET) : navigate(LOGIN_ROUTE)
          }>
          Buy a ticket online
        </Button>
      </Card.Body>
    </Card>
  );
};

export default FilmDesc;
