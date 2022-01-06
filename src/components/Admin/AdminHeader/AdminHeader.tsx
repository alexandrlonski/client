import { FC, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../redux/reducer/rootReducer";
import { toggleShowLogoutModal } from "../../../redux/action-creators/modal";
import { Nav, Navbar, Container, Form, Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { ADMIN_ICON } from "../../../data/icon";
import {
  ABOUTUS_ROUTE,
  ADMIN_OFFICE_ROUTE,
  FILMS_ROUTE,
} from "../../../utils/constsRoutes";

const AdminHeader: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {}, []);
  const { name } = useSelector((state: RootState) => state.user);
  const cinemas = useSelector((state: RootState) => state.cinemas);

  const logout = () => {
    dispatch(toggleShowLogoutModal(true));
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink className="link" to={ADMIN_OFFICE_ROUTE}>
          AdminPage
        </NavLink>
        <Nav className="d-flex justify-content-between ">
          <Form.Select className="select-options">
            <option onClick={() => console.log(1)}>City</option>
            {cinemas.map((item) => (
              <option>{item.city}</option>
            ))}
          </Form.Select>

          <NavLink className="link" to={FILMS_ROUTE}>
            Films
          </NavLink>

          <NavLink className="link" to={ABOUTUS_ROUTE}>
            Cinemas
          </NavLink>

          <div className="d-flex justify-content-between align-items-center ">
            <div onClick={logout} className="link button">
              LogOut
            </div>
            <NavLink className="link" to={ADMIN_OFFICE_ROUTE}>
              <Image className="user-icon" src={ADMIN_ICON} rounded />
              <div>{name}</div>
            </NavLink>
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default AdminHeader;
