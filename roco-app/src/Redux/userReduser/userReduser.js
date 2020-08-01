const INITAL_STATE = {
  userLoged: null,
  loading: false,
  error: null,
};

const userReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case "USER_LOG_LOADING":
      return { ...state, loading: true };
    case "SIGNIN_SUCSESS":
      return { ...state, userLoged: action.payload, loading: false };
    case "SIGNOUT_SUCSESS":
      return { ...state, userLoged: null };
    case "SIGNOUT_FAILED":
    case "SIGNIN_FAILED":
      return { ...state, error: action.payload, loading: false };

    default:
      return state;
  }
};

export default userReducer;
