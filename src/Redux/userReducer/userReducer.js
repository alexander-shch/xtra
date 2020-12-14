const INITIAL_STATE = {
  userLoged: null,
  loading: true,
  error: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'USER_LOG_LOADING':
      return { ...state, loading: true, error: null };
    case 'SIGNIN_SUCCESS':
      return { ...state, userLoged: action.payload, loading: false };
    case 'SIGNOUT_SUCCESS':
      return { ...state, userLoged: null };
    case 'SIGNOUT_FAILED':
    case 'SIGNIN_FAILED':
      return { ...state, error: action.payload, loading: false };

    default:
      return state;
  }
};

export default userReducer;
