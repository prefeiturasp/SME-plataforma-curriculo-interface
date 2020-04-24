import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './AxisItem.scss';

class AxisItem extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        {this.props.data.name || this.props.data.description}
      </div>
    );
  }
}

AxisItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AxisItem;
