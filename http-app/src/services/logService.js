import Raven from "raven-js";

function init() {
  Raven.config(
    "https://353f0cec55b344caa50af9afc6dec9bc@o829996.ingest.sentry.io/5812156",
    {
      release: "1-0-0",
      environment: "development-test",
    }
  ).install();
}

function log(error) {
  Raven.captureException(error);
}

export default {
  init,
  log,
};
