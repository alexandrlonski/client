import { IFilm } from "../../types/film";

export interface IChangeFilmAction {
  readonly type: "CHANGE_ID";
  payload: IFilm;
}
export interface IAddFilms {
  readonly type: "ADD_FILMS";
  payload: [];
}
export interface ICreateFilm {
  readonly type: "CREATE_FILM";
  payload: IFilm;
}

export type FilmActions = IChangeFilmAction | IAddFilms | ICreateFilm;
