import { Actions } from "../redux/cases/cases";

export interface IFilm {
  createdAt?: string;
  description: string;
  filmsListId?: number | null;
  id: number | null;
  img: string;
  ticketId?: number | null;
  title: string;
  updatedAt?: string;
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
