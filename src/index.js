import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "./redux/store/store";
import { PersistGate } from "redux-persist/integration/react";

const { persistor, store } = Store;

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-1nqkyjy8.us.auth0.com"
      clientId="mmk7UOexLEFB6EhjcxsQOq4UPVK9vZha"
      redirectUri={window.location.origin}
    >
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
