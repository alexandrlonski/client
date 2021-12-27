import { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/reducer/rootReducer";
import { toggleShowModal } from "../../redux/reducer/modalReducer";
import { Nav, Navbar, Container, Form, Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { USER_ICON, ADMIN_ICON } from "../../data/icon";
import {
  ABOUTUS_ROUTE,
  ADMIN_ROUTE,
  BASKET_ROUTE,
  FILMS_ROUTE,
  LOGIN_ROUTE,
} from "../../utils/constsRoutes";
import "./Header.scss";

const Header: FC = () => {
  const { isAuth, role } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(toggleShowModal(true));
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
              <div onClick={logout} className="link button">
                LogOut
              </div>
              <NavLink to={role === "ADMIN" ? ADMIN_ROUTE : BASKET_ROUTE}>
                <Image
                  className="user-icon"
                  src={role === "ADMIN" ? USER_ICON : ADMIN_ICON}
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
