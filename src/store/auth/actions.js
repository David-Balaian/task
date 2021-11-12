import { createActions } from 'redux-actions';

export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGOUT = 'LOGOUT';

export const {
  login,
  loginSuccess,
  loginError,
  logout,
} = createActions({
  [LOGIN]: (payload) => payload,
  [LOGIN_SUCCESS]: (payload) => payload,
  [LOGIN_ERROR]: (payload) => payload,
  [LOGOUT]: (payload) => payload,
});
