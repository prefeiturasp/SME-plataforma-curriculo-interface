import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TimelineLite } from 'gsap/TweenMax';
import { connect } from 'react-redux';
import BodyActions from '../../actions/BodyActions';
import LearningObjectivesActions from '../../actions/LearningObjectivesActions';
import CurricularComponentButton from './CurricularComponentButton';
import ExpandableLearningObjectiveItem from '../common/ExpandableLearningObjectiveItem';
import GenericItem from '../common/GenericItem';
import Loading from '../util/Loading';
import YearButton from './YearButton';
import getWindowWidth from '../util/getWindowWidth';
import iconChevronLeft from '../../images/iconChevronLeft.svg';
import iconCloseBig from '../../images/iconCloseBig.svg';
import iconWarning from '../../images/iconWarning.svg';
import styles from './LearningObjectives.css';

class LearningObjectives extends Component {
  constructor(props) {
    super(props);
    this.refFilters = React.createRef();
    this.refLoading = React.createRef();
    this.refResults = React.createRef();
    this.tl = new TimelineLite();
  }

  onClickedBack() {
    this.props.hideResults();

    this.tl.kill();
    this.tl.clear();
    this.tl.to(this.refResults.current, 0.2, { opacity: 0, display: 'none' });
    this.tl.to(this.refFilters.current, 0.2, { opacity: 1, display: 'block' });
  }

  onClickedClose() {
    this.props.hideObjectives();
    this.props.hideModal();
  }

  onClickedNext() {
    const activeFilters = this.props.filters.filter(item => item.isActive);
    if (activeFilters.length > 0) {
      this.props.search(activeFilters);
      
      this.tl.kill();
      this.tl.clear();
      this.tl.to(this.refFilters.current, 0.2, { opacity: 0, display: 'none' });
      this.tl.to(this.refLoading.current, 0.2, { opacity: 1, display: 'flex' });
      
      if (getWindowWidth() < 768) {
        this.props.showModal();
      }
    } else {
      this.props.showAlert('Selecione pelo menos um ano ou componente curricular para encontrar objetivos de aprendizagem.');
    }
  }

  onClickedSee() {
    this.props.showObjectives();
    
    if (getWindowWidth() < 768) {
      this.props.showModal();
    }
  }

  componentDidMount() {
    this.props.load();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isShowingResults) {
      this.tl.kill();
      this.tl.clear();
      this.tl.to(this.refFilters.current, 0.1, { opacity: 0, display: 'none' });
      this.tl.to(this.refLoading.current, 0.2, { opacity: 0, display: 'none' });
      this.tl.to(this.refResults.current, 0.2, { opacity: 1, display: 'block' });
    }
  }

  componentWillUnmount() {
    this.props.hideModal();
  }

  render() {
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

    const selectedFiltersButtons = this.props.filters
      .filter(item => item.isActive)
      .map((item, i) => {
        return (
          <GenericItem key={i} data={item} />
        );
      });

    const learningObjectivesItems = this.props.results
      .map((item, i) => {
        return (
          <ExpandableLearningObjectiveItem key={i} data={item} hasLink={true} />
        );
      });

    const totalWidth = getWindowWidth();
    const classes1 = this.props.isShowingObjectives || totalWidth >= 768 ? [styles.objectives, styles.isVisible] : [styles.objectives];
    const classes2 = this.props.isShowingResults || totalWidth >= 768 ? [styles.results, styles.isVisible] : [styles.results];
    
    return (
      <section className={styles.wrapper}>
        <header className={styles.header}>
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <h1>Objetivos de Aprendizagem e Desenvolvimento</h1>
              <p>O Currículo da Cidade optou por utilizar a terminologia Objetivos de Aprendizagem e Desenvolvimento para designar o conjunto de saberes que os estudantes da Rede Municipal de Ensino devem desenvolver ao longo do Ensino Fundamental. No Currículo da Cidade, os objetivos de aprendizagem e desenvolvimento orientam-se pela Educação Integral a partir da matriz de saberes e indicam o que os estudantes devem alcançar a cada ano como resultado das experiências de ensino e de aprendizagem intencionalmente previstas para esse fim.</p>
            </div>
          </div>
        </header>
        <hr />
        <div className={styles.example}>
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <h2>No Currículo da Cidade, os objetivos de aprendizagem e desenvolvimento estão identificados por uma sigla:</h2>
              <div className={styles.code}>
                <span className={styles.code1}>E</span>
                <span className={styles.code1}>F</span>
                <span className={styles.code2}>0</span>
                <span className={styles.code2}>X</span>
                <span className={styles.code3}>C</span>
                <span className={styles.code4}>X</span>
                <span className={styles.code4}>X</span>
              </div>
              <p>
                <strong>EF</strong> Ensino Fundamental;<br />
                <strong>0X</strong> Ano de Escolaridade;<br />
                <strong>CXX</strong> Componente curricular Ciências Naturais seguido da sequência de objetivos de aprendizagem e desenvolvimento desse componente.
              </p>
              <button className={styles.btnObjectives} onClick={this.onClickedSee.bind(this)}>
                Ver os objetivos relacionados
              </button>
            </div>
          </div>
        </div>
        <hr />
        <div className={classes1.join(' ')}>
          <div className={styles.objectivesTitle1}>
            <div className="col-md-8 offset-md-2">
              <h2>Conheça os objetivos</h2>
            </div>
          </div>
          <div ref={this.refFilters}>
            <h2 className={styles.objectivesTitle2}>Objetivos</h2>
            <div className="row">
              <div className="col-md-4 offset-md-2">
                <div className={styles.pickYear}>
                  <h3>Escolha o ano</h3>
                  <h4>Ciclo de alfabetização</h4>
                  <ul className={styles.buttons}>
                    {yearButtons}
                  </ul>
                  <p className={styles.warning}>
                    <img src={iconWarning} alt="Observação" />
                    <span>Em breve, estão disponíveis sequências para todos os os ciclos do Ensino Fundamental.</span>
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className={styles.pickCurricularComponent}>
                  <h3>Escolha o Componente Curricular</h3>
                  <ul className={styles.buttons}>
                    {componentButtons}
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-8 offset-md-2">
                <button className={styles.next} onClick={this.onClickedNext.bind(this)}>
                  Avançar
                </button>
              </div>
            </div>
            <button className={styles.close} onClick={this.onClickedClose.bind(this)}>
              <img src={iconCloseBig} alt="Fechar" />
            </button>
          </div>
          <div ref={this.refLoading} className={styles.loading}>
            <Loading />
          </div>
          <div ref={this.refResults} className={classes2.join(' ')}>
            <h2 className={styles.objectivesTitle2}>Objetivos</h2>
            <div className="row">
              <div className="col-md-8 offset-md-2">
                <button className={styles.back} onClick={this.onClickedBack.bind(this)}>
                  <img src={iconChevronLeft} alt="Voltar" />
                  Voltar
                </button>
                <p>Ano e componente(s) selecionado(s):</p>
                <ul>
                  {selectedFiltersButtons}
                </ul>
                <ul>
                  {learningObjectivesItems}
                </ul>
              </div>
            </div>
            <button className={styles.close} onClick={this.onClickedBack.bind(this)}>
              <img src={iconCloseBig} alt="Fechar" />
            </button>
          </div>
        </div>
      </section>
    );
  }
}

LearningObjectives.propTypes = {
  filters: PropTypes.array.isRequired,
  results: PropTypes.array.isRequired,
  isShowingObjectives: PropTypes.bool.isRequired,
  isShowingResults: PropTypes.bool.isRequired,
  load: PropTypes.func.isRequired,
  hideObjectives: PropTypes.func.isRequired,
  hideModal: PropTypes.func.isRequired,
  hideResults: PropTypes.func.isRequired,
  search: PropTypes.func.isRequired,
  showAlert: PropTypes.func.isRequired,
  showObjectives: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    filters: state.LearningObjectivesReducer.filters,
    results: state.LearningObjectivesReducer.results,
    isShowingObjectives: state.LearningObjectivesReducer.isShowingObjectives,
    isShowingResults: state.LearningObjectivesReducer.isShowingResults,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    load: () => {
      dispatch(BodyActions.showLoading());
      dispatch(LearningObjectivesActions.load());
    },
    hideObjectives: () => {
      dispatch(LearningObjectivesActions.hideObjectives());
    },
    hideModal: () => {
      dispatch(BodyActions.hideModal());
    },
    hideResults: () => {
      dispatch(LearningObjectivesActions.hideResults());
    },
    search: (filters) => {
      dispatch(LearningObjectivesActions.search(filters));
    },
    showAlert: (message) => {
      dispatch(BodyActions.showAlert(message));
    },
    showObjectives: () => {
      dispatch(LearningObjectivesActions.showObjectives());
    },
    showModal: () => {
      dispatch(BodyActions.showModal());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LearningObjectives);
