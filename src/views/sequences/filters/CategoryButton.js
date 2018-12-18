import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FiltersActions from 'actions/FiltersActions';
import chevronRight from 'images/chevrons/right.svg';
import styles from './CategoryButton.scss';

class CategoryButton extends Component {
  onClicked = () => {
    this.props.showCategory(this.props.data);
  };

  render() {
    return (
      <li>
        <button className={styles.wrapper} onClick={this.onClicked}>
          {this.props.data.name}
          <img src={chevronRight} alt={this.props.data.name} />
        </button>
      </li>
    );
  }
}

CategoryButton.propTypes = {
  data: PropTypes.object.isRequired,
  showCategory: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => {
  return {
    showCategory: data => {
      dispatch(FiltersActions.showCategory(data));
    },
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CategoryButton);
