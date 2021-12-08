import React, { useState } from "react";
import { Form, Button, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { changeUserRole, userIsLogin } from "../../store/UserReducer";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import {
  ABOUTUS_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
} from "../../utils/consts";
import { login, registration } from "../../http/userApi";

const Authorization = () => {
  const dispatch = useDispatch();
  const logIn = (bool) => {
    dispatch(userIsLogin(bool));
  };
  const changeRole = (userRole) => {
    dispatch(changeUserRole(userRole));
  };
  const location = useLocation();
  const navigate = useNavigate();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [role, setRole] = useState("");

  const changeRequest = async () => {
    try {
      let data;
      if (isLogin) {
        data = await login(email, password);
      } else {
        data = await registration(email, password);
      }
      logIn(true);
      changeRole(data.role);
      navigate(ABOUTUS_ROUTE);
    } catch (e) {
      alert(e.response.data.message);
    }
  };

  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      <h2 className="text-center">
        {isLogin ? "LogIn Page" : "Register Page"}
      </h2>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          onChange={(e) => {
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
        {isLogin ? (
          <div>
            No account? <NavLink to={REGISTRATION_ROUTE}>Registration </NavLink>
          </div>
        ) : (
          <div>
            If you have an account? <NavLink to={LOGIN_ROUTE}>LogIn</NavLink>
          </div>
        )}
      </Row>
      <Button
        className="mt-3 align-self-end"
        variant="outline-success"
        type="submit"
        onClick={() => changeRequest()}>
        {isLogin ? "LogIn" : "Registration"}
      </Button>
    </Form>
  );
};

export default Authorization;
