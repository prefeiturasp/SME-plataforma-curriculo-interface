import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ComponentItem.css';

class ComponentItem extends Component {
  render() {
    const classes = this.props.isColored ? [styles.wrapper, styles.isColored] : [styles.wrapper];
    const style = this.props.isColored ? { backgroundColor: this.props.data.color } : {};

    return (
      <li className={classes.join(' ')} style={style}>
        {this.props.data.name}
      </li>
    );
  }
}

ComponentItem.defaultProps = {
  isColored: true,
};

ComponentItem.propTypes = {
  data: PropTypes.object.isRequired,
  isColored: PropTypes.bool,
};

export default ComponentItem;
