import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FiltersActions from '../../actions/FiltersActions';
import styles from './CategoryItemButton.css';

class CategoryItemButton extends Component {
  onClicked() {
    this.props.toggleFilter(this.props.data);
  }

  render() {
    const classes = this.props.data.isActive ? [styles.wrapper, styles.isActive] : [styles.wrapper];
    
    return (
      <li>
        <button className={classes.join(' ')} onClick={this.onClicked.bind(this)}>
          <div className={styles.check}>
            <div className={styles.checkMark}></div>
          </div>
          {this.props.data.name || this.props.data.title}
        </button>
      </li>
    );
  }
}

CategoryItemButton.propTypes = {
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

export default connect(null, mapDispatchToProps)(CategoryItemButton);
