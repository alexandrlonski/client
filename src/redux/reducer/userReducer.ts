import {
  IChangeUserRole,
  IUserIsLogin,
  IUserLogout,
  IUserState,
} from "../../types/user";
import { UserActions } from "../actions-types/userActions";
import { Actions } from "../cases/cases";

const initialSate: IUserState = {
  role: "User",
  isAuth: false,
};

export const userReducer = (
  state: IUserState = initialSate,
  action: UserActions
): IUserState => {
  switch (action.type) {
    case Actions.CHECK_USER:
      return { ...state, isAuth: action.isAuth };
    case Actions.CHANGE_USER:
      return { ...state, isAuth: action.isAuth };
    case Actions.CHANGE_USER_ROLE:
      return { ...state, role: action.role };
    case Actions.LOGOUT_USER:
      return { ...state, role: "USER", isAuth: false };

    default:
      return state;
  }
};

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

export const userCheck = (isAuth: boolean): IUserIsLogin => ({
  type: Actions.CHECK_USER,
  isAuth,
});
