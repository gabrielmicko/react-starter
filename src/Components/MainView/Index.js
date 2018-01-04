import React from 'react';
import { connect } from 'react-redux';
class Index extends React.Component {
  render() {
    return <div className="page index">World</div>;
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
