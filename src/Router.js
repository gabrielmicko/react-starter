import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import App from './Containers/App';
import MainView from './Containers/MainView';

export default class Router extends React.Component {
  render() {
    return (
      <App>
        <Switch>
          <Route exact path="/" component={MainView} />
          {/*<NoSessionRouter path="/account" component={AccountView} />*/}
          {/* <Route path="/404" component={AccountView} />
          <Redirect from="*" to="/404" />*/}
        </Switch>
      </App>
    );
  }
}
