export interface IChangeErrorModalAction {
  readonly type: "CHANGE_SHOW_ERROR_MODAL";
  errorModalShow: boolean;
}
export interface IChangeLogoutModalAction {
  readonly type: "CHANGE_SHOW_LOGOUT_MODAL";
  logoutModalShow: boolean;
}
export interface IChangeTextModalAction {
  readonly type: "CHANGE_TEXT";
  text: string;
}
export interface IChangeLogoutStateModalAction {
  readonly type: "CHANGE_LOGOUT_STATE";
  logout: boolean;
}

export type ModalActions =
  | IChangeLogoutModalAction
  | IChangeErrorModalAction
  | IChangeTextModalAction
  | IChangeLogoutStateModalAction;
