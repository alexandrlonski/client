import {
  IChangeTextModal,
  IToggleLogoutShowModal,
  IToggleErrorShowModal,
  IToggleDeleteFilmShowModal,
} from "../../types/modal";
import { Actions } from "../cases/cases";

export const toggleShowLogoutModal = (
  logoutModalShow: boolean
): IToggleLogoutShowModal => ({
  type: Actions.CHANGE_SHOW_LOGOUT_MODAL,
  logoutModalShow,
});
export const toggleShowDeleteFilmModal = (
  deleteFilmModalShow: boolean
): IToggleDeleteFilmShowModal => ({
  type: Actions.CHANGE_SHOW_DELETE_FILM_MODAL,
  deleteFilmModalShow,
});
export const toggleShowErrorModal = (
  errorModalShow: boolean
): IToggleErrorShowModal => ({
  type: Actions.CHANGE_SHOW_ERROR_MODAL,
  errorModalShow,
});
export const changeTextModal = (text: string): IChangeTextModal => ({
  type: Actions.CHANGE_TEXT,
  text,
});
