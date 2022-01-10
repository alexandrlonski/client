import { changeUserName, changeUserRole, userIsLogin } from "../action-creators/user";
import { IChangeUserRole, IUserGet, IUserIsLogin } from "../../types/user";
import { checkIsLogin, login, registration } from "../../http/userApi";
import { changeFilm } from "../action-creators/film";
import { Dispatch } from "react";
import { NavigateFunction } from "react-router-dom";
import { changeTextModal, toggleShowErrorModal } from "../action-creators/modal";
import { IChangeTextModal, IToggleErrorShowModal } from "../../types/modal";
import { IChangeFilm } from "../../types/film";
import { IChangeUserName } from "../actions-types/userActions";

export const checkUser = () => {
  return async function (dispatch: Dispatch<IUserIsLogin | IChangeUserName | IChangeFilm | IChangeUserRole>) {
    const data: IUserGet = await checkIsLogin();
    dispatch(userIsLogin(true));
    dispatch(changeUserRole(data.role));
    const dataFilm = localStorage.getItem("film");
    if (dataFilm) {
      const film = JSON.parse(dataFilm);
      dispatch(changeFilm(film));
    }
    const name = localStorage.getItem("name");
    if (name) {
      dispatch(changeUserName(name));
    }
  };
};

export const userLogin = (email: string, password: string, navigate: NavigateFunction) => {
  return async function (
    dispatch: Dispatch<IUserIsLogin | IChangeUserName | IChangeUserRole | IChangeTextModal | IToggleErrorShowModal>
  ) {
    try {
      const data: IUserGet = await login(email, password);
      dispatch(userIsLogin(true));
      dispatch(changeUserRole(data.role));
      dispatch(changeUserName(data.name));
      localStorage.setItem("name", data.name);
      navigate(-1);
    } catch (e: any) {
      dispatch(changeTextModal(e.response.data.message));
      dispatch(toggleShowErrorModal(true));
    }
  };
};

export const userRegistration = (email: string, password: string, name: string, navigate: NavigateFunction) => {
  return async function (
    dispatch: Dispatch<IUserIsLogin | IChangeUserName | IChangeUserRole | IChangeTextModal | IToggleErrorShowModal>
  ) {
    try {
      const data: IUserGet = await registration(email, password, name);
      dispatch(userIsLogin(true));
      dispatch(changeUserRole(data.role));
      dispatch(changeUserName(data.name));
      localStorage.setItem("name", data.name);
      navigate(-1);
    } catch (e: any) {
      dispatch(changeTextModal(e.response.data.message));
      dispatch(toggleShowErrorModal(true));
    }
  };
};
