import {
  SET_WINDOW_RESIZE,
  SET_WINDOW_RESIZE_FINISHED,
  SET_WINDOW_ORIENTATION,
  SET_IS_MOBILE,
  SET_ONLINE,
  SET_SCROLL,
  SET_DISABLED,
} from '../actions/types';

const initialState = {
  windowSize: [window.innerWidth, window.innerHeight],
  windowOrientation: window.screen.orientation || window.screen.mozOrientation
  || window.screen.msOrientation,
  isMobile: window.innerWidth < 960,
  online: window.navigator.onLine,
  isActiveScroll: true,
  disabled: false,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_WINDOW_RESIZE:
    case SET_WINDOW_RESIZE_FINISHED:
      return { ...state, windowSize: action.payload };
    case SET_WINDOW_ORIENTATION:
      return { ...state, windowOrientation: action.payload };
    case SET_IS_MOBILE:
      return { ...state, isMobile: action.payload };
    case SET_ONLINE:
      return { ...state, online: action.payload };
    case SET_SCROLL:
      return { ...state, isActiveScroll: action.payload };
    case SET_DISABLED:
      return { ...state, disabled: action.payload };
    default: return state;
  }
};
