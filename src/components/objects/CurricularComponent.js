import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './CurricularComponent.scss';

class CurricularComponent extends Component {
  onClicked = () => {
    this.props.toggleFilter(this.props.data);
  };

  render() {
    const { data } = this.props;
    const { color, isActive, name } = data;

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

CurricularComponent.propTypes = {
  data: PropTypes.object.isRequired,
  toggleFilter: PropTypes.func.isRequired,
};

export default CurricularComponent;
