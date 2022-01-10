import { FC, useEffect, useState } from "react";
import { Form, Button, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { LOGIN_ROUTE } from "../../utils/constsRoutes";
import { userRegistration } from "../../redux/async-actions/user";
import { IFormRegistred } from "../../types/validation";
import { validateReg } from "../../common-functions/validation";

const Registeration: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formInitialValues: IFormRegistred = {
    name: "",
    email: "",
    password: "",
  };
  const errorsInitialValues: IFormRegistred = {
    name: "",
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
    setFormErrors(validateReg(formValues));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      (formErrors.name.length === 0,
      formErrors.email.length === 0,
      formErrors.password.length === 0)
    ) {
      register();
    }
  };

  const register = () => {
    dispatch(
      userRegistration(
        formValues.email,
        formValues.password,
        formValues.name,
        navigate
      )
    );
  };

  return (
    <Form className="form" onSubmit={handleSubmit}>
      <h2 className="text-center">Register Page</h2>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          name="name"
          value={formValues.name}
          onChange={handleChange}
          type="text"
          placeholder="Enter Name"
        />
        <p className="text-danger validation">{formErrors.name}</p>
      </Form.Group>
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
