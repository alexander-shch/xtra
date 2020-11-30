import { combineReducers } from 'redux';
import userReducer from './userReducer/userReducer';
import settingsView from './settingsView/settingsReducer';
import BuildingsReducer from './buildings/BuildingsReducer';
import classesReducer from './classes/classesReducer';
import categoriesReducer from './categories/categoriesReducer';
import vatReducer from './Vat/vatReducer';
import searchField from '../Redux/search/searchReducer';
import lecturesReducer from '../Redux/Lectures/lecturesReducer';
import myAlertReducer from '../Redux/My-Alert/myAlert.reducer';
import deleteReducer from '../Redux/on-delete/delete.reducer';
import semesterReducer from '../Redux/semester/semester.reducer';
import courseListReducer from '../Redux/course-list/courseList.reducer';

const rootReducer = combineReducers({
  user: userReducer,
  toggleSettingsView: settingsView,
  buildings: BuildingsReducer,
  classes: classesReducer,
  categories: categoriesReducer,
  vat: vatReducer,
  searchField: searchField,
  lectures: lecturesReducer,
  alert: myAlertReducer,
  delete: deleteReducer,
  semesters: semesterReducer,
  courseList: courseListReducer,
});

export default rootReducer;
