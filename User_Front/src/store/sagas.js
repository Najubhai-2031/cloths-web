import { all } from "redux-saga/effects";

import AuthSaga from "./auth/saga";
// import CartSaga from "./cart/saga";
// import AddressSaga from "./address/saga";
// import SocketSaga from "./socket/socketSaga";

export default function* rootSaga() {
  yield all([AuthSaga()]);
}
