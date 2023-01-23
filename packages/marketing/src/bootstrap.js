import React from "react";
import { render } from "react-dom";
import { createMemoryHistory, createBrowserHistory } from "history";
import App from "./App";

const mount = (el, { onNavigate, defaultHistory }) => {
  const history = defaultHistory ? defaultHistory : createMemoryHistory();
  // when ever navigation occurs, history.listen callback will be called
  onNavigate && history.listen(onNavigate);
  render(<App history={history} />, el);
  return {
    onParentNavigate({ pathname: nextPathname }) {
      const { pathname } = history.location;
      if (pathname !== nextPathname) {
        history.push(nextPathname);
      }
    },
  };
};

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing-dev-root");
  devRoot && mount(devRoot, { defaultHistory: createBrowserHistory() });
}

export { mount };
