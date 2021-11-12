import { takeLatest, put, call } from 'redux-saga/effects';
import { publicAPI } from '../../api/config';

import {
  getListSuccess,
  getListError,
  GET_LIST,
} from './actions';

function* getListSaga({payload: params}) {
  try {
    const { data: { results } } = yield call(publicAPI.get, '/api', { params })
    yield put(getListSuccess({list: results}))
  } catch (e) {
    yield put(getListError())
  }
}

export default function* listWatcherSaga() {
  yield takeLatest(GET_LIST, getListSaga);
}
