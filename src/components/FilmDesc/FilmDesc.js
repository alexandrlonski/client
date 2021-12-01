import React from "react";
import { Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const FilmDesc = (props) => {
  return (
    <Card style={{ width: "100%" }}>
      <Card.Img variant="top" src={props.src} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.desc}</Card.Text>
        <NavLink variant="secondary" className="link button" to="/">
          Buy ticket
        </NavLink>
      </Card.Body>
    </Card>
  );
};
export default FilmDesc;
