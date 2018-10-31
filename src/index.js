import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import WebFont from "webfontloader";
import ReactGA from "react-ga";

import { Provider } from "react-redux";

import { combineReducers, createStore } from "redux";

import userReducer from "./reducers/userReducers";

const allReducers = combineReducers({
  user: userReducer
});

/* eslint-disable no-underscore-dangle */
const store = createStore(
  allReducers /* preloadedState, */,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */
console.log(store.getState());

ReactGA.initialize("UA-68850833-4");

WebFont.load({
  google: {
    families: ["Rubik", "sans-serif"]
  }
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
