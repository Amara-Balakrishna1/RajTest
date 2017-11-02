// ./store.js

import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import {
  combineForms
} from 'react-redux-form';
import promise from 'redux-promise-middleware';

const initialUserState = {
  firstName: '',
  lastName: '',
  age:''
};

const middelware = applyMiddleware(promise(), thunk, createLogger());
const store = createStore(combineForms({
  user: initialUserState
}), middelware);


export default store;
