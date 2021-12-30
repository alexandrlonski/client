import { Dispatch } from "react";
import { createFilmReq, deleteFilmReq, fetchFilms } from "../../http/filmApi";
import { IFetchFilms } from "../../types/film";
import { changeCount, showAllFilms } from "../action-creators/film";
import { changeTextModal, toggleShowErrorModal } from "../action-creators/modal";
import { FILMCREATED } from "../../utils/constsSuccess";

export const showFilms = (page: number, limit: number) => {
  return async function (dispatch: Dispatch<any>) {
    try {
      const data: IFetchFilms = await fetchFilms(page, limit);
      dispatch(showAllFilms(data.rows));
      dispatch(changeCount(data.count));
    } catch (e: any) {
      dispatch(changeTextModal(e.response.data.message));
      dispatch(toggleShowErrorModal(true));
    }
  };
};

export const createFilm = (film: FormData) => {
  return async function (dispatch: Dispatch<any>) {
    try {
      await createFilmReq(film);
      dispatch(changeTextModal(FILMCREATED));
    } catch (e: any) {
      dispatch(changeTextModal(e.response.data.message));
      dispatch(toggleShowErrorModal(true));
    }
  };
};
export const deleteFilm = (id: number | null) => {
  return async function (dispatch: Dispatch<any>) {
    try {
      await deleteFilmReq(id);
    } catch (e: any) {
      dispatch(changeTextModal(e.response.data.message));
      dispatch(toggleShowErrorModal(true));
    }
  };
};
