import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { BUY_TICKET, FILMS_ROUTE, LOGIN_ROUTE } from "../../../utils/constsRoutes";
import { SERVER } from "../../../utils/constsPath";
import { IFilm } from "../../../types/film";
import { changeFilm } from "../../../redux/action-creators/film";
import "./Film.scss";
import { RootState } from "../../../redux/reducer/rootReducer";
import { toggleShowDeleteFilmModal } from "../../../redux/action-creators/modal";
import { ADMIN } from "../../../utils/constsRoles";

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

  const filmDelete = (): void => {
    dispatch(changeFilm({ id, description, img, title }));
    dispatch(toggleShowDeleteFilmModal(true));
  };
  const { role } = useSelector((state: RootState) => state.user);

  return (
    <Card className="card">
      <Card.Img variant="top" className="film-image cover" src={SERVER + img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text className="truncate-text">{description}</Card.Text>

        {role === ADMIN ? (
          <div className="d-flex justify-content-between">
            <button className="link button">update</button>
            <button className="link button" onClick={filmDelete}>
              delete
            </button>
          </div>
        ) : (
          <div>
            <button className=" link button mb-3" onClick={buyTicket}>
              Buy a ticket online
            </button>
            <button className="link button" onClick={readMore}>
              Read more
            </button>
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

export default Film;
