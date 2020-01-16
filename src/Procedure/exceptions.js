export function UserException(message) {
  this.message = message;
  this.name = 'UserException';
}
export function errorVerify(error) {
  if (error instanceof TypeError) {
    return `erro de typagem de código linha:${error.line}, coluna:${error.column}`;
  }
  if (error instanceof RangeError) {
    return `erro no tipo de variavel de código linha:${error.line}, coluna:${error.column}`;
  }
  if (error.message === 'Request failed with status code 404') {
    return `Erro na API verifique a chamada`;
  }
  if (error.message === 'Network Error') {
    return `Erro de conexao verifique sua Internet`;
  }
  if (error.message === 'errorNovo') {
    return `Erro novo`;
  }
  return `Erro Novo`;
}
