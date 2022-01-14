import React, { useEffect } from "react";
import { ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getCinemas } from "../../../redux/async-actions/cinema";
import { RootState } from "../../../redux/reducer/rootReducer";
import { ICinema } from "../../../types/cinema";
import { SERVER } from "../../../utils/constsPath";
import { ADD_CINEMA, UPDATE_FILM } from "../../../utils/constsRoutes";
import ItemCinema from "./ItemCinema";

const AdminCinemas = () => {
  const dispatch = useDispatch();

  const cinemas: ICinema[] = useSelector((state: RootState) => state.cinemas);
  const { limit, pageNumber, count } = useSelector(
    (state: RootState) => state.cinemasPageView
  );
  useEffect(() => {
    dispatch(getCinemas());
  }, [count]);
  return (
    <ListGroup className="w-100" as="ol">
      <NavLink
        className="admin-list-btn button m-1 bg-success ms-auto "
        to={ADD_CINEMA}>
        Add Cinema
      </NavLink>
      <ListGroup.Item
        as="li"
        className="d-flex flex-direction-column justify-content-between align-items-center text-light bg-secondary">
        <div className="w-25 me-3">Title</div>
        <div className="w-25 me-3">City</div>
        <div className=" me-3 ">Image</div>
        <div className="w-25 ms-5">Description</div>
        <div className=" me-3">Update</div>
        <div className=" me-3">Delete</div>
      </ListGroup.Item>
      {cinemas.map((cinema) => (
        <ItemCinema
          key={cinema.id}
          id={cinema.id}
          description={cinema.description}
          img={cinema.img}
          city={cinema.city}
          name={cinema.name}
        />
      ))}
    </ListGroup>
  );
};

export default AdminCinemas;
