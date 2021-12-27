import { Actions } from "../redux/cases/cases";

export interface IFilm {
  id: number;
  title: string;
  src: string;
  desc: string;
}

export interface IChangeFilm {
  type: Actions;
  payload: number;
}

export type FilmState = {
  filmId: number;
};
