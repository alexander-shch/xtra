import { combineReducers } from 'redux';
import userReducer from './userReduser/userReduser';
import settingsView from './settingsView/settingsReducer';
import BuildingsReducer from './Data/BuildingsReducer';

const rootReducer = combineReducers({
  user: userReducer,
  toggleSettingsView: settingsView,
  Buildings: BuildingsReducer,
});

export default rootReducer;
