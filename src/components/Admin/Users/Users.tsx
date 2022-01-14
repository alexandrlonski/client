import { useEffect } from "react";
import { ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../../redux/async-actions/user";
import { RootState } from "../../../redux/reducer/rootReducer";
import User from "./User";
const Users = () => {
  const { users } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  return (
    <div className="w-100 d-flex flex-column justify-content-center align-items-center ">
      <div className="w-100 mb-2">
        <ListGroup as="ul">
          <ListGroup.Item
            as="li"
            className="d-flex flex-direction-column justify-content-between align-items-center text-light bg-secondary">
            <div className="w-25 me-3">Id</div>
            <div className="w-25 me-3">Role</div>
            <div className="w-25 me-3">Name</div>
            <div className="w-25 me-3">Email</div>
          </ListGroup.Item>
          {users.map((user) => (
            <User
              key={user.id}
              id={user.id}
              name={user.name}
              role={user.role}
              email={user.email}
            />
          ))}
        </ListGroup>
      </div>
    </div>
  );
};

export default Users;
