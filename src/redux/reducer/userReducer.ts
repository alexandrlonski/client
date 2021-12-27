import { IUserState } from "../../types/user";
import { UserActions } from "../actions-types/userActions";
import { Actions } from "../cases/cases";

const initialState: IUserState = {
  role: "USER",
  isAuth: false,
  name: "",
};

export const userReducer = (
  state: IUserState = initialState,
  action: UserActions
): IUserState => {
  switch (action.type) {
    case Actions.CHECK_USER:
      return { ...state, isAuth: action.isAuth };
    case Actions.CHANGE_USER:
      return { ...state, isAuth: action.isAuth };
    case Actions.CHANGE_USER_ROLE:
      return { ...state, role: action.role };
    case Actions.CHANGE_USER_NAME:
      return { ...state, name: action.name };
    case Actions.LOGOUT_USER:
      return { ...state, role: initialState.role, isAuth: initialState.isAuth };

    default:
      return state;
  }
};
