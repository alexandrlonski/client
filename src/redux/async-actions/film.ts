import { Dispatch } from "react";
import {
  createFilmReq,
  deleteFilmReq,
  getFilmsReq,
  updateFilmReq,
} from "../../http/filmApi";
import { IChangeFilm, IFetchFilms, IShowFilms } from "../../types/film";
import {
  changeFilmsCount,
  changeFilm,
  showAllFilms,
} from "../action-creators/film";
import {
  changeTextModal,
  toggleShowErrorModal,
} from "../action-creators/modal";
import { FILM_CREATED, FILM_UPDATED } from "../../utils/constsSuccess";
import { IChangeCountFilms } from "../actions-types/filmActions";
import { IChangeTextModal, IToggleErrorShowModal } from "../../types/modal";
import { NavigateFunction } from "react-router-dom";
import { ADMIN_FILMS } from "../../utils/constsRoutes";

export const showFilms = (page: number, limit: number) => {
  return async function (
    dispatch: Dispatch<
      IShowFilms | IChangeCountFilms | IChangeTextModal | IToggleErrorShowModal
    >
  ) {
    try {
      const data: IFetchFilms = await getFilmsReq(page, limit);
      dispatch(showAllFilms(data.rows));
      dispatch(changeFilmsCount(data.count));
    } catch (e: any) {
      dispatch(changeTextModal(e.response.data.message));
      dispatch(toggleShowErrorModal(true));
    }
  };
};

export const createFilm = (film: FormData, navigate: NavigateFunction) => {
  return async function (
    dispatch: Dispatch<
      IChangeFilm | IChangeTextModal | IChangeTextModal | IToggleErrorShowModal
    >
  ) {
    try {
      const data = await createFilmReq(film);
      dispatch(changeFilm(data));
      dispatch(changeTextModal(FILM_CREATED));
      navigate(ADMIN_FILMS);
    } catch (e: any) {
      dispatch(changeTextModal(e.response.data.message));
      dispatch(toggleShowErrorModal(true));
    }
  };
};
export const updateFilm = (
  id: number,
  film: FormData,
  navigate: NavigateFunction
) => {
  return async function (
    dispatch: Dispatch<
      IChangeFilm | IChangeTextModal | IChangeTextModal | IToggleErrorShowModal
    >
  ) {
    try {
      const data = await updateFilmReq(id, film);
      dispatch(changeFilm(data));
      dispatch(changeTextModal(FILM_UPDATED));
      navigate(ADMIN_FILMS);
    } catch (e: any) {
      dispatch(changeTextModal(e.response.data.message));
      dispatch(toggleShowErrorModal(true));
    }
  };
};
export const deleteFilm = (id: number) => {
  return async function (
    dispatch: Dispatch<IChangeTextModal | IToggleErrorShowModal>
  ) {
    try {
      await deleteFilmReq(id);
    } catch (e: any) {
      dispatch(changeTextModal(e.response.data.message));
      dispatch(toggleShowErrorModal(true));
    }
  };
};
