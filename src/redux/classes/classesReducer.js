import {
  updateAvailabilty,
  setAvailabilty,
  updateClass,
  deleteAvailability,
  holyDaysTodisplay,
} from './classes.utiles';

const INTIAL_STATE = {
  pageLoading: false,
  calenderLoading: false,
  loading: false,
  classes: [],
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
      return { ...state, loading: true };
    case 'CLASSES_FETCH_SUCCESS':
      return {
        ...state,
        loading: false,
        pageLoading: false,
        classes: action.payload,
      };
    case 'SET_AVAILABILITY_START':
    case 'UPDATE_AVAILABILTY_START':
    case 'DELETE_AVAILABILTY_START':
      return { ...state, calenderLoading: true };
    case 'ADD_CLASS_SUCCESS':
      return {
        ...state,
        classes: [...state.classes, action.payload],
        loading: false,
      };
    case 'UPDATE_CLASS_SUCCESS':
      return {
        ...state,
        loading: false,
        classes: updateClass(state, action.payload),
      };
    case 'SET_AVAILABILITY_SUCCESS':
      return {
        ...state,
        classes: setAvailabilty(state, action.payload),
        calenderLoading: false,
      };
    case 'UPDATE_AVAILABILTY_SUCCESS':
      return {
        ...state,
        classes: updateAvailabilty(state, action.payload),
        calenderLoading: false,
      };
    case 'DELETE_AVAILABILTY_SUCCESS':
      console.log('red', action.payload);
      return {
        ...state,
        classes: deleteAvailability(state, action.payload),
        calenderLoading: false,
      };
    case 'DELETE_CLASS_SUCCESS':
      return {
        ...state,
        classes: state.classes.filter((item) => item._id !== action.payload),
        loading: false,
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
      return {
        ...state,
        error: action.payload,
        loading: false,
        pageLoading: false,
      };
    default:
      return state;
  }
};

export default classesReducer;
