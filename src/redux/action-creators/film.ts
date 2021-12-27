import { IChangeFilm } from "../../types/film";
import { Actions } from "../cases/cases";

export const changeFilm = (payload: number): IChangeFilm => ({
  type: Actions.CHANGE_ID,
  payload,
});
