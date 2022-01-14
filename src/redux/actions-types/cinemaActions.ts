import { ICinema } from "../../types/cinema";

export interface IChangeCinema {
  readonly type: "CHANGE_CINEMA";
  payload: ICinema;
}
export interface IAddCinemas {
  readonly type: "ADD_CINEMAS";
  payload: ICinema[];
}
export interface IChangeCountCinemas {
  readonly type: "CHANGE_CINEMAS_COUNT";
  payload: number;
}
export interface IChangePageCinemas {
  readonly type: "CHANGE_CINEMAS_PAGE";
  payload: number;
}
export interface IChangeLimitCinemas {
  readonly type: "CHANGE_CINEMAS_LIMIT";
  payload: number;
}

export type CinemaActions =
  | IChangeCinema
  | IAddCinemas
  | IChangePageCinemas
  | IChangeCountCinemas
  | IChangeLimitCinemas;
