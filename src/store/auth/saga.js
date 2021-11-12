import { push } from 'connected-react-router';
import { takeLatest, put, call, all } from 'redux-saga/effects';

import {
  LOGIN,
  loginError,
  loginSuccess,
  LOGOUT,
  logout,
} from './actions';

function* loginSaga({payload: { userName, password }}) {
  try {
    if(userName && password){
      yield all([put(loginSuccess({ userName, password })), put(push('/items'))])
    }else{
      yield put(loginError({ error: 'Please fill both fields' }))
    }
  } catch (e) {
    yield call(logoutSaga);
  }
}

function* logoutSaga() {
  yield put(logout());
}

export default function* authWatcherSaga() {
  yield takeLatest(LOGIN, loginSaga);
  yield takeLatest(LOGOUT, logoutSaga);
}
