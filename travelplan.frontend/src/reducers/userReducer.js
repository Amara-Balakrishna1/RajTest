/* global $ */
import ActionConfig from '../actions/actionConfig';

const initialState = {
  isLogin: false,
  userInfo: {},
  tripsInfo: {}
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case ActionConfig.isLogin:
      return { isLogin: action.data };
    case ActionConfig.detailInfo:
      return $.extend({}, true, state, action.data);
    case ActionConfig.tripInfo:
      return $.extend({}, true, state, action.data);
    default:
      return state;
  }
}
