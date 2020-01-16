// chama funções assincronas com respostas
// select busca informações sobre o estado
import {call, select, spawn, put, all, takeLatest} from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../../../services/api';
import {
  commonLoadingActivity,
  commonSuccessAction,
  commonFailureAction,
} from '../common/actions';
import {UserException, errorVerify} from '../../../procedure/exceptions';
import {addToLoginSuccess} from './actions';
import {navigate} from '../../../services/navigation';

import {startWatchingNetworkConnectivity} from '../offline';

function* addToLogin({payload}) {
  yield put(commonLoadingActivity('carregando...'));
  const {username} = payload;
  try {
    const {data} = yield call(api.get, `/users/${username}`);
    yield call(AsyncStorage.setItem, '@AppName:user', data.login);
    yield put(commonSuccessAction(''));
    navigate('Menu');
  } catch (error) {
    // erro de typagem no código
    const message = errorVerify(error);
    yield put(commonFailureAction(message));
  } finally {
    console.tron.log('finalizou');
  }
}

export default all([
  spawn(startWatchingNetworkConnectivity),
  takeLatest('@login/ADD_REQUEST', addToLogin),
]);
