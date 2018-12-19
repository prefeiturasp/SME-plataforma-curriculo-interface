import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './PillItem.scss';

class PillItem extends Component {
  render() {
    const { data, isOutlined } = this.props;

    const classes = [styles.wrapper];
    const style = {};

    if (isOutlined) {
      classes.push(styles.isOutlined);
    } else if (data.color) {
      classes.push(styles.isColored);
      style.backgroundColor = data.color;
    }

    return (
      <div className={classes.join(' ')} style={style}>
        {data.name || data.description}
      </div>
    );
  }
}

PillItem.propTypes = {
  data: PropTypes.object,
  isOutlined: PropTypes.bool,
};

export default PillItem;
