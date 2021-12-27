import { Actions } from "../redux/cases/cases";

export interface IUserGet {
  id: number;
  email: string;
  role: string;
  name: string;
  iat: number;
  exp: number;
}

export interface IUserState {
  role: string;
  isAuth: boolean;
  name: string;
}

export interface IUserIsLogin {
  type: Actions;
  isAuth: boolean;
}
export interface IChangeUserRole {
  type: Actions;
  role: string;
}
export interface IUserLogout {
  type: Actions;
}
