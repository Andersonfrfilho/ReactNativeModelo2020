export function addToLoginRequest(username) {
  return {
    type: '@login/ADD_REQUEST',
    payload: {
      username,
    },
  };
}
