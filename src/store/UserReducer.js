const initialSate = {
  user: {
    role: "ADMIN",
    isAuth: true,
  },
};

const CHANGE_USER = "CHANGE_USER";
const LOGOUT_USER = "LOGOUT_USER";

export const userReducer = (state = initialSate.user, action) => {
  switch (action.type) {
    case CHANGE_USER:
      return { ...state, isAuth: action.payload };
    case LOGOUT_USER:
      return { ...state, role: "USER", isAuth: false };

    default:
      return state;
  }
};
export const userIsLogin = (payload) => ({
  type: CHANGE_USER,
  payload,
});
export const userLogOut = (payload) => ({
  type: LOGOUT_USER,
  payload,
});
