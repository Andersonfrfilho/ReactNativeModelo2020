import {combineReducers} from 'redux';
import {reducer as offline} from 'redux-offline-queue';
import login from './login/reducer';
import menu from './menu/reducer';
import common from './common/reducer';
import repositories from './repositories/reducer';

export default combineReducers({
  offline,
  common,
  login,
  menu,
  repositories,
});
