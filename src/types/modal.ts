import { Actions } from "../redux/cases/cases";

export interface IToggleShowModal {
  type: Actions;
  show: boolean;
}
export interface IChangeTextModal {
  type: Actions;
  text: string;
}

export interface IModalState {
  show: boolean;
  text?: string;
}
