import { Actions } from "../redux/cases/cases";

export interface IFilm {
  description: string;
  filmsListId?: number | null;
  id: number | null;
  img: string;
  ticketId?: number | null;
  title: string;
}

export interface IChangeFilm {
  type: Actions;
  payload: IFilm;
}

export interface IShowFilms {
  type: Actions;
  payload: IFilm[];
}
export interface IShowOneFilm {
  type: Actions;
  payload: string;
}

export type FilmState = {
  filmId: number;
};

export interface IFetchFilms {
  count: number;
  rows: IFilm[];
}
export interface IPageView {
  count: number;
  limit: number;
  pageNumber: number;
}
