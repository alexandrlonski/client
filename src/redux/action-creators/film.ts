import { IChangeFilm, IFilm, IShowFilms } from "../../types/film";
import {
  IChangeCountFilms,
  IChangeLimitFilms,
  IChangePageFilms,
  ICreateFilm,
} from "../actions-types/filmActions";
import { Actions } from "../cases/cases";

export const changeFilm = (payload: IFilm): IChangeFilm => ({
  type: Actions.CHANGE_FILM,
  payload,
});
export const changeFilmsCount = (payload: number): IChangeCountFilms => ({
  type: Actions.CHANGE_FILMS_COUNT,
  payload,
});
export const changeFilmsPage = (payload: number): IChangePageFilms => ({
  type: Actions.CHANGE_FILMS_PAGE,
  payload,
});
export const changeFilmsLimit = (payload: number): IChangeLimitFilms => ({
  type: Actions.CHANGE_FILMS_LIMIT,
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
