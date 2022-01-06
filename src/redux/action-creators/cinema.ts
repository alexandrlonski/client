import { ICinema } from "../../types/cinema";
import { IAddCinemas } from "../actions-types/cinemaActions";
import { Actions } from "../cases/cases";

export const addAllCinemas = (payload: ICinema[]): IAddCinemas => ({
  type: Actions.ADD_CINEMAS,
  payload,
});
