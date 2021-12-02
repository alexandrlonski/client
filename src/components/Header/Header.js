import React from "react";
import { Nav, Navbar, Container, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userLogOut } from "../../store/UserReducer";
import {
  ABOUTUS_ROUTE,
  ADMIN_ROUTE,
  FILMS_ROUTE,
  LOGIN_ROUTE,
} from "../../utils/consts";

const Header = () => {
  const isAuth = useSelector((store) => store.user.isAuth);
  const role = useSelector((store) => store.user.role);
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(userLogOut());
  };
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink className="link" to="/">
          Cinema
        </NavLink>
        <Nav className="d-flex justify-content-between ">
          <Form.Select
            style={{
              backgroundColor: "#565E64",
              color: "#FFF",
              outline: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            <option value="1" style={{ color: "#FFF" }}>
              Minsk
            </option>
            <option value="2">Gomel</option>
            <option value="3">Brest</option>
          </Form.Select>

          <NavLink className="link" to={FILMS_ROUTE}>
            Poster
          </NavLink>

          <NavLink className="link" to={ABOUTUS_ROUTE}>
            Cinemas
          </NavLink>
          {role === "ADMIN" && isAuth ? (
            <NavLink className="link button" to={ADMIN_ROUTE}>
              AdminPanel
            </NavLink>
          ) : null}
          {isAuth ? (
            <NavLink
              onClick={() => logOut()}
              className="link button"
              to={ABOUTUS_ROUTE}
            >
              LogOut
            </NavLink>
          ) : (
            <>
              <NavLink className="link button" to={LOGIN_ROUTE}>
                LogIn
              </NavLink>
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
