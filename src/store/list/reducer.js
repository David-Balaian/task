import { handleActions } from 'redux-actions';

import {
  GET_LIST_SUCCESS,
  GET_LIST_ERROR,
} from './actions';

export const initialState = {
  list: [],
};

export default handleActions(
  {
    [GET_LIST_SUCCESS]: (state, { payload }) => ({ ...state, ...payload }), 
    [GET_LIST_ERROR]: (state, { payload }) => ({ ...state, ...payload, error: null, }),
  },
  initialState
);
