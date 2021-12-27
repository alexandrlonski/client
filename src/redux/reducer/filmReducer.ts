import { IFilm } from "../../types/film";
import { FilmActions } from "../actions-types/filmActions";
import { Actions } from "../cases/cases";

const initialFillmSate: IFilm = {
  description: "",
  id: null,
  img: "",
  title: "",
};

export const filmReducer = (
  state = initialFillmSate,
  action: FilmActions
): IFilm => {
  switch (action.type) {
    case Actions.CHANGE_ID:
      return { ...action.payload };

    default:
      return state;
  }
};
