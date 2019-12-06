import {markActionsOffline} from 'redux-offline-queue';

export const Creators = {
  addToLoginRequest: username => ({
    type: '@login/ADD_REQUEST',
    payload: {username},
  }),
};
export function addToLoginRequest(username) {
  return {
    type: '@login/ADD_REQUEST',
    payload: {
      username,
    },
  };
}
markActionsOffline(Creators, ['addToLoginRequest']);
