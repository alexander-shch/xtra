import { combineReducers } from 'redux';
import userReducer from './userReducer/userReduser';
import settingsView from './settingsView/settingsReducer';
import BuildingsReducer from './buildings/BuildingsReducer';
import classesReducer from './classes/classesReducer';
import categoriesReducer from './categories/categoriesReducer';
import vatReducer from './vat/vatReducer';
import searchField from './search/searchReducer';
import lecturesReducer from './lectures/lecturesReducer';
import myAlertReducer from './my-alert/myAlert.reducer';
import deleteReducer from './on-delete/delete.reducer';

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
});

export default rootReducer;
