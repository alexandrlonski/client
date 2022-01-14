import { Dispatch } from "react";
import {
  createCinemaReq,
  deleteCinemaReq,
  getCinemasReq,
  updateCinemaReq,
} from "../../http/cinemaApi";
import {
  changeTextModal,
  toggleShowErrorModal,
} from "../action-creators/modal";
import { ICinema, IFetchCinema } from "../../types/cinema";
import { addAllCinemas, changeCinemasCount } from "../action-creators/cinema";
import { CINEMA_CREATED, CINEMA_UPDATED } from "../../utils/constsSuccess";
import {
  IAddCinemas,
  IChangeCountCinemas,
} from "../actions-types/cinemaActions";
import { IChangeTextModal, IToggleErrorShowModal } from "../../types/modal";
import { ADMIN_CINEMAS } from "../../utils/constsRoutes";
import { NavigateFunction } from "react-router-dom";

export const getCinemas = () => {
  return async function (
    dispatch: Dispatch<
      | IAddCinemas
      | IChangeCountCinemas
      | IChangeTextModal
      | IToggleErrorShowModal
    >
  ) {
    try {
      const data: IFetchCinema = await getCinemasReq();
      dispatch(addAllCinemas(data.rows));
      dispatch(changeCinemasCount(data.count));
    } catch (e: any) {
      dispatch(changeTextModal(e.response.data.message));
      dispatch(toggleShowErrorModal(true));
    }
  };
};
export const createCinema = (cinema: FormData, navigate: NavigateFunction) => {
  return async function (
    dispatch: Dispatch<IChangeTextModal | IToggleErrorShowModal>
  ) {
    try {
      const data = await createCinemaReq(cinema);
      dispatch(changeTextModal(CINEMA_CREATED));
      navigate(ADMIN_CINEMAS);
    } catch (e: any) {
      dispatch(changeTextModal(e.response.data.message));
      dispatch(toggleShowErrorModal(true));
    }
  };
};
export const updateCinema = (
  id: number,
  cinema: FormData,
  navigate: NavigateFunction
) => {
  return async function (
    dispatch: Dispatch<IChangeTextModal | IToggleErrorShowModal>
  ) {
    try {
      const data = await updateCinemaReq(id, cinema);
      dispatch(changeTextModal(CINEMA_UPDATED));
      navigate(ADMIN_CINEMAS);
    } catch (e: any) {
      dispatch(changeTextModal(e.response.data.message));
      dispatch(toggleShowErrorModal(true));
    }
  };
};

export const deleteCinema = (id: number) => {
  return async function (
    dispatch: Dispatch<IChangeTextModal | IToggleErrorShowModal>
  ) {
    try {
      await deleteCinemaReq(id);
    } catch (e: any) {
      dispatch(changeTextModal(e.response.data.message));
      dispatch(toggleShowErrorModal(true));
    }
  };
};
