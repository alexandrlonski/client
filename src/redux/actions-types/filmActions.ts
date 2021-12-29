import { IFilm } from "../../types/film";

export interface IChangeFilmAction {
  readonly type: "CHANGE_ID";
  payload: IFilm;
}
export interface IChangeCount {
  readonly type: "CHANGE_COUNT";
  payload: number;
}
export interface IChangePage {
  readonly type: "CHANGE_PAGE";
  payload: number;
}
export interface IChangeLimit {
  readonly type: "CHANGE_LIMIT";
  payload: number;
}
export interface IAddFilms {
  readonly type: "ADD_FILMS";
  payload: [];
}
export interface ICreateFilm {
  readonly type: "CREATE_FILM";
  payload: IFilm;
}

export type FilmActions =
  | IChangeFilmAction
  | IAddFilms
  | ICreateFilm
  | IChangePage
  | IChangeLimit
  | IChangeCount;
