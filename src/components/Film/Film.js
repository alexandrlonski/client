import React from "react";
import { Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FILMS_ROUTE } from "../../utils/consts";
import { useDispatch } from "react-redux";
import { changeFilm } from "../../store/FilmReducer";
import "./Film.scss";

const Film = (props) => {
  const dispatch = useDispatch();

  return (
    <Card className="card">
      <Card.Img variant="top" src={props.src} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text className="truncate-text">{props.desc}</Card.Text>
        <NavLink
          onClick={() => dispatch(changeFilm(props.id))}
          variant="secondary"
          className="link button"
          to={FILMS_ROUTE + "/" + props.id}>
          Read more
        </NavLink>
      </Card.Body>
    </Card>
  );
};

export default Film;
