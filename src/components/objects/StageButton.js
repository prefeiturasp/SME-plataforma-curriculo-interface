import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './StageButton.scss';

class StageButton extends Component {
  onClicked = () => {
    this.props.toggleFilterAndSearch(this.props.data);
  };

  render() {
    const { data } = this.props;
    const { id, isActive, name } = data;

    const classes = isActive
      ? [styles.wrapper, styles.isActive]
      : [styles.wrapper];
    const style = isActive
      ? {
          backgroundColor: "#7e39a4",
          borderColor: "#7e39a4",
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

StageButton.propTypes = {
  data: PropTypes.object.isRequired,
  toggleFilterAndSearch: PropTypes.func.isRequired,
};

export default StageButton;
