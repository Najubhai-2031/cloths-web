import { call, put, takeLatest } from "redux-saga/effects";
import { api } from "../../utils/api";
import { endPoints } from "../../utils/endPoints";
import { LOGIN_USER, LOGOUT_USER, REQ_REGISTER } from "../actionTypes";
import {
  loginUserFailed,
  loginUserSuccess,
  logoutUserFailed,
  logoutUserSuccess,
} from "./actions";

function* loginUser({ payload }) {
  try {
    const response = yield call(api.post, endPoints.USER_LOGIN, payload.data);
  } catch (error) {
    console.log("error",error)
  }
}

function* register({ payload }) {
  try {
    const response = yield call(api.post, endPoints.SIGNUP, payload.data);
  } catch (error) {
    console.log("error=====", error);
  }
}

function* logoutUser() {
  try {
    const response = yield call(api.post, endPoints.USER_LOGOUT);
    localStorage.removeItem("promoID");
    localStorage.removeItem("addressID");
    localStorage.removeItem("my_address_id");
    yield put(logoutUserSuccess(response.data));
  } catch (error) {
    yield put(logoutUserFailed({ error: error.response }));
  }
}

function* AuthSaga() {
  yield takeLatest(LOGIN_USER, loginUser);
  yield takeLatest(REQ_REGISTER, register);
  yield takeLatest(LOGOUT_USER, logoutUser);
}

export default AuthSaga;
