/*
This is not currently used, may need additional dependency

import React from 'react';
import PropTypes from 'prop-types';
import Config from '../../Config/config.json';
import { Link } from 'react-router-dom';

class Paginator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      maxVisibility: props.maxVisibility,
      firstPageNumber: 1,
      lastPageNumber: this.calcLastPageNumber(
        props.totalItems,
        props.itemPerPage
      ),
      currentPageNumber: props.currentPageNumber,
      totalItems: props.totalItems,
    };
  }

  componentWillReceiveProps(props) {
    this.setState({
      maxVisibility: this.props.maxVisibility,
      firstPageNumber: 1,
      lastPageNumber: this.calcLastPageNumber(
        props.totalItems,
        props.itemPerPage
      ),
      currentPageNumber: props.currentPageNumber,
      totalItems: props.totalItems,
    });
  }

  calcLastPageNumber(totalItems, itemPerPage) {
    return Math.ceil(totalItems / itemPerPage);
  }

  getPreviousButton() {
    if (this.props.currentPageNumber > 1) {
      let newPageNumber = this.props.currentPageNumber - 1;
      return (
        <div className="previous">
          {this.getLink(newPageNumber, 'Back')}
        </div>
      );
    }
    return false;
  }

  getNextButton() {
    if (this.state.currentPageNumber < this.state.lastPageNumber) {
      let newPageNumber = this.props.currentPageNumber + 1;
      return (
        <div className="next">
          {this.getLink(newPageNumber, 'Next')}
        </div>
      );
    }
    return false;
  }

  getLink(newPageNumber, text) {
    if (this.props.virtualRoute) {
      return (
        <a onClick={this.props.onPageChange.bind(this, newPageNumber)}>
          {text}
        </a>
      );
    } else {
      return (
        <Link to={this.getURL(newPageNumber)}>
          {text}
        </Link>
      );
    }
  }

  getPageButtons() {
    const diffNumber = Math.floor(this.state.maxVisibility / 2);
    const firstVisiblePageButtonNumber =
      this.state.currentPageNumber - diffNumber;
    const lastVisiblePageButtonNumber =
      this.state.currentPageNumber + diffNumber;
    let buttons = [];
    for (
      let i = firstVisiblePageButtonNumber;
      i <= lastVisiblePageButtonNumber;
      i++
    ) {
      if (i >= this.state.firstPageNumber && i <= this.state.lastPageNumber) {
        buttons.push(i);
      }
    }

    if (buttons.length) {
      return buttons.map((i, key) => {
        const activeClass = this.state.currentPageNumber === i ? 'active' : '';
        return (
          <div key={key} className={'number ' + activeClass}>
            {this.getLink(i, i)}
          </div>
        );
      });
    }
    return false;
  }

  getURL(pageNumber) {
    let urlParams = this.props.urlParams;
    urlParams.pageNumber = pageNumber;
    let url = this.props.url;
    Object.keys(urlParams).map(paramName => {
      let paramValue = urlParams[paramName];
      url = url.replace(':' + paramName, paramValue);
    });

    return url;
  }

  render() {
    return (
      <div className="shared paginator">
        {this.getPreviousButton()}
        {this.getPageButtons()}
        {this.getNextButton()}
      </div>
    );
  }
}

Paginator.defaultProps = {
  maxVisibility: 3,
  urlParams: {},
  itemPerPage: Config.itemPerPage,
  url: 'page/:pageNumber',
  virtualRoute: false,
};

Paginator.propTypes = {
  //Is the routing virtual
  virtualRoute: PropTypes.bool,
  //If routing is virtual this function should be passed
  onPageChange: PropTypes.func,
  url: PropTypes.string,
  urlParams: PropTypes.object,
  //Total amount of items
  totalItems: PropTypes.number.isRequired,
  //Item shown per page
  itemPerPage: PropTypes.number,
  //Maximum visible items between Previous and Next button
  maxVisibility: PropTypes.number,
  //The current page
  currentPageNumber: PropTypes.number.isRequired,
};

export default Paginator;


 */
