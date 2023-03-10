import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Mount function to start up the app
const mount = (el) => {
  ReactDOM.render(<App />, el);
};

// If we are in development and in isolation,
// call mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_pets-root');

  if (devRoot) {
    mount(devRoot);
  }
}

const mountWithoutEl = () => {
  const root = document.querySelector("#_pets-root");
  ReactDOM.render(<App />, root);
};

// We are running through container
// and we should export the mount function
export { mount, mountWithoutEl };
