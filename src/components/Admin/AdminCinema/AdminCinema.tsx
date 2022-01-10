import React from "react";
import { ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { RootState } from "../../../redux/reducer/rootReducer";
import { ICinema } from "../../../types/cinema";
import { SERVER } from "../../../utils/constsPath";
import { ADD_CINEMA, UPDATE_FILM } from "../../../utils/constsRoutes";

const AdminCinemas = () => {
  const cinemas: ICinema[] = useSelector((state: RootState) => state.cinemas);

  return (
    <ListGroup className="w-100" as="ol" numbered>
      <NavLink className="link button m-1" to={ADD_CINEMA}>
        Add Film
      </NavLink>
      {cinemas.map((cinema) => (
        <ListGroup.Item
          as="li"
          className="d-flex flex-direction-column justify-content-between align-items-center">
          <div className="w-25 me-3">{cinema.name}</div>

          <img
            className=" ms-3 me-5 small-image cover"
            src={SERVER + cinema.img}
            alt="image: film"
          />
          <div className="w-25 me-3">{cinema.description}</div>
          <NavLink className="link button m-1" to={UPDATE_FILM}>
            update
          </NavLink>
          <button className="m-3 link button">delete</button>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default AdminCinemas;
