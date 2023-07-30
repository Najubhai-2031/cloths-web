import axios from "axios";

export const API_URL = process.env.REACT_APP_API_URL;
export const IMAGE_URL = process.env.REACT_APP_IMAGE_URL;

let store;

export const injectStore = (_store) => {
  store = _store;
};

export const api = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    "Content-Type": "application/json",
  },
});

// api.interceptors.request.use((config) => {
//   const auth = store.getState()?.AuthReducer || null;

//   if (auth) {
//     config.headers["access_token"] = "Bearer " + auth.token;
//   }
//   if (config?.urlParams && typeof config?.url?.replace === "function") {
//     Object.entries(config.urlParams || {}).forEach(([key, value]) => {
//       config.url = config.url.replace(`:${key}`, value); // encodeURIComponent()
//     });
//   }
//   return config;
// });
