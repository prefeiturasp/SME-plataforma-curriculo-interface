import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { API_URL } from 'data/constants';
import ProjectFiltersActions from 'actions/ProjectFiltersActions';
import styles from './ImageButton.scss';

class ImageButton extends Component {
  onClicked = () => {
    this.props.toggleFilter(this.props.data);
  };

  render() {
    const classes = this.props.data.isActive
      ? [styles.wrapper, styles.isActive]
      : [styles.wrapper];

    return (
      <button className={classes.join(' ')} onClick={this.onClicked}>
        <img src={API_URL + this.props.data.url} alt={this.props.data.name} />
      </button>
    );
  }
}

ImageButton.propTypes = {
  data: PropTypes.object.isRequired,
  toggleFilter: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => {
  return {
    toggleFilter: data => {
      dispatch(ProjectFiltersActions.toggleFilter(data));
    },
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ImageButton);
