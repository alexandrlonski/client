import { IChangeUserRole, IUserIsLogin, IUserLogout } from "../../types/user";
import { IChangeUserName } from "../actions-types/userActions";
import { Actions } from "../cases/cases";

export const userIsLogin = (isAuth: boolean): IUserIsLogin => ({
  type: Actions.CHANGE_USER,
  isAuth,
});

export const changeUserRole = (role: string): IChangeUserRole => ({
  type: Actions.CHANGE_USER_ROLE,
  role,
});
export const changeUserName = (name: string): IChangeUserName => ({
  type: Actions.CHANGE_USER_NAME,
  name,
});

export const userLogout = (): IUserLogout => ({
  type: Actions.LOGOUT_USER,
});
