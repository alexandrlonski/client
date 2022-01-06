import { Actions } from "../redux/cases/cases";

export interface IToggleLogoutShowModal {
  type: Actions;
  logoutModalShow: boolean;
}
export interface IToggleErrorShowModal {
  type: Actions;
  errorModalShow: boolean;
}
export interface IToggleDeleteFilmShowModal {
  type: Actions;
  deleteFilmModalShow: boolean;
}
export interface IChangeTextModal {
  type: Actions;
  text: string;
}

export interface IModalState {
  errorModalShow: boolean;
  logoutModalShow: boolean;
  deleteFilmModalShow: boolean;
  text?: string;
}
