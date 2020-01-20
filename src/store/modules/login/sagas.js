// chama funções assincronas com respostas
// select busca informações sobre o estado
import {call, select, spawn, put, all, takeLatest} from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
import {CommonActions, NavigationContext} from '@react-navigation/native';
import {navigate} from '../../../services/navigation';
import api from '../../../services/api';
import {
  commonLoadingActivity,
  commonSuccessAction,
  commonFailureAction,
} from '../common/actions';
import {Exceptions} from '../../../procedures';
import {addToLoginSuccess} from './actions';

function* addToLogin({payload}) {
  yield put(commonLoadingActivity('carregando...'));
  const {username} = payload;
  try {
    const {data} = yield call(api.get, `/users/${username}`);
    yield call(AsyncStorage.setItem, '@AppName:user', data.login);
    yield put(commonSuccessAction(''));
  } catch (error) {
    // erro de typagem no código
    const message = Exceptions.errorVerify(error);
    yield put(commonFailureAction(message));
  } finally {
    navigate('Menu');
  }
}

export default all([takeLatest('@login/ADD_REQUEST', addToLogin)]);
