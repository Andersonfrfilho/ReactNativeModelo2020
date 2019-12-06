import produce from 'immer';

const INITITAL_STATE = {
  loading: false,
  error: false,
  message: '',
};
export default function login(state = INITITAL_STATE, action) {
  switch (action.type) {
    case '@common/LOADING_ACTIVITY':
      return produce(state, draft => {
        draft.loading = action.payload.loading;
        draft.message = action.payload.message;
        draft.error = action.payload.error;
      });
    case '@common/SUCCESS_ACTION':
      return produce(state, draft => {
        draft.loading = action.payload.loading;
        draft.message = action.payload.message;
        draft.error = action.payload.error;
      });
    case '@common/FAILURE_ACTION':
      return produce(state, draft => {
        draft.loading = action.payload.loading;
        draft.message = action.payload.message;
        draft.error = action.payload.error;
      });
    default:
      return state;
  }
}
