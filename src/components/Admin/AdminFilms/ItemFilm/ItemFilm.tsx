import React, { FC } from "react";
import { ListGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { IFilm } from "../../../../types/film";
import { SERVER } from "../../../../utils/constsPath";
import { UPDATE_FILM } from "../../../../utils/constsRoutes";
import { changeFilm } from "../../../../redux/action-creators/film";
import { toggleShowDeleteFilmModal } from "../../../../redux/action-creators/modal";

const ItemFilm: FC<IFilm> = (props) => {
  const { id, description, img, title } = props;
  const dispatch = useDispatch();
  const filmDelete = (): void => {
    dispatch(changeFilm({ id, description, img, title }));
    dispatch(toggleShowDeleteFilmModal(true));
  };
  const filmUpdate = (): void => {
    dispatch(changeFilm({ id, description, img, title }));
  };
  return (
    <ListGroup.Item
      as="li"
      className="d-flex flex-direction-column justify-content-between align-items-center">
      <div className="w-25 me-3">{title}</div>

      <img
        className=" ms-3 me-5 small-image cover"
        src={SERVER + img}
        alt="image: film"
      />
      <div className="w-25 me-3">{description}</div>
      <NavLink
        className="admin-list-btn button m-1 bg-primary "
        to={UPDATE_FILM}
        onClick={filmUpdate}>
        update
      </NavLink>
      <button
        className="admin-list-btn button m-3 bg-danger "
        onClick={filmDelete}>
        delete
      </button>
    </ListGroup.Item>
  );
};

export default ItemFilm;
