import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Hello from './containers/Hello';
import { Provider } from 'react-redux';
import { store } from './store';
import registerServiceWorker from './registerServiceWorker';
import './styles/index.css';

ReactDOM.render(
  <Provider store={store}>
  <Hello name="Saad" />
</Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
