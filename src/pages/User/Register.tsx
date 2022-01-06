import { FC, useState } from "react";
import { Form, Button, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { LOGIN_ROUTE } from "../../utils/constsRoutes";
import { userRegistration } from "../../redux/async-actions/user";

const Registeration: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const register = () => {
    dispatch(userRegistration(email, password, name, navigate));
  };

  return (
    <Form
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => e.preventDefault()}>
      <h2 className="text-center">Register Page</h2>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
          type="text"
          placeholder="Enter Name"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
          type="email"
          placeholder="Enter email"
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setPassword(e.target.value);
          }}
          type="password"
          placeholder="Password"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Row className="d-flex justify-content-between mt-3 pt-3 pr-3">
        <div>
          If you have an account? <NavLink to={LOGIN_ROUTE}>LogIn</NavLink>
        </div>
      </Row>
      <Button
        className="mt-3 align-self-end"
        variant="outline-success"
        type="submit"
        onClick={register}>
        Registration
      </Button>
    </Form>
  );
};

export default Registeration;
