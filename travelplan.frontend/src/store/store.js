// ./store.js

import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import reducers from '../reducers';

const middelware = applyMiddleware(promise(), thunk, createLogger());
const store = createStore(reducers, middelware);


export default store;
