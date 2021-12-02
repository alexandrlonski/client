import React from "react";
import { Form, Button, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { userIsLogin } from "../../store/UserReducer";
import { NavLink, useLocation } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../../utils/consts";

const Authorization = () => {
  const dispatch = useDispatch();
  const logIn = (bool) => {
    dispatch(userIsLogin(bool));
  };
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;

  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      {!isLogin ? (
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" />
        </Form.Group>
      ) : null}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
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
        onClick={() => logIn(true)}
      >
        {isLogin ? "Log In" : "Registration"}
      </Button>
    </Form>
  );
};

export default Authorization;
