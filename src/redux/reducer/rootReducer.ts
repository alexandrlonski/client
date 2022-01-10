import { combineReducers } from "redux";
import { filmReducer } from "./filmReducer";
import { userReducer } from "./userReducer";
import { modalReducer } from "./modalReducer";
import { filmsCountReducer, filmsReducer } from "./filmsReducer";
import { cinemaReducer, cinemasReducer } from "./cinemaReducer";

const rootReducer = combineReducers({
  modal: modalReducer,
  film: filmReducer,
  user: userReducer,
  films: filmsReducer,
  pageView: filmsCountReducer,
  cinemas: cinemasReducer,
  cinema: cinemaReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
