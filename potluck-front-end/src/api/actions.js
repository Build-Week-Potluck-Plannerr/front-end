import axios from 'axios';
// import { axiosWithAuth } from '../utils/axiosWithAuth';

export const API_ACTION_START = "API_ACTION_START";
export const API_ACTION_FAIL = "API_ACTION_FAIL";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_REGISTER_SUCCESS = "USER_REGISTER_SUCCESS";

export const userLogin = (loginInfo) => (dispatch) => {
  dispatch({ type: API_ACTION_START })
  // AXIOS POST HERE
}

export const userRegister = (regInfo) => (dispatch) => {
  dispatch({ type: API_ACTION_START })
  // AXIOS POST HERE
}

export const getPotluck = () => (dispatch) => {
  dispatch({ type: API_ACTION_START })
  // axiosWithAuth().get here
  // .then() dispatch({type: POTLUCK_GET_SUCCESS, payload: res.data})
  // .catch() dispatch({type: API_ACTION_FAIL, payload: error})
}