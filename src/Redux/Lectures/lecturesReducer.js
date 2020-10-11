import { addNoteToSingleLecture, deleteSingleNote } from './lectures.utiles';

const INTAIL_STATE = {
  listLoading: true,
  inProcess: true,
  innerSinglePageLoading: true,
  avatarLoading: false,
  noteLoading: true,
  lectures: [],
  singleLecture: null,
  error: null,
};

const lecturesReducer = (state = INTAIL_STATE, action) => {
  switch (action.type) {
    case 'GET_LECTURES_START':
    case 'DELETE_LECTURE_START':
      return { ...state, listLoading: true };
    case 'GET_SINGLE_LECTURE_START':
      return { ...state, innerSinglePageLoading: true };
    case 'ADD_NEW_LECTURE_START':
    case 'UPDATE_LECTURE_START':
      return { ...state, inProcess: true };
    case 'ADD_NEW_NOTE_START':
    case 'DELETE_NOTE_START':
      return { ...state, noteLoading: true };
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
      return {
        ...state,
        noteLoading: false,
        singleLecture: deleteSingleNote(state, action.payload),
      };
    case 'GET_LECTURES_FAILED':
    case 'ADD_NEW_LECTURE_FAILED':
    case 'UPDATE_LECTURE_FAILED':
    case 'DELETE_LECTURE_FAILED':
    case 'SET_AVATAR_IMG_FAILED':
    case 'DELETE_NOTE_FAILED':
    case 'GET_SINGLE_LECTURE_FAILED':
      return {
        ...state,
        inProcess: false,
        listLoading: false,
        avatarLoading: false,
        error: action.payload,
        noteLoading: false,
      };
    case 'CLEAR_SINGLE':
      return { ...state, singleLecture: null, error: null };
    default:
      return state;
  }
};

export default lecturesReducer;
