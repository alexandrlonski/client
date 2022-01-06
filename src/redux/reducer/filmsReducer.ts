import { IFilm, IPageView } from "../../types/film";
import { FilmActions } from "../actions-types/filmActions";
import { Actions } from "../cases/cases";
import { COUNT, PAGE, LIMIT } from "../../utils/consts";

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

const pageView: IPageView = {
  count: COUNT,
  limit: LIMIT,
  pageNumber: PAGE,
};

export const filmsCountReducer = (
  state = pageView,
  action: FilmActions
): IPageView => {
  switch (action.type) {
    case Actions.CHANGE_COUNT:
      return { ...state, count: action.payload };
    case Actions.CHANGE_PAGE:
      return { ...state, pageNumber: action.payload };
    case Actions.CHANGE_LIMIT:
      return { ...state, limit: action.payload };

    default:
      return state;
  }
};
