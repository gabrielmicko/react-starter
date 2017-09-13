import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  Router: routerReducer,
});

export default rootReducer;
