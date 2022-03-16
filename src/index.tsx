import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";

// Component
import App from "./main";

// Context
import { store } from "./store/store";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
