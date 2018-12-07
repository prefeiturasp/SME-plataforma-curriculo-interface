import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { clearAllBodyScrollLocks } from 'body-scroll-lock';
import BodyActions from 'actions/BodyActions';
import FiltersActions from 'actions/FiltersActions';
import SequencesActions from 'actions/SequencesActions';
import CategoryButton from './CategoryButton';
import CategoryPanel from './CategoryPanel';
import CurricularComponentButton from './CurricularComponentButton';
import YearButton from './YearButton';
import iconCloseBig from 'images/icon/closeBig.svg';
import iconWarning from 'images/icon/warning.svg';
import styles from './FilterPanel.css';

class FilterPanel extends Component {
  ref = React.createRef();
  
  onClickedSearch = () => {
    const activeFilters = this.props.filters.filter(item => item.isActive);
    if (activeFilters.length > 0) {
      this.props.search(activeFilters);
      clearAllBodyScrollLocks();
    } else {
      this.props.showAlert('Selecione pelo menos um ano ou componente curricular para encontrar sequencias de atividades.');
    }
  }

  onClickedClose = () => {
    clearAllBodyScrollLocks();
    this.props.togglePanel();
  }

  componentDidMount() {
    this.props.load();
  }

  render() {
    const style = this.props.isExpanded && this.ref.current ? { height: `${this.ref.current.clientHeight}px` } : {};
    
    const yearButtons = this.props.filters
      .filter(item => item.type === 'years')
      .map((item, i) => {
        return (
          <YearButton key={i} data={item} />
        );
      });

    const componentButtons = this.props.filters
      .filter(item => item.type === 'curricular_components')
      .map((item, i) => {
        return (
          <CurricularComponentButton key={i} data={item} />
        );
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
      return (
        <CategoryButton key={i} data={item} />
      );
    });

    const classes = this.props.isExpanded ? [styles.wrapper, styles.isExpanded] : [styles.wrapper];

    return (
      <div className={classes.join(' ')} style={style}>
        <div ref={this.ref}>
          <h3>Filtros</h3>
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-3">
              <h4>Ano</h4>
              <h5>Ciclo de Alfabetização</h5>
              <ul className={styles.buttons}>
                {yearButtons}
              </ul>
              <p className={styles.warning}>
                <img src={iconWarning} alt="Observação" />
                <span>Em breve, estarão disponíveis sequências para todos os componentes e os ciclos do Ensino Fundamental.</span>
              </p>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <h4>Componente Curricular</h4>
              <ul className={styles.buttons}>
                {componentButtons}
              </ul>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-5">
              <h4>Filtros</h4>
              <div className={styles.categories}>
                <ul>
                  {categoryButtons}
                </ul>
                <CategoryPanel />
              </div>
            </div>
          </div>
          <footer className={styles.footer}>
            <button className={styles.button} onClick={this.onClickedSearch}>
              Buscar Sequência
            </button>
          </footer>
          <button className={styles.close} onClick={this.onClickedClose}>
            <img src={iconCloseBig} alt="Fechar" />
          </button>
        </div>
      </div>
    );
  }
}

FilterPanel.propTypes = {
  filters: PropTypes.array.isRequired,
  isExpanded: PropTypes.bool,
  load: PropTypes.func.isRequired,
  search: PropTypes.func.isRequired,
  showAlert: PropTypes.func.isRequired,
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
    search: (filters) => {
      dispatch(FiltersActions.search());
      dispatch(SequencesActions.search(filters));
    },
    showAlert: (message) => {
      dispatch(BodyActions.showAlert(message));
    },
    togglePanel: () => {
      dispatch(FiltersActions.togglePanel());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterPanel);
