import { IChangeFilm, IFilm, IShowFilms } from "../../types/film";
import { ICreateFilm } from "../actions-types/filmActions";
import { Actions } from "../cases/cases";

export const changeFilm = (payload: IFilm): IChangeFilm => ({
  type: Actions.CHANGE_ID,
  payload,
});
export const showAllFilms = (payload: IFilm[]): IShowFilms => ({
  type: Actions.ADD_FILMS,
  payload,
});
export const createNewFilm = (payload: IFilm): ICreateFilm => ({
  type: Actions.CREATE_FILM,
  payload,
});
