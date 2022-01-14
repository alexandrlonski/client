import { IGetUser, IStateUser } from "../../types/user";
import { USER } from "../../utils/constsRoles";
import { UserActions } from "../actions-types/userActions";
import { Actions } from "../cases/cases";
import { ActionsForUser } from "../cases/userCases";

const userInitialState: IStateUser = {
  role: USER,
  isAuth: false,
  name: "",
};

export const userReducer = (
  state: IStateUser = userInitialState,
  action: UserActions
): IStateUser => {
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
      return {
        ...state,
        role: userInitialState.role,
        isAuth: userInitialState.isAuth,
      };

    default:
      return state;
  }
};

const usersInitialState: IGetUser[] = [];

export const usersReducer = (
  state: IGetUser[] = usersInitialState,
  action: UserActions
): IGetUser[] => {
  switch (action.type) {
    case ActionsForUser.GET_USERS:
      return [...action.users];

    default:
      return state;
  }
};
