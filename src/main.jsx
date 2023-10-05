import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import App from "./App";
import { store } from "./services/store";
import { Auth0Provider } from "@auth0/auth0-react";

//snapsum credentials not working
// const clientid='2CxY57FdlZaf7DE1f84GPxhI74s2RiFZ';
// const domain='dev-j5aihneume4tc7yz.us.auth0.com';

//design up credentials
const domain = 'dev-j5aihneume4tc7yz.us.auth0.com';
const clientid = 'ne4F713FRDqPNEs2yiazStTrBV5I8iYW';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <Auth0Provider
    domain={domain}
    clientId={clientid}
    authorizationParams={{
      redirect_uri: window.location.origin
    }}>
    <Provider store={store}>
      <App />
    </Provider>
    </Auth0Provider>
  </React.StrictMode>
);
