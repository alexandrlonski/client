import { ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { RootState } from "../../../redux/reducer/rootReducer";
import {
  ADD_CINEMA,
  ADD_FILM,
  ADMIN_CINEMAS,
  ADMIN_FILMS,
  USERS,
} from "../../../utils/constsRoutes";

const AdminOffice = () => {
  const admin = useSelector((state: RootState) => state.user);
  return (
    <div
      className="w-50 d-flex flex-column justify-content-start align-items-start
    ">
      <ListGroup className="w-100">
        <ListGroup.Item action variant="secondary">
          Name: {admin.name}
        </ListGroup.Item>
        <ListGroup.Item action variant="secondary">
          Role: {admin.role}
        </ListGroup.Item>
        <ListGroup.Item action variant="info">
          <NavLink className="link button m-1" to={ADMIN_FILMS}>
            Films
          </NavLink>
        </ListGroup.Item>
        <ListGroup.Item action variant="info">
          <NavLink className="link button m-1" to={ADMIN_CINEMAS}>
            Cinemas
          </NavLink>
        </ListGroup.Item>
        <ListGroup.Item action variant="info">
          <NavLink className="link button m-1" to={ADD_CINEMA}>
            Sessions
          </NavLink>
        </ListGroup.Item>
        <ListGroup.Item action variant="info">
          <NavLink className="link button m-1" to={USERS}>
            Users
          </NavLink>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default AdminOffice;
