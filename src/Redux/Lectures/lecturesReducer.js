const INTAIL_STATE = {
  loading: false,
  lectures: [],
  error: null,
};

const lecturesReducer = (state = INTAIL_STATE, action) => {
  switch (action.type) {
    case 'GET_LECTURES_START':
    case 'ADD_NEW_LECTURE_START':
    case 'UPDATE_LECTURE_START':
    case 'DELETE_LECTURE_START':
      return { ...state, loading: true };
    case 'GET_LECTURES_SUCSESS':
      return { ...state, loading: false, lectures: action.payload };
    case 'ADD_NEW_LECTURE_SUCSESS':
      return {
        ...state,
        loading: false,
        lectures: [...state.lectures, action.payload],
      };
    case 'UPDATE_LECTURE_SUCSESS':
      let { lectures: newLecturesList } = state;
      let lectures = [...newLecturesList];
      let index = newLecturesList.findIndex(
        (item) => item._id === action.payload._id
      );
      lectures[index] = action.payload;
      return { ...state, loading: false, lectures };

    case 'DELETE_LECTURE_SUCSESS':
      return {
        ...state,
        loading: false,
        lectures: state.lectures.filter((item) => item._id !== action.payload),
      };
    case 'GET_LECTURES_FAILED':
    case 'ADD_NEW_LECTURE_FAILED':
    case 'UPDATE_LECTURE_FAILED':
    case 'DELETE_LECTURE_FAILED':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default lecturesReducer;
