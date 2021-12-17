import { IChangeUserRole, IUserIsLogin, IUserLogout } from "../../types/user";
import { Actions } from "../cases/cases";

export const userIsLogin = (isAuth: boolean): IUserIsLogin => ({
  type: Actions.CHANGE_USER,
  isAuth,
});

export const changeUserRole = (role: string): IChangeUserRole => ({
  type: Actions.CHANGE_USER_ROLE,
  role,
});

export const userLogout = (): IUserLogout => ({
  type: Actions.LOGOUT_USER,
});
