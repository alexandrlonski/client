import React, { FC, useEffect, useState } from "react";
import { Form, Button, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { LOGIN_ROUTE } from "../../utils/constsRoutes";
import { userRegistration } from "../../redux/async-actions/user";
import { IFormRegistred } from "../../types/validation";
import {
  validateEmail,
  validateName,
  validatePassword,
} from "../../common-functions/validation";

const Registeration: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState<string>("");
  const [nameError, setNameError] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>): any => {
    setName(e.target.value);
    setNameError(validateName(e.target.value));
  };
  const handleFocusName = (e: React.FocusEvent<HTMLInputElement>): any => {
    setNameError(validateName(name));
  };
  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>): any => {
    setEmail(e.target.value);
    setEmailError(validateEmail(e.target.value));
  };
  const handleFocusEmail = (e: React.FocusEvent<HTMLInputElement>): any => {
    setEmailError(validateEmail(email));
  };
  const handleChangePassword = (
    e: React.ChangeEvent<HTMLInputElement>
  ): any => {
    setPassword(e.target.value);
    setPasswordError(validatePassword(e.target.value));
  };
  const handleFocusPassword = (e: React.FocusEvent<HTMLInputElement>): any => {
    setPasswordError(validatePassword(password));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (nameError === "" && emailError === "" && passwordError === "") {
      register();
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    setNameError(validateName(name));
    setEmailError(validateEmail(email));
    setPasswordError(validatePassword(password));
  };

  const register = () => {
    dispatch(userRegistration(email, password, name, navigate));
  };

  return (
    <Form className="form" onSubmit={handleSubmit}>
      <h2 className="text-center">Register Page</h2>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          name="name"
          value={name}
          onChange={handleChangeName}
          onFocus={handleFocusName}
          type="text"
          placeholder="Enter Name"
        />
        <p className="text-danger validation">{nameError}</p>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          name="email"
          value={email}
          onChange={handleChangeEmail}
          onFocus={handleFocusEmail}
          type="email"
          placeholder="Enter email"
        />
        <p className="text-danger validation">{emailError}</p>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          name="password"
          value={password}
          onChange={handleChangePassword}
          onFocus={handleFocusPassword}
          type="password"
          placeholder="Password"
        />
        <p className="text-danger validation">{passwordError}</p>
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
        onClick={handleClick}>
        Registration
      </Button>
    </Form>
  );
};

export default Registeration;
