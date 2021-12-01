const initialSate = {
  user: {},
  isAuth: false
}

const CHANGE_USER = "CHANGE_USER"
const CREATE_USER = "CREATE_USER"

export const userReducer = (state = initialSate, action) => {
 switch (action.type) {
  case CHANGE_USER:
   return {...state, isAuth: action.payload}
  case CREATE_USER:
   return {...state, user: action.payload}
   
  default:
   return state
 }
}
export const userIsLogin = (payload) => ({
 type: CHANGE_USER,
 payload,
})
export const createUser = (payload) => ({
 type: CREATE_USER,
 payload,
})
