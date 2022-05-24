import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './containers/App';

import 'tachyons';
import reportWebVitals from './reportWebVitals';

import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware,combineReducers } from 'redux';
import { createLogger } from 'redux-logger'
import { searchRobots, requestRobots } from './reducer';
import thunkMiddleware from 'redux-thunk';

const logger = createLogger();
const rootReducer = combineReducers({ searchRobots, requestRobots })
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
