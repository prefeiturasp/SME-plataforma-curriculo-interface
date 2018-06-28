import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './LearningObjectiveItem.css';

class LearningObjectiveItem extends Component {
  render() {
    const code1 = this.props.data.code.substr(0, 4);
    const code2 = this.props.data.code.substr(4, 1);
    const code3 = this.props.data.code.substr(5);

    return (
      <li className={styles.wrapper}>
        {code1}
        <span style={{color: this.props.data.color}}>
          {code2}
        </span>
        {code3}
      </li>
    );
  }
}

LearningObjectiveItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default LearningObjectiveItem;
