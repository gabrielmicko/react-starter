/*
This is not currently used, may need additional dependency

import React, { Component } from 'react';
import PropTypes from 'prop-types';
const defaultErrorClass = 'error';

class ErrorMessage extends Component {
  constructor(props) {
    super(props);
  }

  isError() {
    if (this.props.message && this.props.message[this.props.name]) {
      return true;
    }
    return false;
  }

  render() {
    let element = null;
    if (this.isError()) {
      switch (this.props.type) {
        case 'simple':
          element = (
            <p className={this.props.class}>
              {this.props.message[this.props.name]}
            </p>
          );
          break;
        case 'classOnly':
        default:
          element = this.props.class;
          break;
      }
    }
    return element;
  }
}

ErrorMessage.defaultProps = {
  class: defaultErrorClass,
};

ErrorMessage.propTypes = {
  type: PropTypes.oneOf(['simple', 'classOnly']), // Type of component
  class: PropTypes.string, // className of the component
  message: PropTypes.object.isRequired, // Message inside the component
  name: PropTypes.string.isRequired, // Input name property
};

const ErrorWrapper = props => {
  if (props.type === 'classOnly') {
    const isError = props => {
      if (props.message && props.message[props.name]) {
        return true;
      }
      return false;
    };
    if (isError(props)) {
      return props.class || defaultErrorClass;
    }
  }

  return <ErrorMessage {...props} />;
};

export default ErrorWrapper;

Usage:

<input
                    name="password2"
                    type="password"
                    value={this.state.password2}
                    onChange={this.handleInputChange}
                    className={ErrorWrapper({
                      name: 'password2',
                      message: this.state.error,
                      type: 'classOnly',
                    })}
                  />
                  <ErrorWrapper
                    name="password2"
                    message={this.state.error}
                    type="simple"
                  />
 */
