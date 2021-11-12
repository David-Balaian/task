import { handleActions } from 'redux-actions';

import {
  START_LOADING,
  STOP_LOADING,
} from './actions';

export const initialState = {
  loading: false,
};

export default handleActions(
  {
    [START_LOADING]: () => ({ loading: true }), 
    [STOP_LOADING]: () => ({ loading: false }), 
  },
  initialState
);
