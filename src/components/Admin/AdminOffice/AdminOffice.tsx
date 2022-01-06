import { ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { RootState } from "../../../redux/reducer/rootReducer";
import { ADD_CINEMA, ADD_FILM } from "../../../utils/constsRoutes";

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
          <NavLink className="link button m-1" to={ADD_FILM}>
            Add Film
          </NavLink>
        </ListGroup.Item>
        <ListGroup.Item action variant="info">
          <NavLink className="link button m-1" to={ADD_CINEMA}>
            Add Cinema
          </NavLink>
        </ListGroup.Item>
        <ListGroup.Item action variant="info">
          <NavLink className="link button m-1" to={ADD_CINEMA}>
            Add Session
          </NavLink>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default AdminOffice;
