import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './RoadmapItem.css';

class RoadmapItem extends Component {
  render() {
    return (
      <li className={styles.wrapper}>
        <h2>{this.props.data.title}</h2>
        <p>{this.props.data.text}</p>
      </li>
    );
  }
}

RoadmapItem.propTypes = {
  data: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default RoadmapItem;
