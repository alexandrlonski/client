import { IFilm } from "../../types/film";

export interface IChangeFilmAction {
  readonly type: "CHANGE_FILM";
  payload: IFilm;
}
export interface IChangeCountFilms {
  readonly type: "CHANGE_FILMS_COUNT";
  payload: number;
}
export interface IChangePageFilms {
  readonly type: "CHANGE_FILMS_PAGE";
  payload: number;
}
export interface IChangeLimitFilms {
  readonly type: "CHANGE_FILMS_LIMIT";
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
  | IChangePageFilms
  | IChangeLimitFilms
  | IChangeCountFilms;
