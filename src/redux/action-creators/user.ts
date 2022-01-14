import {
  IChangeUserRole,
  IGetUser,
  IUserIsLogin,
  IUserLogout,
} from "../../types/user";
import { IChangeUserName, IGetUsers } from "../actions-types/userActions";
import { Actions } from "../cases/cases";
import { ActionsForUser } from "../cases/userCases";

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
export const addUsers = (users: IGetUser[]): IGetUsers => ({
  type: ActionsForUser.GET_USERS,
  users,
});
