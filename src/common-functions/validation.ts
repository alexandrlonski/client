import { IFormLogin, IFormRegistred } from "../types/validation";

export const validateReg = (values: IFormRegistred) => {
  const errors: IFormRegistred = { name: "", email: "", password: "" };
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,4}$/i;
  if (!values.name) {
    errors.name = "Username is required!";
  }
  if (!values.email) {
    errors.email = "Email is required!";
  } else if (!regex.test(values.email)) {
    errors.email = "This is not a valid email format!";
  }
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 4) {
    errors.password = "Password must be more than 4 characters";
  } else if (values.password.length > 10) {
    errors.password = "Password cannot exceed more than 10 characters";
  }
  return errors;
};

export const validateLog = (values: IFormLogin) => {
  const errors: IFormLogin = { email: "", password: "" };
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,4}$/i;

  if (!values.email) {
    errors.email = "Email is required!";
  } else if (!regex.test(values.email)) {
    errors.email = "This is not a valid email format!";
  }
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 4) {
    errors.password = "Password must be more than 4 characters";
  } else if (values.password.length > 10) {
    errors.password = "Password cannot exceed more than 10 characters";
  }
  return errors;
};
