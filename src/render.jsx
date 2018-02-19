import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import App from './components/app';

import initStore from './redux/store';

const render = () => {
  ReactDOM.render(
    <Provider store={initStore()}>
      <App />
    </Provider>,
    document.getElementById('root'),
  );
};

export default render;
