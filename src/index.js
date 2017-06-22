import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { configureStore, history } from './Store/configureStore';
import Root from './Containers/Root';
/*import { persistStore } from 'redux-persist';*/
import CSS from './Less/Main.less';

const store = configureStore();
/*persistStore(store, { blacklist: ['Router'] });*/

render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  document.getElementById('react-app')
);

if (module.hot && process.env.NODE_ENV === 'development') {
  module.hot.accept('./Containers/Root', () => {
    const NewRoot = require('./Containers/Root').default;
    render(
      <AppContainer>
        <NewRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById('react-app')
    );
  });
}
