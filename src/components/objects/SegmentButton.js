import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './SegmentButton.scss';

class SegmentButton extends Component {
  onClicked = async () => {
    await this.props.toggleSegments(this.props.data);
    await this.props.getStages(this.props.data);
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

SegmentButton.propTypes = {
  data: PropTypes.object.isRequired,
  toggleSegments: PropTypes.func.isRequired,
  getStages: PropTypes.func.isRequired,
};

export default SegmentButton;
