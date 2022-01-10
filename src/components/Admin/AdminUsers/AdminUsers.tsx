import React from "react";
import { ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/reducer/rootReducer";
import { IUserGet } from "../../../types/user";

const AdminUsers = () => {
  // const users: IUserGet[] = useSelector((state: RootState) => state.user);

  return (
    <ListGroup className="w-100" as="ol" numbered>
      {/* {users.map((film) => (
        <ListGroup.Item
          as="li"
          className="d-flex flex-direction-column justify-content-between align-items-center">
          <div className="w-25 me-3">{film.title}</div>

          <img
            className=" ms-3 me-5 small-image cover"
            src={SERVER + film.img}
            alt="image: film"
          />
          <div className="w-25 me-3">{film.description}</div>
          <NavLink className="link button m-1" to={UPDATE_FILM}>
            update
          </NavLink>
          <button className="m-3 link button">delete</button>
        </ListGroup.Item>
      ))} */}
    </ListGroup>
  );
};

export default AdminUsers;
