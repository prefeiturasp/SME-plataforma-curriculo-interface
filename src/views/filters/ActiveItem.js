import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FiltersActions from '../../actions/FiltersActions';
import iconCloseSmall from '../../images/iconCloseSmall.svg';
import iconCloseSmallWhite from '../../images/iconCloseSmallWhite.svg';
import styles from './ActiveItem.css';

class ActiveItem extends Component {
  onClicked() {
    this.props.toggleFilter(this.props.data);
  }

  render() {
    const classes = this.props.data.color ? [styles.wrapper, styles.isColored] : [styles.wrapper];
    const style = this.props.data.color ? { backgroundColor: this.props.data.color } : {};
    const icon = this.props.data.color ? iconCloseSmallWhite : iconCloseSmall;

    return (
      <button className={classes.join(' ')} style={style} onClick={this.onClicked.bind(this)}>
        {this.props.data.label}
        <img src={icon} alt="Remover" />
      </button>
    );
  }
}

ActiveItem.propTypes = {
  data: PropTypes.object.isRequired,
  toggleFilter: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => {
  return {
    toggleFilter: data => {
      dispatch(FiltersActions.toggleFilter(data));
    },
  };
};

export default connect(null, mapDispatchToProps)(ActiveItem);
