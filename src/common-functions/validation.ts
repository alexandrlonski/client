import { IFormLogin, IFormRegistred } from "../types/validation";
import {
  EMAIL_REQUIRED_ERROR,
  EMAIL_FORMAT_ERROR,
  NAME_REQUIRED_ERROR,
  PASSWORD_MAX_LENGTH_ERROR,
  PASSWORD_MIN_LENGTH_ERROR,
  PASSWORD_REQUIRED_ERROR,
  REG_EXPRESSION,
} from "../utils/constsValidate";

export const validateName = (name: string) => {
  let errorsName: string = "";
  if (!name) {
    errorsName = NAME_REQUIRED_ERROR;
  }
  return errorsName;
};
export const validateEmail = (email: string) => {
  let errorsEmail: string = "";
  const regex = REG_EXPRESSION.mail;
  if (!email) {
    errorsEmail = EMAIL_REQUIRED_ERROR;
  } else if (!regex.test(email)) {
    errorsEmail = EMAIL_FORMAT_ERROR;
  }
  return errorsEmail;
};
export const validatePassword = (password: string) => {
  let errorsPassword: string = "";
  if (!password) {
    errorsPassword = PASSWORD_REQUIRED_ERROR;
  } else if (password.length < 4) {
    errorsPassword = PASSWORD_MIN_LENGTH_ERROR;
  } else if (password.length > 10) {
    errorsPassword = PASSWORD_MAX_LENGTH_ERROR;
  }
  return errorsPassword;
};
