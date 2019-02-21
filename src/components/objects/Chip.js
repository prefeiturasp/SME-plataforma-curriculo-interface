import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Chip.scss';

class Chip extends Component {
  render() {
    const { data, isOutlined, isSmall } = this.props;

    const classes = [styles.wrapper];
    const style = {};

    if (isSmall) {
      classes.push(styles.isSmall);
    }

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

Chip.propTypes = {
  data: PropTypes.object,
  isOutlined: PropTypes.bool,
  isSmall: PropTypes.bool,
};

export default Chip;
