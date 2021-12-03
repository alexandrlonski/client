import React from "react";
import { Nav, Navbar, Container, Form, Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userLogOut } from "../../store/UserReducer";
import {
  ABOUTUS_ROUTE,
  ADMIN_ROUTE,
  BASKET_ROUTE,
  FILMS_ROUTE,
  LOGIN_ROUTE,
} from "../../utils/consts";
const Header = () => {
  const isAuth = useSelector((store) => store.user.isAuth);
  const role = useSelector((store) => store.user.role);
  const dispatch = useDispatch();
  const logOut = () => {
    if (window.confirm("Do you really want to leave?")) {
      localStorage.clear();
      dispatch(userLogOut());
    }
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
              backgroundColor: "#787978",
              color: "#FFF",
              outline: "none",
              border: "none",
              cursor: "pointer",
            }}>
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
          {isAuth ? (
            <div className="d-flex justify-content-between align-items-center ">
              <NavLink
                onClick={() => logOut()}
                className="link button"
                to={ABOUTUS_ROUTE}>
                LogOut
              </NavLink>
              <NavLink to={role === "ADMIN" ? ADMIN_ROUTE : BASKET_ROUTE}>
                <Image
                  style={{ marginLeft: "5px", width: "34px" }}
                  src={
                    role === "ADMIN"
                      ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG859lMWMgKWIw_iHz-7K5k77ZvxXkDCWLdw&usqp=CAU"
                      : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxk14wu-R6Mv1zP9ObWB9A08P8wra_wxI3JQ&usqp=CAU"
                  }
                  rounded
                />
              </NavLink>
            </div>
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
