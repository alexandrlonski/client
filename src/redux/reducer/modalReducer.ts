import {
  IChangeTextModal,
  IModalState,
  IToggleShowModal,
} from "../../types/modal";
import { ModalActions } from "../actions-types/modalActions";
import { Actions } from "../cases/cases";

const initialSate: { modal: IModalState } = {
  modal: {
    show: false,
    text: "",
  },
};

export const modalReducer = (
  state = initialSate.modal,
  action: ModalActions
): IModalState => {
  switch (action.type) {
    case Actions.CHANGE_SHOW_MODAL:
      return { ...state, show: action.show };
    case Actions.CHANGE_TEXT:
      return { ...state, text: action.text };

    default:
      return state;
  }
};
export const toggleShowModal = (show: boolean): IToggleShowModal => ({
  type: Actions.CHANGE_SHOW_MODAL,
  show,
});
export const changeTextModal = (text: string): IChangeTextModal => ({
  type: Actions.CHANGE_TEXT,
  text,
});
