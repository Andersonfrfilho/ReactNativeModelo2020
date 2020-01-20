import {all, spawn} from 'redux-saga/effects';

import login from './login/sagas';
import menu from './menu/sagas';
import repositories from './repositories/sagas';

export default function* rootSaga() {
  return yield all([
    login,
    menu,
    repositories,
    // adicione mais sagas
  ]);
}
