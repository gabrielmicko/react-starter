import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DocumentTitle from 'react-document-title';

import Config from '../Config/config.json';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.boot();
  }
  render() {
    return (
      <DocumentTitle title={Config.title}>{this.props.children}</DocumentTitle>
    );
  }
}

App.propTypes = {
  boot: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch, state) => ({
  boot: () => {
  },
});

export default connect(state => {
  return {};
}, mapDispatchToProps)(App);
