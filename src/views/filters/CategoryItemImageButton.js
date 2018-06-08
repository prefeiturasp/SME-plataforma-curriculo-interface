import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FiltersActions from '../../actions/FiltersActions';
import styles from './CategoryItemImageButton.css';

class CategoryItemImageButton extends Component {
  onClicked() {
    this.props.toggleFilter(this.props.data);
  }

  render() {
    const classes = this.props.data.isActive ? [styles.wrapper, styles.isActive] : [styles.wrapper];

    return (
      <li>
        <button className={classes.join(' ')} onClick={this.onClicked.bind(this)}>
          <img src={this.props.data.image} alt={this.props.data.label} />
        </button>
      </li>
    );
  }
}

CategoryItemImageButton.propTypes = {
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

export default connect(null, mapDispatchToProps)(CategoryItemImageButton);
