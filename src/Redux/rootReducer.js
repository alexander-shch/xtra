import { combineReducers } from 'redux';
import userReducer from './userReduser/userReduser';
import settingsView from './settingsView/settingsReducer';
import BuildingsReducer from './buildings/BuildingsReducer';
import classesReducer from './classes/classesReducer';
import categoriesReducer from './categories/categoriesReducer';
import vatReducer from './Vat/vatReducer';
import searchField from '../Redux/search/searchReducer';
import lecturesReducer from '../Redux/Lectures/lecturesReducer';

const rootReducer = combineReducers({
  user: userReducer,
  toggleSettingsView: settingsView,
  buildings: BuildingsReducer,
  classes: classesReducer,
  categories: categoriesReducer,
  vat: vatReducer,
  searchField: searchField,
  lectures: lecturesReducer,
});

export default rootReducer;
