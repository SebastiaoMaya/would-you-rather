import { loadingBarReducer } from 'react-redux-loading';
import { combineReducers } from 'redux';
import authedUser from './authedUser';
import loading from './loading';
import questions from './questions';
import users from './users';

export default combineReducers({
  authedUser,
  questions,
  users,
  loadingBar: loadingBarReducer,
  loading
});
