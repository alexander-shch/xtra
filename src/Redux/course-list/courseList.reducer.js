const INTAIL_STATE = {
  listLoading: true,
  inProcess: false,
  innerSinglePageLoading: true,
  courseList: [],
  singleCourse: null,
  error: null,
  deleteList: [],
};

const courseListReducer = (state = INTAIL_STATE, action) => {
  switch (action.type) {
    case 'GET_COURSE_START':
    case 'DELETE_COURSE_START':
      return { ...state, listLoading: true };
    case 'ADD_NEW_COURSE_START':
    case 'UPDATE_COURSE_START':
      return { ...state, inProcess: true };
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
        inProcess: false,
        courseList: [...state.courseList, action.payload],
        singleCourse: action.payload,
      };
    case 'GET_SINGLE_COURSE_SUCCESS':
      return {
        ...state,
        innerSinglePageLoading: false,
        singleCourse: action.payload,
      };
    case 'UPDATE_COURSE_SUCCESS':
    case 'UPLOAD_COURSE_FILE_SUCCESS':
      let { courseList } = state;
      let index = courseList.findIndex(
        (item) => item._id === action.payload._id
      );
      courseList[index] = action.payload;
      return {
        ...state,
        courseList,
        inProcess: false,
        singleCourse: action.payload,
      };
    case 'UPLOAD_COURSE_FILE_START':
      return { ...state, inProcess: true };

    case 'DELETE_COURSE_SUCCESS':
      return {
        ...state,
        listLoading: false,
        courseList: state.courseList.filter(
          (course) => course._id !== action.payload
        ),
      };
    case 'DELETE_COURSE_FILE_START':
      return {
        ...state,
        deleteList: [...state.deleteList, action.payload],
      };

    case 'DELETE_COURSE_FILE_SUCCESS':
      let filterDeleteList = state.deleteList.filter(
        (item) => item !== action.payload.fileID
      );
      return {
        ...state,
        singleCourse: action.payload.data,
        deleteList: filterDeleteList,
      };
    case 'GET_COURSE_FAILED':
    case 'ADD_NEW_COURSE_FAILED':
    case 'GET_SINGLE_COURSE_FAILED':
    case 'DELETE_COURSE_FAILED':
    case 'UPDATE_COURSE_FAILED':
    case 'DELETE_COURSE_FILE_FAILED':
      return {
        ...state,
        listLoading: false,
        innerSinglePageLoading: false,
        inProcess: false,
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
