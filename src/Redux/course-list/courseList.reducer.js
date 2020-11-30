const INTAIL_STATE = {
  listLoading: true,
  inProcsess: false,
  innerSinglePageLoading: true,
  courseList: [],
  singleCourse: null,
  error: null,
};

const courseListReducer = (state = INTAIL_STATE, action) => {
  switch (action.type) {
    case 'GET_COURSE_START':
      return { ...state, listLoading: true };
    case 'ADD_NEW_COURSE_START':
      return { ...state, inProcsess: true };
    case 'GET_SINGLE_COURSE_START':
      return { ...state, innerSinglePageLoading: true };
    case 'GET_COURSE_SUCCESS':
      return {
        ...state,
        listLoading: false,
        courseList: action.payload,
        error: null,
      };
    case 'ADD_NEW_COURSE_SUCCESS':
      return {
        ...state,
        inProcsess: false,
        courseList: [...state.courseList, action.payload],
        singleCourse: action.payload,
      };
    case 'GET_SINGLE_COURSE_SUCCESS':
      return {
        ...state,
        innerSinglePageLoading: false,
        singleCourse: action.payload,
      };
    case 'GET_COURSE_FAILED':
    case 'ADD_NEW_COURSE_FAILED':
    case 'GET_SINGLE_COURSE_FAILED':
      return {
        ...state,
        listLoading: false,
        innerSinglePageLoading: false,
        inProcsess: false,
        error: action.payload,
      };
    case 'CLEAR_SINGLE':
      return {
        ...state,
        innerSinglePageLoading: false,
        error: null,
        singleCourse: null,
      };
    default:
      return state;
  }
};

export default courseListReducer;
