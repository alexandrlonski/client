import { Dispatch } from "react";
import { createCinemaReq, getCinemasReq } from "../../http/cinema";
import {
  changeTextModal,
  toggleShowErrorModal,
} from "../action-creators/modal";
import { ICinema } from "../../types/cinema";
import { addAllCinemas } from "../action-creators/cinema";
import { CINEMACREATED } from "../../utils/constsSuccess";

export const getCinemas = () => {
  return async function (dispatch: Dispatch<any>) {
    try {
      const data: ICinema[] = await getCinemasReq();
      dispatch(addAllCinemas(data));
    } catch (e: any) {
      dispatch(changeTextModal(e.response.data.message));
      dispatch(toggleShowErrorModal(true));
    }
  };
};
export const createCinema = (cinema: FormData) => {
  return async function (dispatch: Dispatch<any>) {
    try {
      const data = await createCinemaReq(cinema);
      dispatch(changeTextModal(CINEMACREATED));
    } catch (e: any) {
      dispatch(changeTextModal(e.response.data.message));
      dispatch(toggleShowErrorModal(true));
    }
  };
};
