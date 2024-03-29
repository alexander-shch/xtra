import {
  addNoteToSingleLecture,
  deleteSingleNote,
  deleteFile,
} from './lectures.utiles';

const INTAIL_STATE = {
  listLoading: true,
  inProcess: true,
  innerSinglePageLoading: true,
  avatarLoading: false,
  noteLoading: false,
  fileSpinner: false,
  lectures: [],
  singleLecture: null,
  error: null,
  deleteList: [],
  getSingleError: null,
};

const lecturesReducer = (state = INTAIL_STATE, action) => {
  let { deleteList } = state;
  switch (action.type) {
    case 'GET_LECTURES_START':
      return { ...state, listLoading: true };
    case 'GET_SINGLE_LECTURE_START':
      return { ...state, innerSinglePageLoading: true };
    case 'ADD_NEW_LECTURE_START':
    case 'UPDATE_LECTURE_START':
      return { ...state, inProcess: true };
    case 'ADD_NEW_NOTE_START':
      return { ...state, noteLoading: true };
    case 'UPLOAD_CV_START':
      return { ...state, fileSpinner: true };
    case 'DELETE_LECTURE_START':
    case 'DELETE_NOTE_START':
    case 'DELETE_FILE_START':
      return { ...state, deleteList: [...state.deleteList, action.payload] };
    case 'UPLOAD_CV_SUCCESS':
      return { ...state, singleLecture: action.payload, fileSpinner: false };
    case 'DELETE_FILE_SUCCESS':
      const filterList = deleteList.filter(
        (item) => item === action.payload._id
      );
      return {
        ...state,
        singleLecture: deleteFile(state, action.payload),
        deleteList: filterList,
      };
    case 'SET_AVATAR_IMG_START':
      return { ...state, avatarLoading: true };
    case 'GET_SINGLE_LECTURE_SUCCESS':
      return {
        ...state,
        singleLecture: action.payload,
        inProcess: false,
        innerSinglePageLoading: false,
        noteLoading: false,
      };
    case 'GET_LECTURES_SUCCESS':
      return {
        ...state,
        listLoading: false,
        inProcess: false,
        lectures: action.payload,
        innerSinglePageLoading: false,
      };
    case 'ADD_NEW_LECTURE_SUCCESS':
      return {
        ...state,
        inProcess: false,
        lectures: [...state.lectures, action.payload],
        singleLecture: action.payload,
        innerSinglePageLoading: false,
      };
    case 'UPDATE_LECTURE_SUCCESS':
    case 'SET_AVATAR_IMG_SUCCESS':
      let { lectures } = state;
      let index = lectures.findIndex((item) => item._id === action.payload._id);
      lectures[index] = action.payload;
      return {
        ...state,
        avatarLoading: false,
        inProcess: false,
        lectures,
        singleLecture: action.payload,
      };
    case 'DELETE_LECTURE_SUCCESS':
      return {
        ...state,
        listLoading: false,
        lectures: state.lectures.filter((item) => item._id !== action.payload),
      };
    case 'ADD_NEW_NOTE_SUCCESS':
      return {
        ...state,
        noteLoading: false,
        singleLecture: addNoteToSingleLecture(state, action.payload),
      };
    case 'DELETE_NOTE_SUCCESS':
      let fList = deleteList.filter((item) => item === action.payload._id);
      return {
        ...state,
        noteLoading: false,
        singleLecture: deleteSingleNote(state, action.payload),
        deleteList: fList,
      };
    case 'GET_LECTURES_FAILED':
    case 'ADD_NEW_LECTURE_FAILED':
    case 'UPDATE_LECTURE_FAILED':
    case 'DELETE_LECTURE_FAILED':
    case 'SET_AVATAR_IMG_FAILED':
    case 'DELETE_NOTE_FAILED':
      return {
        ...state,
        inProcess: false,
        listLoading: false,
        avatarLoading: false,
        error: action.payload,
        noteLoading: false,
        downLoadSpinner: false,
      };
    case 'GET_SINGLE_LECTURE_FAILED':
      return { ...state, getSingleError: action.payload };
    case 'CLEAR_SINGLE':
      return {
        ...state,
        singleLecture: null,
        error: null,
        innerSinglePageLoading: true,
        getSingleError: null,
      };
    default:
      return state;
  }
};

export default lecturesReducer;
