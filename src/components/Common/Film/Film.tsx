import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {
  BUY_TICKET,
  FILMS_ROUTE,
  LOGIN_ROUTE,
} from "../../../utils/constsRoutes";
import { SERVER } from "../../../utils/constsPath";
import { IFilm } from "../../../types/film";
import { changeFilm } from "../../../redux/action-creators/film";
import { RootState } from "../../../redux/reducer/rootReducer";
import { toggleShowDeleteFilmModal } from "../../../redux/action-creators/modal";
import { ADMIN } from "../../../utils/constsRoles";
import AdminFilmBtn from "../../Admin/AdminFilmBtn";
import UserFilmBtn from "../../User/UserFilmBtn";

import "./Film.scss";

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
          <AdminFilmBtn delete={filmDelete} />
        ) : (
          <UserFilmBtn buy={buyTicket} read={readMore} />
        )}
      </Card.Body>
    </Card>
  );
};

export default Film;
