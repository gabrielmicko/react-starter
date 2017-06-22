/*
import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const NoSessionRouter = ({ component: Component, ...rest }) => {
  const isAuthenticated = !rest.User.isActive;
  return (
    <Route
      {...rest}
      render={props => {
        return isAuthenticated ? <Component {...props} /> : <Redirect to="/" />;
      }}
    />
  );
};

export default connect(state => ({
  User: state.User,
}))(NoSessionRouter);
*/
