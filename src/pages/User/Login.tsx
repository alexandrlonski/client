import React, { FC, useState } from "react";
import { Form, Button, Row } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { REGISTRATION_ROUTE } from "../../utils/constsRoutes";
import { userLogin } from "../../redux/async-actions/user";
import { useDispatch } from "react-redux";
import { IFormLogin } from "../../types/validation";
import {
  validateEmail,
  validatePassword,
} from "../../common-functions/validation";

const Login: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");

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

  const login = () => {
    dispatch(userLogin(email, password, navigate));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (emailError === "" && passwordError === "") {
      login();
    }
  };
  const handleClick = (e: React.MouseEvent) => {
    setEmailError(validateEmail(email));
    setPasswordError(validatePassword(password));
  };

  // const formInitialValues: IFormLogin = { email: "", password: "" };
  // const errorsInitialValues: IFormLogin = {
  //   email: "",
  //   password: "",
  // };
  // const [formValues, setFormValues] = useState(formInitialValues);
  // const [formErrors, setFormErrors] = useState(errorsInitialValues);

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   setFormValues({ ...formValues, [name]: value });
  // };

  // const handleClick = (e: React.MouseEvent) => {
  //   setFormErrors(validateLog(formValues));
  // };

  // const login = () => {
  //   dispatch(userLogin(formValues.email, formValues.password, navigate));
  // };

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   if (formErrors.email.length === 0 && formErrors.password.length === 0) {
  //     login();
  //   }
  // };

  return (
    <Form className="form" onSubmit={handleSubmit}>
      <h2 className="text-center">LogIn Page</h2>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          name="email"
          value={email}
          onChange={handleChangeEmail}
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
          No account? <NavLink to={REGISTRATION_ROUTE}>Registration</NavLink>
        </div>
      </Row>
      <Button
        className="mt-3 align-self-end"
        variant="outline-success"
        type="submit"
        onClick={handleClick}>
        LogIn
      </Button>
    </Form>
  );
};

export default Login;
