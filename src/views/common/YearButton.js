import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './YearButton.css';

class YearButton extends Component {
  onClicked = () => {
    this.props.toggleFilter(this.props.data);
  }

  render() {
    const classes = this.props.data.isActive ? [styles.wrapper, styles.isActive] : [styles.wrapper];
    
    return (
      <li>
        <button className={[classes.join(' ')]} onClick={this.onClicked}>
          {this.props.data.description}
        </button>
      </li>
    );
  }
}

YearButton.propTypes = {
  toggleFilter: PropTypes.func.isRequired,
};

export default YearButton;
