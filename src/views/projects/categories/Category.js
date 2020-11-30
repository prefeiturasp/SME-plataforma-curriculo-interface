import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ProjectFiltersActions from 'actions/ProjectFiltersActions';
import chevronRight from 'images/chevrons/right.svg';
import styles from './Category.scss';

class Category extends Component {
  onClicked = () => {
    this.props.showCategory(this.props.data);
  };

  render() {
    return (
      <button className={styles.wrapper} onClick={this.onClicked}>
        {this.props.data.name}
        <img src={chevronRight} alt={this.props.data.name} />
      </button>
    );
  }
}

Category.propTypes = {
  data: PropTypes.object.isRequired,
  showCategory: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => {
  return {
    showCategory: data => {
      dispatch(ProjectFiltersActions.showCategory(data));
    },
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Category);
