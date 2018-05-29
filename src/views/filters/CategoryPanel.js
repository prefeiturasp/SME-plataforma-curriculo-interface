import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';
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

    const categoryName = this.props.currCategory? this.props.currCategory.label : '';

    return (
      <div className={classes.join(' ')}>
        <h5>
          {categoryName}
          <button data-tip data-for="tooltip">
            <i className="fa fa-question-circle" title="Ajuda" />
          </button>
        </h5>
        <ul className={listStyle}>
          {items}
        </ul>
        <button className={styles.back} onClick={this.onClickedClose.bind(this)}>
          <i className="fa fa-chevron-left" />
          Voltar
        </button>
        <ReactTooltip
          place="bottom"
          type="dark"
          effect="solid"
          id="tooltip"
          className="tooltip">
          <strong>O que são as matrizes de saberes?</strong>
          <p>O desenvolvimento que procura satisfazer as necessidades da geração atual, sem comprometer a capacidades das gerações futuras de satisfazerem as suas próprias necessidades.</p>
        </ReactTooltip>
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
