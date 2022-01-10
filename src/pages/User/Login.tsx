import React, { FC, useState } from "react";
import { Form, Button, Row } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { REGISTRATION_ROUTE } from "../../utils/constsRoutes";
import { userLogin } from "../../redux/async-actions/user";
import { useDispatch } from "react-redux";
import { IFormLogin } from "../../types/validation";
import { validateLog } from "../../common-functions/validation";

const Login: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formInitialValues: IFormLogin = { email: "", password: "" };
  const errorsInitialValues: IFormLogin = {
    email: "",
    password: "",
  };
  const [formValues, setFormValues] = useState(formInitialValues);
  const [formErrors, setFormErrors] = useState(errorsInitialValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleClick = (e: React.MouseEvent) => {
    setFormErrors(validateLog(formValues));
  };

  const login = () => {
    dispatch(userLogin(formValues.email, formValues.password, navigate));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formErrors.email.length === 0 && formErrors.password.length === 0) {
      login();
    }
  };

  return (
    <Form className="form" onSubmit={handleSubmit}>
      <h2 className="text-center">LogIn Page</h2>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          name="email"
          value={formValues.email}
          onChange={handleChange}
          type="email"
          placeholder="Enter email"
        />
        <p className="text-danger validation">{formErrors.email}</p>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          name="password"
          value={formValues.password}
          onChange={handleChange}
          type="password"
          placeholder="Password"
        />
        <p className="text-danger validation">{formErrors.password}</p>
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
