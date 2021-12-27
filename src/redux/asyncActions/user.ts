import { changeUserRole, userIsLogin } from "../reducer/userReducer";
import { IUserGet } from "../../types/user";
import { checkIsLogin, login, registration } from "../../http/userApi";
import { changeFilm } from "../reducer/filmReducer";
import { Dispatch } from "react";
import { NavigateFunction } from "react-router-dom";
import { changeTextModal, toggleShowModal } from "../reducer/modalReducer";

export const checkUser = () => {
  return async function (dispatch: Dispatch<any>) {
    checkIsLogin().then((data: IUserGet) => {
      dispatch(userIsLogin(true));
      dispatch(changeUserRole(data.role));
      dispatch(changeFilm(Number(localStorage.getItem("filmId"))));
    });
  };
};

export const LoginReduxAsunc = (
  email: string,
  password: string,
  navigate: NavigateFunction
) => {
  return async function (dispatch: Dispatch<any>) {
    try {
      const data: IUserGet = await login(email, password);
      dispatch(userIsLogin(true));
      dispatch(changeUserRole(data.role));
      navigate(-1);
    } catch (e: any) {
      dispatch(changeTextModal(e.response.data.message));
      dispatch(toggleShowModal(true));
    }
  };
};

export const RegisterReduxAsunc = (
  email: string,
  password: string,
  navigate: NavigateFunction
) => {
  return async function (dispatch: Dispatch<any>) {
    try {
      const data: IUserGet = await registration(email, password);
      dispatch(userIsLogin(true));
      dispatch(changeUserRole(data.role));
      navigate(-1);
    } catch (e: any) {
      dispatch(changeTextModal(e.response.data.message));
      dispatch(toggleShowModal(true));
    }
  };
};
