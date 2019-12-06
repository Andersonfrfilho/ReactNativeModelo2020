export function commonLoadingActivity(message) {
  return {
    type: '@common/LOADING_ACTIVITY',
    payload: {
      message,
      loading: true,
      error: false,
    },
  };
}
export function commonSuccessAction(message) {
  return {
    type: '@common/SUCCESS_ACTION',
    payload: {
      message,
      loading: false,
      error: false,
    },
  };
}
export function commonFailureAction(message) {
  return {
    type: '@common/FAILURE_ACTION',
    payload: {
      message,
      loading: false,
      error: true,
    },
  };
}
