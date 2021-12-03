const initialSate = {
  user: {
    role: "USER",
    isAuth: false,
  },
};

const CHANGE_USER = "CHANGE_USER";
const LOGOUT_USER = "LOGOUT_USER";
const CHANGE_USER_ROLE = "CHANGE_USER_ROLE";

export const userReducer = (state = initialSate.user, action) => {
  switch (action.type) {
    case CHANGE_USER:
      return { ...state, isAuth: action.payload };
    case CHANGE_USER_ROLE:
      return { ...state, role: action.payload };
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

export const changeUserRole = (payload) => ({
  type: CHANGE_USER_ROLE,
  payload,
});

export const userLogOut = (payload) => ({
  type: LOGOUT_USER,
  payload,
});
