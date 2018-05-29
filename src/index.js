import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./containers/App";
import configureStore from "./store";
import { ConnectedRouter } from "react-router-redux";
import createHistory from "history/createBrowserHistory";

import registerServiceWorker from "./registerServiceWorker";
import "font-awesome/css/font-awesome.min.css";
require("dotenv").config();

const history = createHistory();
const store = configureStore(history);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
