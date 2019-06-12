import {
  FETCH_BOOK_LIST_STARTED,
  FETCH_BOOK_LIST_FINISHED,
  UPDATE_BOOK_STARTED,
  UPDATE_BOOK_FINISHED,
} from './types';

import list from '../utils/apiResponse';

export const fetchBookList = () => (dispatch) => {
  dispatch({ type: FETCH_BOOK_LIST_STARTED });
  dispatch({ type: FETCH_BOOK_LIST_FINISHED, payload: list });
};

export const fetchBook = item => (dispatch) => {
  dispatch({ type: UPDATE_BOOK_STARTED });
  dispatch({ type: UPDATE_BOOK_FINISHED, payload: list });
};
