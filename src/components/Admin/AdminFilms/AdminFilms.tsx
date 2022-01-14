import React, { useEffect } from "react";
import { ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { showFilms } from "../../../redux/async-actions/film";
import { RootState } from "../../../redux/reducer/rootReducer";
import { IFilm } from "../../../types/film";
import { ADD_FILM } from "../../../utils/constsRoutes";
import PaginationList from "../../Common/Pagination";
import ItemFilm from "./ItemFilm";
import "./AdminFilms.scss";

const FilmsAdmin = () => {
  const dispatch = useDispatch();
  const films: IFilm[] = useSelector((state: RootState) => state.films);
  const { limit, pageNumber, count } = useSelector(
    (state: RootState) => state.filmsPageView
  );

  useEffect(() => {
    dispatch(showFilms(pageNumber, limit));
  }, [pageNumber, dispatch, limit, count]);
  return (
    <div className="w-100 d-flex flex-column justify-content-center align-items-center ">
      <div className="w-100 mb-2">
        <ListGroup as="ul">
          <NavLink
            className="admin-list-btn button m-1 bg-success ms-auto text-light"
            to={ADD_FILM}>
            Add Film
          </NavLink>
          <ListGroup.Item
            as="li"
            className="d-flex flex-direction-column justify-content-between align-items-center text-light bg-secondary">
            <div className="w-25 me-3">Title</div>
            <div className=" me-3">Image</div>
            <div className="w-25 ms-5 me-3">Description</div>
            <div className=" me-3">Update</div>
            <div className=" me-3">Delete</div>
          </ListGroup.Item>
          {films.map((film) => (
            <ItemFilm
              key={film.id}
              id={film.id}
              description={film.description}
              img={film.img}
              title={film.title}
            />
          ))}
        </ListGroup>
      </div>
      <PaginationList />
    </div>
  );
};

export default FilmsAdmin;
