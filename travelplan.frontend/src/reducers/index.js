import { combineReducers } from 'redux';
// import {
//   modelReducer
// } from 'react-redux-form';
import { reducer as formReducer } from 'redux-form';
import formsData from './formsDataReducer';
import userReducer from './userReducer';

export default combineReducers({
  formsData,
  userReducer,
  form: formReducer
});
