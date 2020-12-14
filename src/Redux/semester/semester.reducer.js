const INITIAL_STATE = {
  semestersList: [],
  listLoading: true,
  innerSinglePageLoading: true,
  singleSemester: null,
  error: null,
  singlePageError: null,
  deleteList: [],
};

const semesterReducer = (state = INITIAL_STATE, action) => {
  const { semestersList } = state;
  switch (action.type) {
    case 'GET_SEMESTERS_START':
    case 'ADD_NEW_SEMESTER_START':
    case 'UPDATE_SEMESTER_START':
      return { ...state, listLoading: true };
    case 'DELETE_SEMESTER_START':
      return { ...state, deleteList: [...state.deleteList, action.payload] };
    case 'GET_SINGLE_SEMESTER_START':
      return { ...state, innerSinglePageLoading: true };
    case 'GET_SINGLE_SEMESTER_SUCCESS':
      return {
        ...state,
        innerSinglePageLoading: false,
        singleSemester: action.payload,
      };
    case 'GET_SEMESTERS_SUCCESS':
      return {
        ...state,
        listLoading: false,
        semestersList: action.payload,
      };
    case 'ADD_NEW_SEMESTER_SUCCESS':
      return {
        ...state,
        listLoading: false,
        semestersList: [...state.semestersList, action.payload],
      };
    case 'UPDATE_SEMESTER_SUCCESS':
      let index = semestersList.findIndex(
        (semester) => semester._id === action.payload._id
      );
      semestersList[index] = action.payload;
      return { ...state, listLoading: false, semestersList };
    case 'DELETE_SEMESTER_SUCCESS':
      let filterList = semestersList.filter(
        (semester) => semester._id !== action.payload
      );
      return {
        ...state,
        listLoading: false,
        semestersList: filterList,
        deleteList: state.deleteList.filter((item) => item === action.payload),
      };
    case 'GET_SEMESTERS_FAILED':
    case 'ADD_NEW_SEMESTER_FAILED':
    case 'DELETE_SEMESTER_FAILED':
      return {
        ...state,
        listLoading: false,
        innerSinglePageLoading: false,
        error: action.payload,
      };
    case 'GET_SINGLE_SEMESTER_FAILED':
      return { ...state, singlePageError: action.payload };
    case 'CLEAR_SINGLE':
      return {
        ...state,
        innerSinglePageLoading: true,
        singleSemester: null,
        error: null,
        singlePageError: null,
      };
    default:
      return state;
  }
};

export default semesterReducer;
