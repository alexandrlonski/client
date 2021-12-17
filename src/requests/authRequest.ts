import { Dispatch } from "react";
import { NavigateFunction } from "react-router-dom";
import { login, registration } from "../http/userApi";
import {
  changeTextModal,
  toggleShowModal,
} from "../redux/reducer/modalReducer";
import { changeUserRole, userIsLogin } from "../redux/reducer/userReducer";
import { IUserGet } from "../types/user";
import { LOGIN_ROUTE } from "../utils/constsRoutes";

export const authRequest = async (
  email: string,
  password: string,
  dispatch: Dispatch<any>,
  pathname: string,
  navigate: NavigateFunction
): Promise<void> => {
  const isLogin: boolean = pathname === LOGIN_ROUTE;
  try {
    let data: IUserGet;
    if (isLogin) {
      data = await login(email, password);
    } else {
      data = await registration(email, password);
    }
    dispatch(userIsLogin(true));
    dispatch(changeUserRole(data.role));
    navigate(-1);
  } catch (e: any) {
    dispatch(changeTextModal(e.response.data.message));
    dispatch(toggleShowModal(true));
  }
};
