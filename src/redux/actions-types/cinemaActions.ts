import { ICinema } from "../../types/cinema";

export interface IChangeCinema {
  readonly type: "CHANGE_CINEMA";
  payload: ICinema;
}
export interface IAddCinemas {
  readonly type: "ADD_CINEMAS";
  payload: ICinema[];
}

export type CinemaActions = IChangeCinema | IAddCinemas;
