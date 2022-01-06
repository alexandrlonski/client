import { ICinema } from "../../types/cinema";
import { CinemaActions } from "../actions-types/cinemaActions";
import { Actions } from "../cases/cases";

const initialCinema: ICinema = {
  description: "",
  id: null,
  img: "",
  name: "",
  city: "",
};

export const cinemaReducer = (
  state = initialCinema,
  action: CinemaActions
): ICinema => {
  switch (action.type) {
    case Actions.CHANGE_CINEMA:
      return { ...action.payload };

    default:
      return state;
  }
};

const initialCinemas: ICinema[] = [];
export const cinemasReducer = (
  state = initialCinemas,
  action: CinemaActions
): ICinema[] => {
  switch (action.type) {
    case Actions.ADD_CINEMAS:
      return [...action.payload];

    default:
      return state;
  }
};
