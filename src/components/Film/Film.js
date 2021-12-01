import React from "react";
import { Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { ABOUTFILM_ROUTE } from "../../utils/consts";
import { useDispatch } from "react-redux";
import { changeFilm } from "../../store/FilmReducer";

const Film = (props) => {
  const dispatch = useDispatch();

  const changeFilmId = (filmId) => {
    dispatch(changeFilm(filmId));
  };

  return (
    <Card style={{ width: "18rem", margin: "5px" }}>
      <Card.Img variant="top" src={props.src} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.desc}</Card.Text>
        <NavLink
          onClick={() => changeFilmId(props.id)}
          variant="secondary"
          className="link button"
          to={ABOUTFILM_ROUTE}
        >
          Read more
        </NavLink>
      </Card.Body>
    </Card>
  );
};

export default Film;
