import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import FiltersActions from '../../actions/FiltersActions.js'
import CategoryItemButton from './CategoryItemButton';
import CategoryItemImageButton from './CategoryItemImageButton';
import styles from './CategoryPanel.css';

class CategoryPanel extends Component {
  onClickedClose() {
    this.props.closeCategory();
  }

  render() {
    const classes = this.props.isShowingCategory ? [styles.wrapper, styles.isShowing] : [styles.wrapper];

    const hasImage = this.props.items.findIndex(item => item.image) >= 0;
    const listStyle = hasImage ? styles.images : null;
    
    const items = this.props.items.map((item, i) => {
      return hasImage ? (
        <CategoryItemImageButton key={i} data={item} />
      ) : (
        <CategoryItemButton key={i} data={item} />
      );
    });

    return (
      <div className={classes.join(' ')}>
        <ul className={listStyle}>
          {items}
        </ul>
        <button className={styles.back} onClick={this.onClickedClose.bind(this)}>
          <i className="fa fa-chevron-left"></i>
          Voltar
        </button>
      </div>
    );
  }
}

CategoryPanel.propTypes = {
  currCategory: PropTypes.object,
  isShowingCategory: PropTypes.bool,
  items: PropTypes.array.isRequired,
  closeCategory: PropTypes.func.isRequired,
  search: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  const currCategory = state.FiltersReducer.currCategory;
  return {
    currCategory,
    isShowingCategory: state.FiltersReducer.isShowingCategory,
    items: currCategory ? state.FiltersReducer.filters.filter(item => item.type === currCategory.type) : [],
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeCategory: () => {
      dispatch(FiltersActions.closeCategory());
    },
    search: () => {
      dispatch(FiltersActions.backToCategoryList());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPanel);
