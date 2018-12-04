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

function isCategoryOneOf(category, list) {
  return category && list.indexOf(category.slug) >= 0;
}

class CategoryPanel extends Component {
  onClickedClose = () => {
    this.props.hideCategory();
  }

  render() {
    const classes = this.props.isShowingCategory ? [styles.wrapper, styles.isShowing] : [styles.wrapper];

    const hasImage = this.props.items.findIndex(item => item.url) >= 0;
    const listStyle = hasImage ? styles.images : null;
    
    const isAxesOrLearningObjectives = isCategoryOneOf(this.props.currCategory, ['axes', 'learning_objectives']);
    const list = isAxesOrLearningObjectives ? this.props.itemsExtra : this.props.items;
    
    const items = list.map((item, i) => {
      return hasImage ? (
        <CategoryItemImageButton key={i} data={item} />
      ) : (
        <CategoryItemButton key={i} data={item} />
      );
    });

    const categoryName = this.props.currCategory ? this.props.currCategory.name : '';

    const hasTooltip = isCategoryOneOf(this.props.currCategory, ['knowledge_matrices', 'learning_objectives', 'sustainable_development_goals']);
    let btnTooltip = null;
    let tooltip = null;
    
    if (hasTooltip) {
      let tooltipTitle = '';
      let tooltipText = '';

      switch (this.props.currCategory.slug) {
        case 'knowledge_matrices':
          tooltipTitle = 'O que são as matrizes de saberes?';
          tooltipText = 'O desenvolvimento que procura satisfazer as necessidades da geração atual, sem comprometer a capacidades das gerações futuras de satisfazerem as suas próprias necessidades.';
          break;

        case 'learning_objectives':
          tooltipTitle = 'O que são os objetivos de aprendizagem?';
          tooltipText = 'O desenvolvimento que procura satisfazer as necessidades da geração atual, sem comprometer a capacidades das gerações futuras de satisfazerem as suas próprias necessidades.';
          break;

        case 'sustainable_development_goals':
          tooltipTitle = 'O que são os ODS?';
          tooltipText = 'O desenvolvimento que procura satisfazer as necessidades da geração atual, sem comprometer a capacidades das gerações futuras de satisfazerem as suas próprias necessidades.';
          break;

        default:
          break;
      }

      btnTooltip = (
        <button data-tip data-for="tooltip">
          <img src={iconHelp} alt="Ajuda" />
        </button>
      );

      tooltip = (
        <ReactTooltip
          place="bottom"
          type="dark"
          effect="solid"
          id="tooltip"
          className="tooltip">
          <strong>{tooltipTitle}</strong>
          <p>{tooltipText}</p>
        </ReactTooltip>
      )
    }
    
    return (
      <div className={classes.join(' ')}>
        <header className={styles.header}>
          <button className={styles.backArrow} onClick={this.onClickedClose}>
            <img src={iconArrowLeft} alt="Voltar" />
          </button>
          <h3>Filtros</h3>
        </header>
        <h5>
          {categoryName}
          {btnTooltip}
        </h5>
        <ul className={listStyle}>
          {items}
        </ul>
        <footer className={styles.footer}>
          <button className={styles.button} onClick={this.onClickedClose}>
            Selecionar
          </button>
        </footer>
        <button className={styles.back} onClick={this.onClickedClose}>
          <img src={iconChevronLeft} alt="Voltar" />
          Voltar
        </button>
        {tooltip}
      </div>
    );
  }
}

CategoryPanel.propTypes = {
  currCategory: PropTypes.object,
  isShowingCategory: PropTypes.bool,
  items: PropTypes.array.isRequired,
  itemsExtra: PropTypes.array.isRequired,
  hideCategory: PropTypes.func.isRequired,
  search: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  const currCategory = state.FiltersReducer.currCategory;
  return {
    currCategory,
    isShowingCategory: state.FiltersReducer.isShowingCategory,
    items: currCategory ? state.FiltersReducer.filters.filter(item => item.type === currCategory.slug) : [],
    itemsExtra: currCategory ? state.FiltersReducer.filtersExtra.filter(item => item.type === currCategory.slug) : [],
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
