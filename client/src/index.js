import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import { UserProvider } from "./ProfileContext";

ReactDOM.render(
  <Auth0Provider
    domain="dev-ms1zzy9h.us.auth0.com"
    clientId="6RTW9LXgiq1neOgM0ZuI8BZ48woDFr60"
    redirectUri={window.location.origin}
  >
    <UserProvider>
      <App />
    </UserProvider>
  </Auth0Provider>,
  document.getElementById("root")
);
