import { ICinema, IPageViewCinemas } from "../../types/cinema";
import { COUNT, LIMIT_CINEMAS, PAGE } from "../../utils/consts";
import { CinemaActions } from "../actions-types/cinemaActions";
import { Actions } from "../cases/cases";

const initialSteteCinema: ICinema = {
  description: "",
  id: 0,
  img: "",
  name: "",
  city: "",
};

export const cinemaReducer = (
  state = initialSteteCinema,
  action: CinemaActions
): ICinema => {
  switch (action.type) {
    case Actions.CHANGE_CINEMA:
      return { ...action.payload };

    default:
      return state;
  }
};

const initialSteteCinemas: ICinema[] = [];
export const cinemasReducer = (
  state = initialSteteCinemas,
  action: CinemaActions
): ICinema[] => {
  switch (action.type) {
    case Actions.ADD_CINEMAS:
      return [...action.payload];

    default:
      return state;
  }
};

const pageView: IPageViewCinemas = {
  count: COUNT,
  limit: LIMIT_CINEMAS,
  pageNumber: PAGE,
};

export const cinemasCountReducer = (
  state = pageView,
  action: CinemaActions
): IPageViewCinemas => {
  switch (action.type) {
    case Actions.CHANGE_CINEMAS_COUNT:
      return { ...state, count: action.payload };
    case Actions.CHANGE_CINEMAS_PAGE:
      return { ...state, pageNumber: action.payload };
    case Actions.CHANGE_CINEMAS_LIMIT:
      return { ...state, limit: action.payload };

    default:
      return state;
  }
};
