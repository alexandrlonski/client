import React, { FC } from "react";
import { ListGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { ICinema } from "../../../../types/cinema";
import { SERVER } from "../../../../utils/constsPath";
import { UPDATE_CINEMA } from "../../../../utils/constsRoutes";
import { changeCinema } from "../../../../redux/action-creators/cinema";
import { toggleShowDeleteFilmModal } from "../../../../redux/action-creators/modal";

const ItemCinema: FC<ICinema> = (props) => {
  const { id, description, img, name, city } = props;
  const dispatch = useDispatch();

  const cinemaDelete = (): void => {
    dispatch(toggleShowDeleteFilmModal(true));
    dispatch(changeCinema(props));
  };
  const cinemaUpdate = (): void => {
    dispatch(changeCinema(props));
  };
  return (
    <ListGroup.Item
      as="li"
      className="d-flex flex-direction-column justify-content-between align-items-center">
      <div className="w-25 me-3 ms-1">{name}</div>
      <div className="w-25 me-3">{city}</div>
      <img
        className=" ms-3 me-5 small-image cover"
        src={SERVER + img}
        alt="image: film"
      />
      <div className="w-25 me-3">{description}</div>
      <NavLink
        className="admin-list-btn button bg-primary m-1"
        to={UPDATE_CINEMA}
        onClick={cinemaUpdate}>
        update
      </NavLink>
      <button
        className="admin-list-btn button bg-danger m-3"
        onClick={cinemaDelete}>
        delete
      </button>
    </ListGroup.Item>
  );
};

export default ItemCinema;
