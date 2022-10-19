import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Theme from "./Theme";
import { BrowserRouter } from "react-router-dom";
import Language from "./contexts/Language";
import "./styles/index.scss";
import "./styles/animations.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Theme>
      <BrowserRouter>
        <Language>
          <App />
        </Language>
      </BrowserRouter>
    </Theme>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
