import { IChangeTextModal, IToggleShowModal } from "../../types/modal";
import { Actions } from "../cases/cases";

export const toggleShowModal = (show: boolean): IToggleShowModal => ({
  type: Actions.CHANGE_SHOW_MODAL,
  show,
});
export const changeTextModal = (text: string): IChangeTextModal => ({
  type: Actions.CHANGE_TEXT,
  text,
});
