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
    if (error instanceof TypeError) {
      yield put(
        commonFailureAction(
          `erro de typagem de código linha:${error.line}, coluna:${error.column}`
        )
      );
    } else if (error instanceof RangeError) {
      yield put(
        commonFailureAction(
          `erro no tipo de variavel de código linha:${error.line}, coluna:${error.column}`
        )
      );
    } else if (error.message === 'Request failed with status code 404') {
      yield put(commonFailureAction(`Erro na API verifique a chamada`));
    } else if (error.message === 'Network Error') {
      yield put(commonFailureAction(`Erro de conexao verifique sua Internet`));
    } else {
      console.tron.log('proximo erro');
      console.tron.log(error);
      yield put(commonFailureAction(`Proximo Erro`));
    }
  } finally {
    console.tron.log('finalizou');
  }
}

export default all([
  spawn(startWatchingNetworkConnectivity),
  takeLatest('@login/ADD_REQUEST', addToLogin),
]);
