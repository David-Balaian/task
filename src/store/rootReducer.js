import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import history from '../history';
import auth from './auth/reducer'
import status from './loading/reducer'
import items from './list/reducer'

export default combineReducers({
  router: connectRouter(history),
  status,
  auth,
  items,
});