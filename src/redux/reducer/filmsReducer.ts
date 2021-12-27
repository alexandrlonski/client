import { IFilm } from "../../types/film";
import { FilmActions } from "../actions-types/filmActions";
import { Actions } from "../cases/cases";

const initialSate: IFilm[] = [];

export const filmsReducer = (
  state = initialSate,
  action: FilmActions
): IFilm[] => {
  switch (action.type) {
    case Actions.ADD_FILMS:
      return [...action.payload];
    case Actions.CREATE_FILM:
      return [...state, action.payload];

    default:
      return state;
  }
};
