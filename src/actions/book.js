import {
  FETCH_BOOK_LIST_STARTED,
  FETCH_BOOK_LIST_FINISHED,
  UPDATE_BOOK_STARTED,
  UPDATE_BOOK_FINISHED,
} from './types';

import apiResponse from '../utils/apiResponse';

export const fetchBookList = () => (dispatch) => {
  dispatch({ type: FETCH_BOOK_LIST_STARTED });
  dispatch({ type: FETCH_BOOK_LIST_FINISHED, payload: { list: apiResponse } });
};

export const deleteBook = item => (dispatch, getState) => {
  const { list } = getState().book;
  dispatch({ type: UPDATE_BOOK_STARTED });
  dispatch({ type: UPDATE_BOOK_FINISHED, payload: { list: list.filter(l => l.id !== item.id) } });
};

export const updateBook = item => (dispatch, getState) => {
  const { list } = getState().book;
  dispatch({ type: UPDATE_BOOK_STARTED });
  // eslint-disable-next-line no-unused-expressions
  const newList = list.find(l => l.id === item.id)
    ? list.map(l => (l.id === item.id ? item : l))
    : [...list, {
      ...item,
      id: list.length + 1,
      imageSrc: 'https://aimint.org/ap/wp-content/uploads/sites/18/2016/04/image-placeholder-vertical.jpg',
    }];
  dispatch({
    type: UPDATE_BOOK_FINISHED,
    payload: { list: newList },
  });
};

