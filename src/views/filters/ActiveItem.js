import React, { Component } from 'react';
import styles from'./ActiveItem.css';

class ActiveItem extends Component {
  render() {
    const classes = [styles.wrapper];
    const style = {};

    if (this.props.filter.color) {
      classes.push(styles.isColored);
      style.backgroundColor = this.props.filter.color;
    }

    return (
      <button className={classes.join(' ')} style={style}>
        {this.props.filter.label}
        <i className="fa fa-times" title="Remover"></i>
      </button>
    );
  }
}

export default ActiveItem;
