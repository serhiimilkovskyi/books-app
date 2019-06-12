import React from 'react';
import { Provider } from 'react-redux';
import { shape } from 'prop-types';
import Window from './Window';
import Router from './Router';

const App = ({ store }) => (
  <Provider store={store}>
    <Window>
      <Router />
    </Window>
  </Provider>
);

App.propTypes = {
  store: shape().isRequired,
};

export default App;
