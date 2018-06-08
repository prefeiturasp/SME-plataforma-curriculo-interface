import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './SustainableDevGoalItem.css';

class SustainableDevGoalItem extends Component {
  render() {
    return (
      <img
        src={this.props.data.image}
        alt={this.props.data.name}
        className={styles.wrapper} />
    );
  }
}

SustainableDevGoalItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default SustainableDevGoalItem;
