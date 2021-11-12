import { spawn } from 'redux-saga/effects';

import authWatcherSaga from './auth/saga';
import listWatcherSaga from './list/saga';

export default function* rootSaga() {
  yield spawn(authWatcherSaga);
  yield spawn(listWatcherSaga);
}
