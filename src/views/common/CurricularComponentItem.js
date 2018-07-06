import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './CurricularComponentItem.css';

class CurricularComponentItem extends Component {
  render() {
    const classes = this.props.isColored ? [styles.wrapper, styles.isColored] : [styles.wrapper];
    const style = this.props.isColored ? {
      backgroundColor: this.props.data.color,
      borderColor: this.props.data.color,
    } : {};
    
    return (
      <li className={classes.join(' ')} style={style}>
        {this.props.data.name}
      </li>
    );
  }
}

CurricularComponentItem.defaultProps = {
  isColored: true,
};

CurricularComponentItem.propTypes = {
  data: PropTypes.object.isRequired,
  isColored: PropTypes.bool,
};

export default CurricularComponentItem;
