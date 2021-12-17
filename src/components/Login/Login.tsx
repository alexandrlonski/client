import React, { FC, useState } from "react";
import { Form, Button, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { REGISTRATION_ROUTE } from "../../utils/constsRoutes";
import { authRequest } from "../../requests/authRequest";

const Login: FC = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <Form
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => e.preventDefault()}>
      <h2 className="text-center">LogIn Page</h2>
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
          No account? <NavLink to={REGISTRATION_ROUTE}>Registration</NavLink>
        </div>
      </Row>
      <Button
        className="mt-3 align-self-end"
        variant="outline-success"
        type="submit"
        onClick={() =>
          authRequest(email, password, dispatch, pathname, navigate)
        }>
        LogIn
      </Button>
    </Form>
  );
};

export default Login;
