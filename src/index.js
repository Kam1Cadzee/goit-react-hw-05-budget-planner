import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import reducer from './redux/budget/budgetReducer';
import App from './components/App';

const store = createStore(reducer, devToolsEnhancer());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
