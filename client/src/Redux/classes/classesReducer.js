const INTIAL_STATE = {
  loading: false,
  classes: [],
  error: null,
};

const classesReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case 'CLASSES_FETCH_START':
    case 'DELETE_CLASS_START':
      return { ...state, loading: true };
    case 'CLASSES_FETCH_SUCSESS':
      return { ...state, loading: false, classes: action.payload };
    case 'ADD_CLASS_SUCSESS':
      return { ...state, classes: [...state.classes, action.payload] };
    case 'DELETE_CLASS_SUCSESS':
      return {
        ...state,
        classes: state.classes.filter((item) => item._id !== action.payload),
        loading: false,
      };
    case 'CLASSES_FETCH_FAILED':
    case 'ADD_CLASS_FAILED':
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default classesReducer;
