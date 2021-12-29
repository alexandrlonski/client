import { IChangeFilm, IFilm, IShowFilms } from "../../types/film";
import {
  IChangeCount,
  IChangeLimit,
  IChangePage,
  ICreateFilm,
} from "../actions-types/filmActions";
import { Actions } from "../cases/cases";

export const changeFilm = (payload: IFilm): IChangeFilm => ({
  type: Actions.CHANGE_ID,
  payload,
});
export const changeCount = (payload: number): IChangeCount => ({
  type: Actions.CHANGE_COUNT,
  payload,
});
export const changePage = (payload: number): IChangePage => ({
  type: Actions.CHANGE_PAGE,
  payload,
});
export const changeLimit = (payload: number): IChangeLimit => ({
  type: Actions.CHANGE_LIMIT,
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
