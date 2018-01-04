/*
This is not currently used, may need additional dependency

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCountries } from '../../helpers/Dispatch';

class Countries extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    if (this.props.Countries.length === 0) {
      this.props.getCountries();
    }
  }
  render() {
    const { Countries, getCountries, ...rest } = this.props;
    return (
      <select {...rest}>
        {this.props.Countries.map(country => {
          return (
            <option key={country.id} value={country.id}>
              {country.name}
            </option>
          );
        })}
      </select>
    );
  }
}

Countries.propTypes = {
  Countries: PropTypes.array.isRequired,
  getCountries: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    Countries: state.Settings.countries
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCountries: () => {
      getCountries(dispatch);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Countries);

 */
