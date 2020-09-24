import { addNote, deleteNote } from './lectures.utiles';

const INTAIL_STATE = {
  loading: false,
  avatarLoading: false,
  lectures: [],
  error: null,
  pageLoading: false,
};

const lecturesReducer = (state = INTAIL_STATE, action) => {
  switch (action.type) {
    case 'GET_LECTURES_START':
      return { ...state, pageLoading: true };
    case 'ADD_NEW_LECTURE_START':
    case 'UPDATE_LECTURE_START':
    case 'DELETE_LECTURE_START':
    case 'ADD_NEW_NOTE_START':
    case 'DELETE_NOTE_START':
      return { ...state, loading: true };
    case 'SET_AVATAR_IMG_START':
      return { ...state, avatarLoading: true };
    case 'GET_LECTURES_SUCSESS':
      return {
        ...state,
        pageLoading: false,
        loading: false,
        lectures: action.payload,
      };
    case 'ADD_NEW_LECTURE_SUCSESS':
      return {
        ...state,
        loading: false,
        lectures: [...state.lectures, action.payload],
      };
    case 'UPDATE_LECTURE_SUCSESS':
    case 'SET_AVATAR_IMG_SUCSESS':
      let { lectures } = state;
      let index = lectures.findIndex((item) => item._id === action.payload._id);
      lectures[index] = action.payload;
      return { ...state, avatarLoading: false, loading: false, lectures };
    case 'DELETE_LECTURE_SUCSESS':
      return {
        ...state,
        loading: false,
        lectures: state.lectures.filter((item) => item._id !== action.payload),
      };
    case 'ADD_NEW_NOTE_SUCSESS':
      console.log(action.payload);
      return {
        ...state,
        loading: false,
        lectures: addNote(state, action.payload),
      };
    case 'DELETE_NOTE_SUCSESS':
      return {
        ...state,
        loading: false,
        lectures: deleteNote(state, action.payload),
      };
    case 'GET_LECTURES_FAILED':
    case 'ADD_NEW_LECTURE_FAILED':
    case 'UPDATE_LECTURE_FAILED':
    case 'DELETE_LECTURE_FAILED':
    case 'SET_AVATAR_IMG_FAIELD':
    case 'DELETE_NOTE_FAILED':
      return {
        ...state,
        loading: false,
        pageLoading: false,
        avatarLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default lecturesReducer;
