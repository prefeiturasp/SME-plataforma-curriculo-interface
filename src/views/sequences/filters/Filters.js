import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { clearAllBodyScrollLocks } from 'body-scroll-lock';
import AlertActions from 'actions/AlertActions';
import FiltersActions from 'actions/FiltersActions';
import SequencesActions from 'actions/SequencesActions';
import Category from 'views/sequences/categories/Category';
import CategoryPanel from 'views/sequences/categories/CategoryPanel';
import CurricularComponent from 'views/sequences/objects/CurricularComponent';
import SegmentButton from 'views/sequences/objects/SegmentButton';
import StageButton from 'views/sequences/objects/StageButton';
import iconCloseBig from 'images/icons/closeBig.svg';
import styles from './Filters.scss';

class Filters extends Component {
  ref = React.createRef();

  onClickedSearch = () => {
    const { filters, filtersExtra, query } = this.props;
    const activeFilters = filters.filter(item => item.isActive);
    const activeFiltersExtra = filtersExtra.filter(item => item.isActive);
    if (activeFilters.length || query || activeFiltersExtra.length) {
      this.props.search();
      clearAllBodyScrollLocks();
    } else {
      this.props.openAlert(
        'Selecione pelo menos uma etapa ou componente curricular para encontrar sequências de atividades.'
      );
    }
  };

  onClickedClose = () => {
    clearAllBodyScrollLocks();
    this.props.togglePanel();
  };

  componentDidMount() {
    this.props.load();
  }

  render() {
    const style =
      this.props.isExpanded && this.ref.current
        ? { height: `${this.ref.current.clientHeight}px` }
        : {};

    const segmentButtons = this.props.filters
      .filter(item => item.type === 'segments')
      .map((item, i) => {
        return <SegmentButton key={i} data={item} />;
      });

    const stageButtons = this.props.filters
      .filter(item => item.type === 'stages')
      .map((item, i) => {
        return <StageButton key={i} data={item} />
      })

    const componentButtons = this.props.filters
      .filter(item => item.type === 'curricular_components')
      .map((item, i) => {
        return <CurricularComponent key={i} data={item} />;
      });

    const categories = [
      {
        name: 'Objetivos de Desenvolvimento Sustentável',
        slug: 'sustainable_development_goals',
      },
      {
        name: 'Matriz de Saberes',
        slug: 'knowledge_matrices',
      },
      {
        name: 'Objetivos de Aprendizagem',
        slug: 'learning_objectives',
      },
      {
        name: 'Eixo',
        slug: 'axes',
      },
    ];

    const categoryButtons = categories.map((item, i) => {
      return <Category key={i} data={item} />;
    });

    const classes = this.props.isExpanded
      ? [styles.wrapper, styles.isExpanded]
      : [styles.wrapper];

    return (
      <div className={classes.join(' ')} style={style}>
        <div ref={this.ref}>
          <header className={styles.header}>
            <button className={styles.close} onClick={this.onClickedClose}>
              <img src={iconCloseBig} alt="Fechar" />
            </button>
            <h1>Filtros</h1>
          </header>
          <div className={styles.row}>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <h2 className={styles.h2}>Segmento</h2>
              <div className={styles.buttons}>{segmentButtons}</div>
              <h2 className={styles.h2}>Etapa</h2>
              {
                stageButtons.length > 0
                  ? <div className={styles.buttons}>{stageButtons}</div>
                  : <p>Selecione um seguimento</p>
              }
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <h2 className={styles.h2}>Componente Curricular</h2>
              <div className={styles.buttons}>{componentButtons}</div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-5">
              <h2 className={styles.h2}>Filtros</h2>
              <div className={styles.categories}>
                <div>{categoryButtons}</div>
                <CategoryPanel />
              </div>
            </div>
          </div>
          <footer className={styles.footer}>
            <button className="btn" onClick={this.onClickedSearch}>
              Buscar Sequência
            </button>
          </footer>
        </div>
      </div>
    );
  }
}

Filters.propTypes = {
  filters: PropTypes.array.isRequired,
  filtersExtra: PropTypes.array.isRequired,
  isExpanded: PropTypes.bool,
  order: PropTypes.string,
  query: PropTypes.string,
  load: PropTypes.func.isRequired,
  openAlert: PropTypes.func.isRequired,
  search: PropTypes.func.isRequired,
  togglePanel: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    filters: state.FiltersReducer.filters,
    filtersExtra: state.FiltersReducer.filtersExtra,
    isExpanded: state.FiltersReducer.isExpanded,
    order: state.FiltersReducer.order,
    query: state.FiltersReducer.query,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    load: () => {
      dispatch(FiltersActions.load());
    },
    openAlert: message => {
      dispatch(AlertActions.open(message));
    },
    search: () => {
      dispatch(FiltersActions.search());
      dispatch(SequencesActions.search());
    },
    togglePanel: () => {
      dispatch(FiltersActions.togglePanel());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filters);
