import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './GoalItem.css';

class GoalItem extends Component {
  render() {
    return (
      <li className={styles.wrapper}>
        <strong>{this.props.index}</strong> {this.props.data.description}
      </li>
    );
  }
}

GoalItem.propTypes = {
  data: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default GoalItem;
