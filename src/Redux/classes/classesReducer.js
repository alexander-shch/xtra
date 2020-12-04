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
  loading: false,
  calenderLoading: false,
  process: false,
  innerSinglePageLoading: true,
  classes: [],
  singleClass: null,
  jewishHolydays: [],
  error: null,
};

const classesReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_SINGLE_CLASS_START':
      return { ...state, innerSinglePageLoading: true };
    case 'CLASSES_FETCH_START':
      return { ...state, loading: true };
    case 'DELETE_CLASS_START':
    case 'UPDATE_CLASS_START':
    case 'ADD_NEW_CLASS_START':
      return { ...state, process: true };
    case 'CLASSES_FETCH_SUCCESS':
      return {
        ...state,
        process: false,
        loading: false,
        classes: action.payload,
      };
    case 'GET_SINGLE_CLASS_SUCCESS':
      return {
        ...state,
        singleClass: action.payload,
        innerSinglePageLoading: false,
      };
    case 'SET_AVAILABILITY_START':
    case 'UPDATE_AVAILABILTY_START':
    case 'DELETE_AVAILABILTY_START':
      return { ...state, calenderLoading: true };
    case 'ADD_CLASS_SUCCESS':
      return {
        ...state,
        classes: [...state.classes, action.payload],
        process: false,
        innerSinglePageLoading: false,
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
        jewishHolydays: holyDaysTodisplay(action.payload),
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
        loading: false,
      };
    case 'CLEAR_SINGLE':
      return {
        ...state,
        singleClass: null,
        error: null,
        innerSinglePageLoading: true,
      };
    default:
      return state;
  }
};

export default classesReducer;
