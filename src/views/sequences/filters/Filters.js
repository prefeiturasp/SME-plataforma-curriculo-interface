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
import YearButton from 'views/sequences/objects/YearButton';
import iconCloseBig from 'images/icons/closeBig.svg';
import iconWarning from 'images/icons/warning.svg';
import styles from './Filters.scss';

class Filters extends Component {
  ref = React.createRef();

  onClickedSearch = () => {
    const activeFilters = this.props.filters.filter(item => item.isActive);
    if (activeFilters.length > 0) {
      this.props.search(activeFilters);
      clearAllBodyScrollLocks();
    } else {
      this.props.openAlert(
        'Selecione pelo menos um ano ou componente curricular para encontrar sequencias de atividades.'
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

    const yearButtons = this.props.filters
      .filter(item => item.type === 'years')
      .map((item, i) => {
        return <YearButton key={i} data={item} />;
      });

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
      {
        name: 'Tipo de Atividade',
        slug: 'activity_types',
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
              <h2 className={styles.h2}>Ano</h2>
              <h3 className={styles.h3}>Ciclo de Alfabetização</h3>
              <div className={styles.buttons}>{yearButtons}</div>
              <p className={styles.warning}>
                <img src={iconWarning} alt="Observação" />
                <span>
                  Em breve, estarão disponíveis sequências para todos os
                  componentes e os ciclos do Ensino Fundamental.
                </span>
              </p>
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
  isExpanded: PropTypes.bool,
  load: PropTypes.func.isRequired,
  openAlert: PropTypes.func.isRequired,
  search: PropTypes.func.isRequired,
  togglePanel: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    filters: state.FiltersReducer.filters,
    isExpanded: state.FiltersReducer.isExpanded,
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
    search: filters => {
      dispatch(FiltersActions.search());
      dispatch(SequencesActions.search(filters));
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
