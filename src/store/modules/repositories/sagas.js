// chama funções assincronas com respostas
// select busca informações sobre o estado
import {call, select, put, all, takeLatest} from 'redux-saga/effects';
import api from '../../../services/api';
import {addToRepositoriesSuccess} from './actions';
import {navigate} from '../../../routes';
// generator
// é como se fosse um async
function* addToRepositories(id) {
  console.tron.log('navegação');
}

export default all([
  takeLatest('@repositories/ADD_REQUEST', addToRepositories),
]);
