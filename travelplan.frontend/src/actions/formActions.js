import axios from 'axios';
import ActionConfigs from './actionConfig';

const serverURL = 'http://localhost:3000/';

export default function addForm() {
  return (dispatch) => {
    dispatch({
      type: 'ADD_FORM'
    });
  };
}

export function userLogin(isLogin) {
  return (dispatch) => {
    dispatch({
      type: ActionConfigs.isLogin,
      data: isLogin
    });
  };
}

export function detailInfo(detail) {
  return (dispatch) => {
    dispatch({
      type: ActionConfigs.detailInfo,
      data: detail
    });
  };
}

export function tripInfo(userId, tripId) {
  return (dispatch) => {
    axios.get(`${serverURL}getTripInfo/userId/${userId}/tripId/${tripId}`)
      .then(response => {
        dispatch({
          type: ActionConfigs.tripInfo,
          data: { tripInfo: response.data }
        });
      });
  };
}
