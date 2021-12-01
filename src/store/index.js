import { createStore, combineReducers } from "redux";
import {filmReducer} from "./FilmReducer";
import {userReducer} from "./UserReducer"

const rootReducer = combineReducers({
 filmId: filmReducer,
 user: userReducer
})

export const store = createStore(rootReducer)
