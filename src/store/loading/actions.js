import { createActions } from 'redux-actions';

export const START_LOADING = 'START_LOADING';
export const STOP_LOADING = 'STOP_LOADING';

export const {
  startLoading,
  stopLoading
} = createActions({
  [START_LOADING]: (payload) => payload,
  [STOP_LOADING]: (payload) => payload,
});
