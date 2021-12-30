import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { BUY_TICKET, FILMS_ROUTE, LOGIN_ROUTE } from "../../utils/constsRoutes";
import { SERVER } from "../../utils/constsPath";
import { IFilm } from "../../types/film";
import { changeCount, changeFilm } from "../../redux/action-creators/film";
import "./Film.scss";
import { RootState } from "../../redux/reducer/rootReducer";
import { deleteFilm } from "../../redux/async-actions/film";
import { FILMDELETED } from "../../utils/constsSuccess";
import { changeTextModal } from "../../redux/action-creators/modal";

const Film: FC<IFilm> = (props) => {
  const { id, description, img, title } = props;
  const { isAuth } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const readMore = (): void => {
    dispatch(changeFilm({ id, description, img, title }));
    navigate(`${FILMS_ROUTE}/${id}`);
    localStorage.setItem("film", JSON.stringify(props));
  };
  const buyTicket = (): void => {
    dispatch(changeFilm({ id, description, img, title }));
    isAuth ? navigate(BUY_TICKET) : navigate(LOGIN_ROUTE);
    localStorage.setItem("film", JSON.stringify(props));
  };
  const { count } = useSelector((state: RootState) => state.pageView);

  const filmDelete = (): void => {
    dispatch(deleteFilm(id));
    dispatch(changeCount(count - 1));
    dispatch(changeTextModal(FILMDELETED));
  };
  const { role } = useSelector((state: RootState) => state.user);

  return (
    <Card className="card">
      <Card.Img variant="top" className="filmImage cover" src={SERVER + img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text className="truncate-text">{description}</Card.Text>
        <Button variant="secondary" className=" link button mb-3" onClick={buyTicket}>
          Buy a ticket online
        </Button>
        <Button variant="secondary" className="link button" onClick={readMore}>
          Read more
        </Button>
        {role === "ADMIN" && (
          <Button variant="secondary" className="link button" onClick={filmDelete}>
            delete
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default Film;
