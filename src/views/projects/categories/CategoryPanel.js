import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';
import { connect } from 'react-redux';
import ProjectFiltersActions from 'actions/ProjectFiltersActions';
import ImageButton from './ImageButton';
import TextButton from './TextButton';
import arrowLeft from 'images/arrows/left.svg';
import chevronLeft from 'images/chevrons/left.svg';
import iconHelp from 'images/icons/help.svg';
import styles from './CategoryPanel.scss';

function isCategoryOneOf(category, list) {
  return category && list.indexOf(category.slug) >= 0;
}

class CategoryPanel extends Component {
  onClickedClose = () => {
    this.props.hideCategory();
  };

  render() {
    const classes = this.props.isShowingCategory
      ? [styles.wrapper, styles.isShowing]
      : [styles.wrapper];

    const hasImage = this.props.items.findIndex(item => item.url) >= 0;
    const listClass = hasImage ? styles.images : styles.list;

    const isAxesOrLearningObjectives = isCategoryOneOf(
      this.props.currCategory,
      ['axes', 'learning_objectives']
    );
    const list = isAxesOrLearningObjectives
      ? this.props.itemsExtra
      : this.props.items;

    const items = list.map((item, i) => {
      return hasImage ? (
        <ImageButton key={i} data={item} />
      ) : (
        <TextButton key={i} data={item} />
      );
    });

    const categoryName = this.props.currCategory
      ? this.props.currCategory.name
      : '';

    const hasTooltip = isCategoryOneOf(this.props.currCategory, [
      'knowledge_matrices',
      'learning_objectives',
      'sustainable_development_goals',
    ]);
    let btnTooltip = null;
    let tooltip = null;

    if (hasTooltip) {
      let tooltipTitle = '';
      let tooltipText = '';

      switch (this.props.currCategory.slug) {
        case 'knowledge_matrices':
          tooltipTitle = 'O que são as matrizes de saberes?';
          tooltipText =
            'O desenvolvimento que procura satisfazer as necessidades da geração atual, sem comprometer a capacidades das gerações futuras de satisfazerem as suas próprias necessidades.';
          break;

        case 'learning_objectives':
          tooltipTitle = 'O que são os objetivos de aprendizagem?';
          tooltipText =
            'O desenvolvimento que procura satisfazer as necessidades da geração atual, sem comprometer a capacidades das gerações futuras de satisfazerem as suas próprias necessidades.';
          break;

        case 'sustainable_development_goals':
          tooltipTitle = 'O que são os ODS?';
          tooltipText =
            'O desenvolvimento que procura satisfazer as necessidades da geração atual, sem comprometer a capacidades das gerações futuras de satisfazerem as suas próprias necessidades.';
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
          className="tooltip"
        >
          <strong>{tooltipTitle}</strong>
          <p>{tooltipText}</p>
        </ReactTooltip>
      );
    }

    return (
      <div className={classes.join(' ')}>
        <header className={styles.header}>
          <button className={styles.backArrow} onClick={this.onClickedClose}>
            <img src={arrowLeft} alt="Voltar" />
          </button>
          <h1>Filtros</h1>
        </header>
        <h2 className={styles.h2}>
          {categoryName}
          {btnTooltip}
        </h2>
        <div className={listClass}>{items}</div>
        <button className={styles.back} onClick={this.onClickedClose}>
          <img src={chevronLeft} alt="Voltar" />
          Voltar
        </button>
        <footer className={styles.footer}>
          <button className="btn" onClick={this.onClickedClose}>
            Selecionar
          </button>
        </footer>
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
  const currCategory = state.ProjectFiltersReducer.currCategory;
  return {
    currCategory,
    isShowingCategory: state.ProjectFiltersReducer.isShowingCategory,
    items: currCategory
      ? state.ProjectFiltersReducer.filters.filter(
          item => item.type === currCategory.slug
        )
      : [],
    itemsExtra: currCategory
      ? state.ProjectFiltersReducer.filtersExtra.filter(
          item => item.type === currCategory.slug
        )
      : [],
  };
};

const mapDispatchToProps = dispatch => {
  return {
    hideCategory: () => {
      dispatch(ProjectFiltersActions.hideCategory());
    },
    search: () => {
      dispatch(ProjectFiltersActions.backToCategoryList());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryPanel);
