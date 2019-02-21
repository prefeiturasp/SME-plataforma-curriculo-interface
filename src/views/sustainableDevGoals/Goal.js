import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Goal.scss';

class Goal extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <strong>{this.props.index}</strong> {this.props.data.description}
      </div>
    );
  }
}

Goal.propTypes = {
  data: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default Goal;
