import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";

//Reducer adds or detracts from reduxState based on actions or inaction.
const feedBack = (state = [], action) => {
  console.log(state);
  switch (action.type) {
    case "NEXT_BUTTON":
      return action.payload;
    case "CLEAR_FEEDBACK":
      return (state = []);
    default:
      return state;
  }
};

const feedBackName = (state = [], action) => {
  console.log(state);
  switch (action.type) {
    case "ADD_FEELING":
      return action.payload;
    default:
      return state;
  }
};
const storeInstance = createStore(
  combineReducers({
    feedBack,
    feedBackName,
  }),
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
