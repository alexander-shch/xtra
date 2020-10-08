import {
  updateAvailabilty,
  setAvailabilty,
  updateClass,
  deleteAvailability,
  holyDaysTodisplay,
  pushToSingle,
  updateSingle,
  deleteSingle,
} from './classes.utiles';

const INTIAL_STATE = {
  pageLoading: false,
  calenderLoading: false,
  process: false,
  classes: [],
  singleClass: null,
  jewsihHolydays: [],
  error: null,
};

const classesReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case 'CLASSES_FETCH_START':
      return { ...state, pageLoading: true };
    case 'DELETE_CLASS_START':
    case 'UPDATE_CLASS_START':
    case 'ADD_NEW_CLASS_START':
      return { ...state, process: true };
    case 'CLASSES_FETCH_SUCCESS':
      return {
        ...state,
        process: false,
        pageLoading: false,
        classes: action.payload,
      };
    case 'GET_SINGLE_CLASS_SUCCESS':
      return { ...state, singleClass: action.payload };
    case 'SET_AVAILABILITY_START':
    case 'UPDATE_AVAILABILTY_START':
    case 'DELETE_AVAILABILTY_START':
      return { ...state, calenderLoading: true };
    case 'ADD_CLASS_SUCCESS':
      return {
        ...state,
        classes: [...state.classes, action.payload],
        process: false,
        singleClass: action.payload,
      };
    case 'UPDATE_CLASS_SUCCESS':
      return {
        ...state,
        process: false,
        classes: updateClass(state, action.payload),
        singleClass: action.payload,
      };
    case 'SET_AVAILABILITY_SUCCESS':
      return {
        ...state,
        classes: setAvailabilty(state, action.payload),
        calenderLoading: false,
        singleClass: pushToSingle(state, action.payload),
      };
    case 'UPDATE_AVAILABILTY_SUCCESS':
      return {
        ...state,
        classes: updateAvailabilty(state, action.payload),
        calenderLoading: false,
        singleClass: updateSingle(state, action.payload),
      };
    case 'DELETE_AVAILABILTY_SUCCESS':
      return {
        ...state,
        classes: deleteAvailability(state, action.payload),
        calenderLoading: false,
        singleClass: deleteSingle(state, action.payload),
      };
    case 'DELETE_CLASS_SUCCESS':
      return {
        ...state,
        classes: state.classes.filter((item) => item._id !== action.payload),
        process: false,
      };
    case 'GET_HOLYDAYS_SUCCESS':
      return {
        ...state,
        jewsihHolydays: holyDaysTodisplay(action.payload),
      };

    case 'SET_AVAILABILITY_FAILED':
    case 'DELETE_AVAILABILTY_FAILED':
    case 'UPDATE_AVAILABILTY_FAILED':
    case 'CLASSES_FETCH_FAILED':
    case 'ADD_CLASS_FAILED':
    case 'GET_HOLYDAYS_FAILED':
    case 'GET_SINGLE_CLASS_FAILED':
      return {
        ...state,
        error: action.payload,
        process: false,
        pageLoading: false,
      };
    case 'CLEAR_SINGLE':
      return { ...state, singleClass: null, error: null };
    default:
      return state;
  }
};

export default classesReducer;
