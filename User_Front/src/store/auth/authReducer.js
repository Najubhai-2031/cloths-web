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

const initialState = {
  user: "",
  loading: false,
  token: "",
  error: {
    message: "",
    type: "",
  },
};

const messageType = { success: "success", error: "error" };

const UserReducer = (state = initialState, action) => {
  let returnObj = state;

  if (action.type === LOGIN_USER) {
    returnObj = { ...state, loading: true };
  }

  if (action.type === LOGIN_USER_SUCCESS) {
    returnObj = {
      ...state,
      loading: false,
      user: action.payload,
      token: action.payload.access_token,
      error: { message: "" },
    };
  }

  if (action.type === LOGIN_USER_FAILED) {
    returnObj = {
      ...state,
      loading: false,
      error: { message: action?.payload?.error?.data },
    };
  }

  if (action.type === LOGOUT_USER) {
    returnObj = { ...state, loading: true };
  }

  if (action.type === LOGOUT_USER_SUCCESS) {
    returnObj = {
      ...state,
      loading: false,
      user: action.payload,
      token: "",
      error: { message: "" },
    };
  }

  if (action.type === LOGOUT_USER_FAILED) {
    returnObj = {
      ...state,
      loading: false,
      error: { message: action?.payload?.error?.data },
    };
  }

  // SIGN-UP
  if (action.type === REQ_REGISTER) {
    returnObj = { ...state, loading: true };
  }

  if (action.type === REGISTER_SUCCESS) {
    returnObj = {
      ...state,
      user: action.payload.data,
      loading: false,
      error: {
        message: action.payload.message,
        type: messageType.success,
      },
    };
  }

  if (action.type === REGISTER_FAILED) {
    returnObj = {
      ...state,
      user: "",
      loading: false,
      error: {
        message: action.payload.message,
        type: messageType.error,
      },
    };
  }

  return returnObj;
};

export default UserReducer;
