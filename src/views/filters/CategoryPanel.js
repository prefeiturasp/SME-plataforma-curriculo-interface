import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';
import { connect } from 'react-redux';
import FiltersActions from '../../actions/FiltersActions';
import CategoryItemButton from './CategoryItemButton';
import CategoryItemImageButton from './CategoryItemImageButton';
import iconArrowLeft from '../../images/iconArrowLeft.svg';
import iconChevronLeft from '../../images/iconChevronLeft.svg';
import iconHelp from '../../images/iconHelp.svg';
import styles from './CategoryPanel.css';

class CategoryPanel extends Component {
  onClickedClose() {
    this.props.hideCategory();
  }

  render() {
    const classes = this.props.isShowingCategory ? [styles.wrapper, styles.isShowing] : [styles.wrapper];

    const hasImage = this.props.items.findIndex(item => item.url) >= 0;
    const listStyle = hasImage ? styles.images : null;
    
    const items = this.props.items.map((item, i) => {
      return hasImage ? (
        <CategoryItemImageButton key={i} data={item} />
      ) : (
        <CategoryItemButton key={i} data={item} />
      );
    });

    const categoryName = this.props.currCategory ? this.props.currCategory.name : '';

    return (
      <div className={classes.join(' ')}>
        <header className={styles.header}>
          <button className={styles.backArrow} onClick={this.onClickedClose.bind(this)}>
            <img src={iconArrowLeft} alt="Voltar" />
          </button>
          <h3>Filtros</h3>
        </header>
        <h5>
          {categoryName}
          <button data-tip data-for="tooltip">
            <img src={iconHelp} alt="Ajuda" />
          </button>
        </h5>
        <ul className={listStyle}>
          {items}
        </ul>
        <footer className={styles.footer}>
          <button className={styles.button} onClick={this.onClickedClose.bind(this)}>
            Selecionar
          </button>
        </footer>
        <button className={styles.back} onClick={this.onClickedClose.bind(this)}>
          <img src={iconChevronLeft} alt="Voltar" />
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
  hideCategory: PropTypes.func.isRequired,
  search: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  const currCategory = state.FiltersReducer.currCategory;
  return {
    currCategory,
    isShowingCategory: state.FiltersReducer.isShowingCategory,
    items: currCategory ? state.FiltersReducer.filters.filter(item => item.type === currCategory.slug) : [],
  };
};

const mapDispatchToProps = dispatch => {
  return {
    hideCategory: () => {
      dispatch(FiltersActions.hideCategory());
    },
    search: () => {
      dispatch(FiltersActions.backToCategoryList());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPanel);
