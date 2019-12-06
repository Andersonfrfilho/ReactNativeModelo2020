export function addToRepositoriesRequest(id) {
  return {
    type: '@repositories/ADD_REQUEST',
    id,
  };
}
