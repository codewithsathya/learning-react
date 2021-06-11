import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import Raven from "raven-js";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

Raven.config("https://353f0cec55b344caa50af9afc6dec9bc@o829996.ingest.sentry.io/5812156", {
  release: "1-0-0",
  environment: "development-test",
}).install();

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
