// import Cookies from "js-cookie";
import { call, put, takeLatest } from "redux-saga/effects";

import { api } from "../../utils/api";
import { endPoints } from "../../utils/endPoints";
import { LOGIN_USER, LOGOUT_USER, REQ_REGISTER } from "../actionTypes";
import {
  loginUserFailed,
  loginUserSuccess,
  logoutUserFailed,
  logoutUserSuccess,
  registerFailed,
  registerSuccess,
} from "./actions";
// import { clearCartSuccess } from "store/cart/actions";

const TOKEN = "token";

function* loginUser({ payload }) {
  try {
    const response = yield call(api.post, endPoints.USER_LOGIN, payload.data);
    // Cookies.set(TOKEN, response.data.access_token, { path: "/" });
    yield put(loginUserSuccess(response.data));
  } catch (error) {
    yield put(
      loginUserFailed({ error: error.response, callback: payload.callback })
    );
  }
}

function* register({ payload }) {
  try {
    const response = yield call(api.post, endPoints.SIGNUP, payload.data);

    yield put(
      registerSuccess({ response: response.data, callback: payload.callback })
    );
  } catch (error) {
    yield put(
      registerFailed({ error: error.response, callback: payload.callback })
    );
  }
}

function* logoutUser() {
  try {
    const response = yield call(api.post, endPoints.USER_LOGOUT);
    // Cookies.remove(TOKEN, { path: "/" });
    localStorage.removeItem("promoID");
    localStorage.removeItem("addressID");
    localStorage.removeItem("my_address_id");
    yield put(logoutUserSuccess(response.data));
    // yield put(clearCartSuccess())
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
