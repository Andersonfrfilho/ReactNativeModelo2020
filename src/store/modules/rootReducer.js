import {combineReducers} from 'redux';
import login from './login/reducer';
import menu from './menu/reducer';
import common from './common/reducer';
import repositories from './repositories/reducer';

export default combineReducers({
  common,
  login,
  menu,
  repositories,
});
