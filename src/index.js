import React from 'react';
import ReactDOM from 'react-dom';
import './assets/scss/index.scss';
import App from './components/App';
import configureStore from './store/configureStore';

const store = configureStore();

ReactDOM.render(<App store={store} />, document.getElementById('root'));
