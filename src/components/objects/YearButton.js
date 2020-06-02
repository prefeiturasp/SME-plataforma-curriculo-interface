import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './YearButton.scss';

class YearButton extends Component {
  onClicked = () => {
    this.props.toggleFilterAndSearch(this.props.data);
  };

  render() {
    const { data } = this.props;
    const { id, isActive, name, color } = data;

    const classes = isActive
      ? [styles.wrapper, styles.isActive]
      : [styles.wrapper];
    const style = isActive
      ? {
          backgroundColor: color,
          borderColor: color,
        }
      : {};

    return (
      <button
        className={classes.join(' ')}
        style={style}
        onClick={this.onClicked}
      >
        {name}
      </button>
    );
  }
}

YearButton.propTypes = {
  data: PropTypes.object.isRequired,
  toggleFilterAndSearch: PropTypes.func.isRequired,
};

export default YearButton;
