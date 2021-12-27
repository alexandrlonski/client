import { Dispatch } from "react";
import { createFilmReq, fetchFilms } from "../../http/filmApi";
import { IFilm } from "../../types/film";
import { createNewFilm, showAllFilms } from "../action-creators/film";
import {
  changeTextModal,
  toggleShowErrorModal,
} from "../action-creators/modal";

export const showFilms = () => {
  return async function (dispatch: Dispatch<any>) {
    try {
      const data: IFilm[] = await fetchFilms();
      dispatch(showAllFilms(data));
    } catch (e: any) {
      dispatch(changeTextModal(e.response.data.message));
      dispatch(toggleShowErrorModal(true));
    }
  };
};

export const createFilm = (film: FormData) => {
  return async function (dispatch: Dispatch<any>) {
    try {
      const data: IFilm = await createFilmReq(film);
      dispatch(createNewFilm(data));
      dispatch(changeTextModal("Film created"));
      dispatch(toggleShowErrorModal(true));
    } catch (e: any) {
      dispatch(changeTextModal(e.response.data.message));
      dispatch(toggleShowErrorModal(true));
    }
  };
};
