import { FC } from "react";
import { ListGroup } from "react-bootstrap";
import { IGetUser } from "../../../../types/user";

const User: FC<IGetUser> = (props) => {
  const { id, name, role, email } = props;

  return (
    <ListGroup.Item
      as="li"
      className="d-flex flex-direction-column justify-content-between align-items-center">
      <div className="w-25 me-3">{id}</div>
      <div className="w-25 me-3">{role}</div>
      <div className="w-25 me-3">{name}</div>
      <div className="w-25 me-3">{email}</div>
    </ListGroup.Item>
  );
};

export default User;
