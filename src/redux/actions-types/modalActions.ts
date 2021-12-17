export interface IChangeModalAction {
  readonly type: "CHANGE_SHOW_MODAL";
  show: boolean;
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
  | IChangeModalAction
  | IChangeTextModalAction
  | IChangeLogoutStateModalAction;
