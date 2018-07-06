import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BodyActions from '../../actions/BodyActions';
import FiltersActions from '../../actions/FiltersActions';
import SequencesActions from '../../actions/SequencesActions';
import CategoryButton from './CategoryButton';
import CategoryPanel from './CategoryPanel';
import CurricularComponentButton from './CurricularComponentButton';
import YearButton from './YearButton';
import iconCloseBig from '../../images/iconCloseBig.svg';
import iconWarning from '../../images/iconWarning.svg';
import styles from './FilterPanel.css';

class FilterPanel extends Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  onClickedSearch() {
    const activeFilters = this.props.filters.filter(item => item.isActive);
    if (activeFilters.length > 0) {
      this.props.search(activeFilters);
    } else {
      this.props.showModal('Selecione pelo menos um ano ou componente curricular para encontrar sequencias de atividades.');
    }
  }

  onClickedClose() {
    this.props.hidePopup();
    this.props.togglePanel();
  }

  componentDidMount() {
    this.props.load();
  }

  render() {
    const style = this.props.isExpanded ? { height: `${this.ref.current.clientHeight}px` } : {};
    
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
        name: 'Objetivos de Aprendizado',
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
                <span>Em breve, estão disponíveis sequências para todos os os ciclos do Ensino Fundamental.</span>
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
            <button className={styles.button} onClick={this.onClickedSearch.bind(this)}>
              Buscar Sequência
            </button>
          </footer>
          <button className={styles.close} onClick={this.onClickedClose.bind(this)}>
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
  hidePopup: PropTypes.func.isRequired,
  load: PropTypes.func.isRequired,
  search: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired,
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
    hidePopup: () => {
      dispatch(BodyActions.hidePopup());
    },
    load: () => {
      dispatch(FiltersActions.load());
    },
    search: (filters) => {
      dispatch(FiltersActions.search());
      dispatch(SequencesActions.search(filters));
    },
    showModal: (message) => {
      dispatch(BodyActions.showModal(message));
    },
    togglePanel: () => {
      dispatch(FiltersActions.togglePanel());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterPanel);
