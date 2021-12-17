import { combineReducers } from "redux";
import { filmReducer } from "./filmReducer";
import { userReducer } from "./userReducer";
import { modalReducer } from "./modalReducer";

const rootReducer = combineReducers({
  modal: modalReducer,
  filmId: filmReducer,
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
