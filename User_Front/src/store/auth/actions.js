import {
  LOGIN_USER,
  LOGIN_USER_FAILED,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER,
  LOGOUT_USER_FAILED,
  LOGOUT_USER_SUCCESS,
  REGISTER_FAILED,
  REGISTER_SUCCESS,
  REQ_REGISTER,
} from "../actionTypes";

export const loginUser = (data) => {
  return {
    type: LOGIN_USER,
    payload: data,
  };
};

export const loginUserSuccess = (data) => {
  localStorage.setItem("isLoggedIn", true);
  return {
    type: LOGIN_USER_SUCCESS,
    payload: data,
  };
};

export const loginUserFailed = (data) => {
  data.callback(data?.error?.data);
  return {
    type: LOGIN_USER_FAILED,
    payload: data,
  };
};

export const logoutUser = () => {
  return {
    type: LOGOUT_USER,
  };
};

export const logoutUserSuccess = (data) => {
  localStorage.setItem("isLoggedIn", false);
  return {
    type: LOGOUT_USER_SUCCESS,
    payload: data,
  };
};

export const logoutUserFailed = (data) => {
  data.callback(data?.error?.data);
  return {
    type: LOGOUT_USER_FAILED,
    payload: data,
  };
};

// SIGNUP

export const register = (data) => {
  return {
    type: REQ_REGISTER,
    payload: data,
  };
};

export const registerSuccess = (data) => {
  data.callback({ error: false, message: data.response.message });
  return {
    type: REGISTER_SUCCESS,
    payload: data.response,
  };
};

export const registerFailed = (data) => {
  data.callback({ error: true, message: data.error.data.message });
  return {
    type: REGISTER_FAILED,
    payload: data.error.data,
  };
};
