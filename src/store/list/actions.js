import { createActions } from 'redux-actions';

export const GET_LIST = 'GET_LIST';
export const GET_LIST_SUCCESS = 'GET_LIST_SUCCESS';
export const GET_LIST_ERROR = 'GET_LIST_ERROR';

export const {
  getList,
  getListSuccess,
  getListError,
} = createActions({
  [GET_LIST]: (payload) => payload,
  [GET_LIST_SUCCESS]: (payload) => payload,
  [GET_LIST_ERROR]: (payload) => payload,
});
