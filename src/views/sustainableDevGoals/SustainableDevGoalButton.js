import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from './SustainableDevGoalButton.css';

class SustainableDevGoalButton extends Component {
  render() {
    const link = `/ods/${this.props.data.id}`;

    return (
      <NavLink className={styles.wrapper} to={link}>
        <div className={styles.number}>
          {this.props.data.index}
        </div>
        <div className={styles.label}>
          {this.props.data.name}
        </div>
        <img
          src={this.props.data.icon}
          alt={this.props.data.name}
          className={styles.icon} />
      </NavLink>
    );
  }
}

SustainableDevGoalButton.propTypes = {
  data: PropTypes.object.isRequired,
};

export default SustainableDevGoalButton;
