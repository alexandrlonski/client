import { combineReducers } from "redux";
import { filmReducer } from "./filmReducer";
import { userReducer, usersReducer } from "./userReducer";
import { modalReducer } from "./modalReducer";
import { filmsCountReducer, filmsReducer } from "./filmsReducer";
import {
  cinemaReducer,
  cinemasReducer,
  cinemasCountReducer,
} from "./cinemaReducer";

const rootReducer = combineReducers({
  modal: modalReducer,
  film: filmReducer,
  user: userReducer,
  films: filmsReducer,
  filmsPageView: filmsCountReducer,
  cinemasPageView: cinemasCountReducer,
  cinemas: cinemasReducer,
  cinema: cinemaReducer,
  users: usersReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
