import {
  IChangeTextModal,
  IToggleLogoutShowModal,
  IToggleErrorShowModal,
} from "../../types/modal";
import { Actions } from "../cases/cases";

export const toggleShowLogoutModal = (
  logoutModalShow: boolean
): IToggleLogoutShowModal => ({
  type: Actions.CHANGE_SHOW_LOGOUT_MODAL,
  logoutModalShow,
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
