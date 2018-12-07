import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './GenericItem.scss';

class GenericItem extends Component {
  render() {
    const classes = this.props.data.color ? [styles.wrapper, styles.isColored] : [styles.wrapper];
    const style = this.props.data.color ? { backgroundColor: this.props.data.color } : {};

    return (
      <button className={classes.join(' ')} style={style}>
        {this.props.data.name || this.props.data.description}
      </button>
    );
  }
}

GenericItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default GenericItem;
