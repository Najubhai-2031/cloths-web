import { combineReducers } from "redux";

import AuthReducer from "./auth/authReducer";
// import CartReducer from "./cart/cartReducer";
// import AddressReducer from "./address/addressReducer";
// import SnackbarReducer from "./snackbar/snackbarReducer";
// import SocketReducer from "./socket/socketReducer";

const rootReducer = combineReducers({
  AuthReducer,
  //   CartReducer,
  //   AddressReducer,
  //   SnackbarReducer,
  //   SocketReducer,
});

export default rootReducer;
