import { Dispatch } from "react";
import { createFilmReq, deleteFilmReq, getFilmsReq } from "../../http/filmApi";
import { IChangeFilm, IFetchFilms, IShowFilms } from "../../types/film";
import { changeCount, changeFilm, showAllFilms } from "../action-creators/film";
import { changeTextModal, toggleShowErrorModal } from "../action-creators/modal";
import { FILMCREATED } from "../../utils/constsSuccess";
import { IChangeCount } from "../actions-types/filmActions";
import { IChangeTextModal, IToggleErrorShowModal } from "../../types/modal";

export const showFilms = (page: number, limit: number) => {
  return async function (dispatch: Dispatch<IShowFilms | IChangeCount | IChangeTextModal | IToggleErrorShowModal>) {
    try {
      const data: IFetchFilms = await getFilmsReq(page, limit);
      dispatch(showAllFilms(data.rows));
      dispatch(changeCount(data.count));
    } catch (e: any) {
      dispatch(changeTextModal(e.response.data.message));
      dispatch(toggleShowErrorModal(true));
    }
  };
};

export const createFilm = (film: FormData) => {
  return async function (
    dispatch: Dispatch<IChangeFilm | IChangeTextModal | IChangeTextModal | IToggleErrorShowModal>
  ) {
    try {
      const data = await createFilmReq(film);
      dispatch(changeFilm(data));
      dispatch(changeTextModal(FILMCREATED));
    } catch (e: any) {
      dispatch(changeTextModal(e.response.data.message));
      dispatch(toggleShowErrorModal(true));
    }
  };
};
export const deleteFilm = (id: number | null) => {
  return async function (dispatch: Dispatch<IChangeTextModal | IToggleErrorShowModal>) {
    try {
      await deleteFilmReq(id);
    } catch (e: any) {
      dispatch(changeTextModal(e.response.data.message));
      dispatch(toggleShowErrorModal(true));
    }
  };
};
