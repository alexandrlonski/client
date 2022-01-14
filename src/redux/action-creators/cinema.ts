import { ICinema } from "../../types/cinema";
import {
  IAddCinemas,
  IChangeCinema,
  IChangeCountCinemas,
  IChangeLimitCinemas,
  IChangePageCinemas,
} from "../actions-types/cinemaActions";
import { Actions } from "../cases/cases";

export const addAllCinemas = (payload: ICinema[]): IAddCinemas => ({
  type: Actions.ADD_CINEMAS,
  payload,
});
export const changeCinema = (payload: ICinema): IChangeCinema => ({
  type: Actions.CHANGE_CINEMA,
  payload,
});
export const changeCinemasCount = (payload: number): IChangeCountCinemas => ({
  type: Actions.CHANGE_CINEMAS_COUNT,
  payload,
});
export const changeCinemasPage = (payload: number): IChangePageCinemas => ({
  type: Actions.CHANGE_CINEMAS_PAGE,
  payload,
});
export const changeCinemasLimit = (payload: number): IChangeLimitCinemas => ({
  type: Actions.CHANGE_CINEMAS_LIMIT,
  payload,
});
