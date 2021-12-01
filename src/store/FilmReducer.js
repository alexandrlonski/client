const initialSate = {
  filmId: 1
}

const CHANGE_ID = "CHANGE_ID"

export const filmReducer = (state = initialSate, action) => {
 switch (action.type) {
  case CHANGE_ID:
   return {...state, filmId: action.payload}
   
  default:
   return state
   
 }
}
export const changeFilm = (payload) => ({
 type: CHANGE_ID,
 payload,
})

