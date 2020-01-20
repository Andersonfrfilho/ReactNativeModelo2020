// chama funções assincronas com respostas
// select busca informações sobre o estado
import {call, select, put, all, takeLatest} from 'redux-saga/effects';
import api from '../../../services/api';
import {addToMenuSuccess} from './actions';
// generator
// é como se fosse um async
function* addToMenu(id) {
  console.tron.log('navegação');
}

export default all([takeLatest('@menu/ADD_REQUEST', addToMenu)]);
