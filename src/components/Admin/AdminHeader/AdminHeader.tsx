import { FC, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../redux/reducer/rootReducer";
import { toggleShowLogoutModal } from "../../../redux/action-creators/modal";
import { Nav, Navbar, Container, Form, Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import {
  ABOUTUS_ROUTE,
  ADMIN_OFFICE_ROUTE,
  FILMS_ROUTE,
} from "../../../utils/constsRoutes";
import AdminIcon from "../../../assets/users-icons/admin.png";

const AdminHeader: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {}, []);
  const { name } = useSelector((state: RootState) => state.user);
  const cinemas = useSelector((state: RootState) => state.cinemas);

  const logout = () => {
    dispatch(toggleShowLogoutModal(true));
  };
  // const reader = new FileReader();
  // reader.addEventListener('loadend', (data) => {
  //     data = base64
  // });
  // reader.readAsDataURL(files[0]);
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink className="link" to={ADMIN_OFFICE_ROUTE}>
          AdminPage
        </NavLink>
        <Nav className="d-flex justify-content-between ">
          <div className="d-flex justify-content-between align-items-center ">
            <div onClick={logout} className="link button">
              LogOut
            </div>
            <NavLink className="link" to={ADMIN_OFFICE_ROUTE}>
              <Image className="user-icon" src={AdminIcon} rounded />
              <div>{name}</div>
            </NavLink>
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default AdminHeader;
