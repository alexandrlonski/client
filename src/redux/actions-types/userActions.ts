export interface IChangeUser {
  readonly type: "CHANGE_USER";
  isAuth: boolean;
}
export interface IChangeUserRole {
  readonly type: "CHANGE_USER_ROLE";
  role: string;
}
export interface IChangeUserName {
  readonly type: "CHANGE_USER_NAME";
  name: string;
}
export interface ILogOutUser {
  readonly type: "LOGOUT_USER";
}

export interface ICheckUser {
  readonly type: "CHECK_USER";
  isAuth: boolean;
}
export type UserActions =
  | IChangeUser
  | IChangeUserRole
  | IChangeUserName
  | ILogOutUser
  | ICheckUser;
