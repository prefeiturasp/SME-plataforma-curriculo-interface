import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { API_URL } from '../../constants';
import styles from './SustainableDevGoalButton.css';

class SustainableDevGoalButton extends Component {
  render() {
    const link = `/ods/${this.props.data.sequence}`;
    const style = { backgroundColor: '#c30' };//this.props.data.color };

    return (
      <li className="col-md-6 col-lg-4">
        <NavLink to={link} className={styles.wrapper} style={style}>
          <div className={styles.number}>
            {this.props.data.sequence}
          </div>
          <div className={styles.label}>
            {this.props.data.name}
          </div>
          <img
            src={API_URL + this.props.data.icon}
            alt={this.props.data.name}
            className={styles.icon} />
        </NavLink>
      </li>
    );
  }
}

SustainableDevGoalButton.propTypes = {
  data: PropTypes.object.isRequired,
};

export default SustainableDevGoalButton;
