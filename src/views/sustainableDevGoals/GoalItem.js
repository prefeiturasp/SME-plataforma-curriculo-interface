import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './GoalItem.css';

class GoalItem extends Component {
  render() {
    return (
      <li className={styles.wrapper}>
        <strong>{this.props.data.number}</strong> {this.props.data.text}
      </li>
    );
  }
}

GoalItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default GoalItem;
