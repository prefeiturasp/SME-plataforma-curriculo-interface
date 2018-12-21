import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './YearButton.scss';

class YearButton extends Component {
  onClicked = () => {
    this.props.toggleFilter(this.props.data);
  };

  render() {
    const classes = this.props.data.isActive
      ? [styles.wrapper, styles.isActive]
      : [styles.wrapper];

    return (
      <button className={[classes.join(' ')]} onClick={this.onClicked}>
        {this.props.data.description}
      </button>
    );
  }
}

YearButton.propTypes = {
  toggleFilter: PropTypes.func.isRequired,
};

export default YearButton;
