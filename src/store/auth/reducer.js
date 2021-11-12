import { handleActions } from 'redux-actions';

import {
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  LOGOUT,
} from './actions';

export const initialState = {
  userName: null,
  password: null,
  error: null,
};

export default handleActions(
  {
    [LOGIN_ERROR]: (state, { payload }) => ({ ...state, ...payload }), 
    [LOGIN_SUCCESS]: (state, { payload }) => ({ ...state, ...payload, error: null, }),
    [LOGOUT]: () => ({ ...initialState }),
  },
  initialState
);
