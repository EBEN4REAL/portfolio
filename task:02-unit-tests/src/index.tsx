
import React from "react";
import ReactDOM from "react-dom/client";
import Routes from "./Routes";
import reportWebVitals from "./reportWebVitals";
import {  HashRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes />
    </HashRouter>
  </React.StrictMode>
);

reportWebVitals();