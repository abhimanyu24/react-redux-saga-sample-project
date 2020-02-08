import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reducer from "./store/reducer";
import reducer2 from "./store/reducer2";

import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { watchAgeUp } from "./sagas/saga";
import { watchChangeUser } from "./sagas/saga2";

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({
  currentUser: reducer2,
  age: reducer
});
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchAgeUp);
sagaMiddleware.run(watchChangeUser);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
