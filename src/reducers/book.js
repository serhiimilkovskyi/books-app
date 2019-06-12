import {
  FETCH_BOOK_LIST_STARTED,
  FETCH_BOOK_LIST_FINISHED,
  UPDATE_BOOK_STARTED,
  UPDATE_BOOK_FINISHED,
} from '../actions/types';

const initialState = {
  list: [],
  fetched: false,
  fetching: false,
  updated: false,
  updating: false,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_BOOK_LIST_STARTED:
      return {
        ...state,
        fetching: true,
      };
    case FETCH_BOOK_LIST_FINISHED:
      return {
        ...state,
        ...action.payload,
        fetching: false,
        fetched: true,
      };
    case UPDATE_BOOK_STARTED:
      return {
        ...state,
        fetching: true,
      };
    case UPDATE_BOOK_FINISHED:
      return {
        ...state,
        ...action.payload,
        fetching: false,
        fetched: true,
      };
    default: return state;
  }
};
