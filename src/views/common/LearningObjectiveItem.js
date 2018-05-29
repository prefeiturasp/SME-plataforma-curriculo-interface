import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './LearningObjectiveItem.css';

class LearningObjectiveItem extends Component {
  render() {
    return (
      <li className={styles.wrapper}>
        {this.props.data.code1}
        <span style={{color:this.props.data.color}}>
          {this.props.data.code2}
        </span>
        {this.props.data.code3}
      </li>
    );
  }
}

LearningObjectiveItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default LearningObjectiveItem;
