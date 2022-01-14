import { IFilm, IPageViewFilms } from "../../types/film";
import { FilmActions } from "../actions-types/filmActions";
import { Actions } from "../cases/cases";
import { COUNT, PAGE, USER_LIMIT_FILMS } from "../../utils/consts";

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

const pageView: IPageViewFilms = {
  count: COUNT,
  limit: USER_LIMIT_FILMS,
  pageNumber: PAGE,
};

export const filmsCountReducer = (
  state = pageView,
  action: FilmActions
): IPageViewFilms => {
  switch (action.type) {
    case Actions.CHANGE_FILMS_COUNT:
      return { ...state, count: action.payload };
    case Actions.CHANGE_FILMS_PAGE:
      return { ...state, pageNumber: action.payload };
    case Actions.CHANGE_FILMS_LIMIT:
      return { ...state, limit: action.payload };

    default:
      return state;
  }
};
