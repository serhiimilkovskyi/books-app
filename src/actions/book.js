import axios from 'axios';

import {
  FETCH_BOOK_LIST_STARTED,
  FETCH_BOOK_LIST_FINISHED,
  UPDATE_BOOK_STARTED,
  UPDATE_BOOK_FINISHED,
} from './types';

export const fetchBookList = () => (dispatch) => {
  dispatch({ type: FETCH_BOOK_LIST_STARTED });
  axios.get('books.json').then((result) => {
    dispatch({ type: FETCH_BOOK_LIST_FINISHED, payload: { list: result.data } });
  });
};

export const deleteBook = item => (dispatch, getState) => {
  const { list } = getState().book;
  dispatch({ type: UPDATE_BOOK_STARTED });
  dispatch({ type: UPDATE_BOOK_FINISHED, payload: { list: list.filter(l => l.id !== item.id) } });
};

export const updateBook = item => (dispatch, getState) => {
  const { list } = getState().book;
  dispatch({ type: UPDATE_BOOK_STARTED });
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
