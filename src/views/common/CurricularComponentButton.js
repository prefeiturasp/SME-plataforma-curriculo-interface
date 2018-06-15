import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './CurricularComponentButton.css';

class CurricularComponentButton extends Component {
  onClicked() {
    this.props.toggleFilter(this.props.data);
  }

  render() {
    const classes = this.props.data.isActive ? [styles.wrapper, styles.isActive] : [styles.wrapper];
    const style = this.props.data.isActive ? { backgroundColor: this.props.data.color } : {};

    return (
      <li>
        <button className={classes.join(' ')} style={style} onClick={this.onClicked.bind(this)}>
          {this.props.data.label}
        </button>
      </li>
    );
  }
}

CurricularComponentButton.propTypes = {
  data: PropTypes.object.isRequired,
  toggleFilter: PropTypes.func.isRequired,
};

export default CurricularComponentButton;
