import { combineReducers } from "redux";
import { filmReducer } from "./filmReducer";
import { userReducer } from "./userReducer";
import { modalReducer } from "./modalReducer";
import { filmsCountReducer, filmsReducer } from "./filmsReducer";

const rootReducer = combineReducers({
  modal: modalReducer,
  filmId: filmReducer,
  user: userReducer,
  films: filmsReducer,
  pageView: filmsCountReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
