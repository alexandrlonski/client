import { FilmState, IChangeFilm } from "../../types/film";
import { FilmActions } from "../actions-types/filmActions";
import { Actions } from "../cases/cases";

const initialSate: FilmState = {
  filmId: 1,
};

export const filmReducer = (
  state = initialSate,
  action: FilmActions
): FilmState => {
  switch (action.type) {
    case Actions.CHANGE_ID:
      return { ...state, filmId: action.payload };

    default:
      return state;
  }
};
export const changeFilm = (payload: number): IChangeFilm => ({
  type: Actions.CHANGE_ID,
  payload,
});
