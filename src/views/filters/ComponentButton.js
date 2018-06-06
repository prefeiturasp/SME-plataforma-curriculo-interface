import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FiltersActions from '../../actions/FiltersActions';
import styles from './ComponentButton.css';

class ComponentButton extends Component {
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

ComponentButton.propTypes = {
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

export default connect(null, mapDispatchToProps)(ComponentButton);
