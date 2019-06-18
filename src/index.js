//Libraries
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { reducer } from "./reducers/index";
import { composeWithDevTools } from "redux-devtools-extension";

// Components
import App from "./App";

// Styles
import "./index.css";

// Instantiate initial Redux store
// `createStore` receives the reducer responsible for updating
// the store we are creating and any initial state

const store = createStore(reducer, composeWithDevTools());

// store lives on the provider component. We wrap our
// App component inside Provider to give all our components
// access to the store

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
