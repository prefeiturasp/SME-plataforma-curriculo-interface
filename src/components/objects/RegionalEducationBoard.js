import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './RegionalEducationBoard.scss';

class RegionalEducationBoard extends Component {
  onClicked = () => {
    this.props.toggleFilter(this.props.data);
  };

  render() {
    const { data } = this.props;
    const { isActive, tag } = data;

    const classes = isActive
      ? [styles.wrapper, styles.isActive]
      : [styles.wrapper];
    const style = isActive
      ? {
          backgroundColor: "#0a6d0f",
          borderColor: "#0a6d0f",
        }
      : {};

    return (
      <button
        className={classes.join(' ')}
        style={style}
        onClick={this.onClicked}
      >
        {tag}
      </button>
    );
  }
}

RegionalEducationBoard.propTypes = {
  data: PropTypes.object.isRequired,
  toggleFilter: PropTypes.func.isRequired,
};

export default RegionalEducationBoard;
