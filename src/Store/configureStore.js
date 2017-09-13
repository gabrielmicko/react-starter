import { createStore, applyMiddleware, compose } from 'redux';
import { persistState } from 'redux-devtools';
import thunk from 'redux-thunk';
import rootReducer from '../Reducers';
import DevTools from '../Containers/DevTools';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
/*import { persistStore, autoRehydrate } from 'redux-persist';*/

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const routerMiddlewareHigherOrderComponent = routerMiddleware(history);

const enhancer = compose(
  applyMiddleware(thunk),
  applyMiddleware(routerMiddlewareHigherOrderComponent),
  /*autoRehydrate(),*/
  DevTools.instrument(),
  persistState(window.location.href.match(/[?&]debug_session=([^&#]+)\b/))
);

function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer);
  /*persistStore(store, { blacklist: ['Router'] });*/

  if (module.hot) {
    module.hot.accept('../Reducers', () => {
      store.replaceReducer(require('../Reducers').default);
    });
  }
  return store;
}

export { configureStore, history };
