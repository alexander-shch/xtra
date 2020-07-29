import { combineReducers } from 'redux';
import userReducer from './userReduser/userReduser'
import settingsView from './settingsView/settingsReducer'


const rootReducer= combineReducers({
user:userReducer,
toggleSettingsView:settingsView
});




export default  rootReducer

