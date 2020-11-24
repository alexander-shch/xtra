const INTIAL_STATE = {
  semestersList: [],
  listLoading: true,
  innerSinglePageLoading: true,
  singleSemester: null,
  error: null,
};

const semesterReducer = (state = INTIAL_STATE, action) => {
  const { semestersList } = state;
  switch (action.type) {
    case 'GET_SEMESTERS_START':
    case 'ADD_NEW_SEMESTER_START':
    case 'UPDATE_SEMESTER_START':
    case 'DELETE_SEMESTER_START':
      return { ...state, listLoading: true };
    case 'GET_SINGLE_SEMESTER_START':
      return { ...state, innerSinglePageLoading: true };
    case 'GET_SINGLE_SEMESTER_SUCSESS':
      return {
        ...state,
        innerSinglePageLoading: false,
        singleSemester: action.payload,
      };
    case 'GET_SEMESTERS_SUCSESS':
      return {
        ...state,
        listLoading: false,
        semestersList: action.payload,
      };
    case 'ADD_NEW_SEMESTER_SUCSESS':
      return {
        ...state,
        listLoading: false,
        semestersList: [...state.semestersList, action.payload],
      };
    case 'UPDATE_SEMESTER_SUCSESS':
      let index = semestersList.findIndex(
        (semester) => semester._id === action.payload._id
      );
      semestersList[index] = action.payload;
      return { ...state, listLoading: false, semestersList };
    case 'DELETE_SEMESTER_SUCSESS':
      let filterList = semestersList.filter(
        (semester) => semester._id !== action.payload
      );
      return { ...state, listLoading: false, semestersList: filterList };
    case 'GET_SEMESTERS_FAILED':
    case 'ADD_NEW_SEMESTER_FAILED':
    case 'GET_SINGLE_SEMESTER_FAILED':
    case 'DELETE_SEMESTER_FAILED':
      return {
        ...state,
        listLoading: false,
        innerSinglePageLoading: false,
        error: action.payload,
      };
    case 'CLEAR_SINGLE':
      return {
        ...state,
        innerSinglePageLoading: true,
        singleSemester: null,
        error: null,
      };
    default:
      return state;
  }
};

export default semesterReducer;
