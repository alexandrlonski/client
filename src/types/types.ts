import { FC } from "react";
import { Actions } from "../redux/cases/cases";

export interface IToken {
  token: string;
}

export interface IPath {
  path: string;
  Component: FC;
  exact?: boolean;
}

// export interface IHandleClose {
//   type: Actions;
//   show: boolean;
// }

export interface IHandleState {
  type: Actions;
  logout: boolean;
}
