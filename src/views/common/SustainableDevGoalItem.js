import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { API_URL } from '../../constants';
import styles from './SustainableDevGoalItem.css';

class SustainableDevGoalItem extends Component {
  render() {
    return (
      <img
        src={API_URL + this.props.data.icon_url}
        alt={this.props.data.title}
        className={styles.wrapper} />
    );
  }
}

SustainableDevGoalItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default SustainableDevGoalItem;
