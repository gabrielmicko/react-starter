/*
This is not currently used, may need additional dependency

import React from 'react';
import PropTypes from 'prop-types';

class Notification extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    let messages = null;
    if (this.props.message.length) {
      if (typeof this.props.message !== 'string') {
        messages = this.props.message.map((key, message) => {
          return (
            <p key={message}>
              {key}
            </p>
          );
        });
      } else {
        messages = (
          <p>
            {this.props.message}
          </p>
        );
      }
    }

    let removeIcon = null;
    if (this.props.isRemoveable) {
      removeIcon = (
        <i className="fa fa-remove remove" onClick={this.props.onRemove} />
      );
    }

    return (
      <div className={'shared notification ' + this.props.class}>
        {removeIcon}
        {messages}
      </div>
    );
  }
}

Notification.defaultProps = {
  class: 'success',
  isRemoveable: false,
};

Notification.propTypes = {
  message: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  class: PropTypes.string.isRequired,
  isRemoveable: PropTypes.bool,
  onRemove: PropTypes.func,
};

export default Notification;


 */