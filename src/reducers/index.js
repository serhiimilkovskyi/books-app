import { combineReducers } from 'redux';
import browser from './browser';
import book from './book';

export default combineReducers({
  browser,
  book,
});
