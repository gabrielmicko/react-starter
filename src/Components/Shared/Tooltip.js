/*
This is not currently used, may need additional dependency

import React from 'react';
import PropTypes from 'prop-types';

class Tooltip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      left: 0,
      className: '',
    };

    this.tooltipElement = null;
    this.openBox = this.openBox.bind(this);
    this.closeBox = this.closeBox.bind(this);
    this.onTouch = this.onTouch.bind(this);
    this.setTootipElement = this.setTootipElement.bind(this);
  }

  openBox() {
    this.setState({
      open: true,
    });
  }

  closeBox() {
    this.setState({
      open: false,
    });
  }

  generateTooltipBox() {
    if (this.state.open) {
      return (
        <div
          ref={this.setTootipElement}
          className={'tooltip-content ' + this.state.className}
          style={{ left: '-' + this.state.left + 'px' }}
        >
          {this.props.children}
        </div>
      );
    }
    return null;
  }

  setTootipElement(tooltipElement) {
    if (tooltipElement !== null) {
      this.tooltipElement = tooltipElement;
      const position = this.calculateAlignClass();
      this.setState({
        left: position.left,
        className: position.className,
      });
    }
  }

  calculateAlignClass() {
    let defaultLeft = Math.floor(this.tooltipElement.offsetWidth / 2);
    try {
      let winWidth = window.innerWidth;
      let boundingRect = this.tooltipElement.getBoundingClientRect();

      if (boundingRect.right - defaultLeft > winWidth) {
        return {
          className: 'right',
          left: boundingRect.width - 26,
        };
      }

      if (boundingRect.left - defaultLeft < 0) {
        return {
          className: 'left',
          left: 10,
        };
      }
    } catch (e) {}
    return {
      className: '',
      left: defaultLeft - 7,
    };
  }

  onTouch() {
    this.setState({
      open: !this.state.open,
    });
  }
  render() {
    return (
      <div ref="shit" className="shared tooltip">
        <i
          className="fa fa-question-circle-o"
          onMouseEnter={this.openBox}
          onTouchStart={this.onTouch}
          onMouseLeave={this.closeBox}
        />
        {this.generateTooltipBox()}
      </div>
    );
  }
}

Tooltip.propTypes = {};

export default Tooltip;
*/
