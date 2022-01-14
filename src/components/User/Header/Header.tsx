import { FC, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../redux/reducer/rootReducer";
import { getCinemas } from "../../../redux/async-actions/cinema";
import {
  ABOUTUS_ROUTE,
  USER_OFFICE_ROUTE,
  FILMS_ROUTE,
  LOGIN_ROUTE,
} from "../../../utils/constsRoutes";
import { toggleShowLogoutModal } from "../../../redux/action-creators/modal";
import { Nav, Navbar, Container, Form, Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import UserIcon from "../../../assets/users-icons/user.png";

const Header: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCinemas());
  }, []);
  const { isAuth, name } = useSelector((state: RootState) => state.user);
  const cinemas = useSelector((state: RootState) => state.cinemas);

  const logout = () => {
    dispatch(toggleShowLogoutModal(true));
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink className="link" to={ABOUTUS_ROUTE}>
          Cinemas
        </NavLink>
        <Nav className="d-flex justify-content-between ">
          <Form.Select className="select-options">
            <option>City</option>
            {cinemas.map((item) => (
              <option>{item.city}</option>
            ))}
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
              <NavLink className="link" to={USER_OFFICE_ROUTE}>
                <Image className="user-icon" src={UserIcon} rounded />
                <div>{name}</div>
              </NavLink>
            </div>
          ) : (
            <NavLink className="link button" to={LOGIN_ROUTE}>
              LogIn
            </NavLink>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
