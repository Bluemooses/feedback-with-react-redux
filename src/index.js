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
  console.log(feedBackName);
  let feedback = action.payload
  switch (action.type) {
    case "NEXT_BUTTON":
      return [...state, action.payload];
    case "CLEAR_FEEDBACK":
      return (state = []);
    default:
      return state;
  }
};
//
const feedBackName = (state = [], action) => {
  console.log(state);
  let question = action.type;
  switch (action.type) {
    case "ADD_FEELING":
        // let feedback = action.payload;         
      return action.payload
    case "ADD_UNDERSTANDING":
        return state, action.payload
    case "ADD_SUPPORTED":
        return state, action.payload
    default:
      return state;
  }
};

const userComment = (state = [], action) => {
  console.log(state);
  switch(action.type) {
    case "ADD_COMMENT":
      return [...state, action.payload]
    default:
      return state;
  }
}

const storeInstance = createStore(
  combineReducers({
    feedBack,
    feedBackName,
    userComment
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
