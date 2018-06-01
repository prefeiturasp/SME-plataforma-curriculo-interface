import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './DevelopmentGoalItem.css';

class DevelopmentGoalItem extends Component {
  render() {
    return (
      <img
        src={this.props.data.image}
        alt={this.props.data.name}
        className={styles.wrapper} />
    );
  }
}

DevelopmentGoalItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default DevelopmentGoalItem;
