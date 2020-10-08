import { addNoteToSingleLecture, deleteSingleNote } from './lectures.utiles';

const INTAIL_STATE = {
  loading: true,
  avatarLoading: false,
  lectures: [],
  singleLecture: null,
  error: null,
  pageLoading: true,
  editorLoading: true,
};

const lecturesReducer = (state = INTAIL_STATE, action) => {
  switch (action.type) {
    case 'GET_LECTURES_START':
    case 'DELETE_LECTURE_START':
      return { ...state, pageLoading: true };
    case 'ADD_NEW_LECTURE_START':
    case 'UPDATE_LECTURE_START':
    case 'ADD_NEW_NOTE_START':
    case 'DELETE_NOTE_START':
      return { ...state, loading: true };
    case 'GET_SINGLE_LECTURE_START':
      return { ...state, loading: true, editorLoading: true };
    case 'SET_AVATAR_IMG_START':
      return { ...state, avatarLoading: true };

    case 'GET_SINGLE_LECTURE_SUCCESS':
      return {
        ...state,
        singleLecture: action.payload,
        loading: false,
        editorLoading: false,
      };
    case 'GET_LECTURES_SUCSESS':
      return {
        ...state,
        pageLoading: false,
        loading: false,
        lectures: action.payload,
        editorLoading: false,
      };
    case 'ADD_NEW_LECTURE_SUCSESS':
      return {
        ...state,
        loading: false,
        lectures: [...state.lectures, action.payload],
        singleLecture: action.payload,
      };
    case 'UPDATE_LECTURE_SUCSESS':
    case 'SET_AVATAR_IMG_SUCSESS':
      let { lectures } = state;
      let index = lectures.findIndex((item) => item._id === action.payload._id);
      lectures[index] = action.payload;
      return {
        ...state,
        avatarLoading: false,
        loading: false,
        lectures,
        singleLecture: action.payload,
      };
    case 'DELETE_LECTURE_SUCSESS':
      return {
        ...state,
        pageLoading: false,
        lectures: state.lectures.filter((item) => item._id !== action.payload),
      };
    case 'ADD_NEW_NOTE_SUCSESS':
      return {
        ...state,
        loading: false,
        singleLecture: addNoteToSingleLecture(state, action.payload),
      };
    case 'DELETE_NOTE_SUCSESS':
      return {
        ...state,
        loading: false,
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
        loading: false,
        pageLoading: false,
        avatarLoading: false,
        error: action.payload,
      };
    case 'CLEAR_SINGLE':
      return { ...state, singleLecture: null, error: null };
    default:
      return state;
  }
};

export default lecturesReducer;
