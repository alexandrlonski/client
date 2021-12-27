import { IModalState } from "../../types/modal";
import { ModalActions } from "../actions-types/modalActions";
import { Actions } from "../cases/cases";

const initialSate: { modal: IModalState } = {
  modal: {
    errorModalShow: false,
    logoutModalShow: false,
    text: "",
  },
};

export const modalReducer = (
  state = initialSate.modal,
  action: ModalActions
): IModalState => {
  switch (action.type) {
    case Actions.CHANGE_SHOW_ERROR_MODAL:
      return { ...state, errorModalShow: action.errorModalShow };
    case Actions.CHANGE_SHOW_LOGOUT_MODAL:
      return { ...state, logoutModalShow: action.logoutModalShow };
    case Actions.CHANGE_TEXT:
      return { ...state, text: action.text };

    default:
      return state;
  }
};
