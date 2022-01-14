import { IFilm } from "../../types/film";
import { FilmActions } from "../actions-types/filmActions";
import { Actions } from "../cases/cases";

const initialFillmSate: IFilm = {
  description: "",
  id: 0,
  img: "",
  title: "",
};

export const filmReducer = (
  state = initialFillmSate,
  action: FilmActions
): IFilm => {
  switch (action.type) {
    case Actions.CHANGE_FILM:
      return { ...action.payload };

    default:
      return state;
  }
};
