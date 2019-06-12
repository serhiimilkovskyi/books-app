import {
  SET_WINDOW_RESIZE,
  SET_WINDOW_RESIZE_FINISHED,
  SET_WINDOW_ORIENTATION,
  SET_IS_MOBILE,
  SET_ONLINE,
  SET_SCROLL,
  SET_DISABLED,
} from './types';

export const setWindowResize = (width, height) => (dispatch) => {
  dispatch({ type: SET_WINDOW_RESIZE, payload: [width, height] });
};

export const setWindowResizeFinished = (width, height) => (dispatch) => {
  dispatch({ type: SET_WINDOW_RESIZE_FINISHED, payload: [width, height] });
};

export const setIsMobile = width => (dispatch) => {
  dispatch({ type: SET_IS_MOBILE, payload: width < 960 });
};

export const setWindowOrientation = orientation => dispatch => (
  dispatch({ type: SET_WINDOW_ORIENTATION, payload: orientation })
);

export const setOnline = online => dispatch => (
  dispatch({ type: SET_ONLINE, payload: online })
);

export const setScroll = payload => dispatch => (
  dispatch({ type: SET_SCROLL, payload })
);

export const setDisabled = payload => dispatch => (
  dispatch({ type: SET_DISABLED, payload })
);
