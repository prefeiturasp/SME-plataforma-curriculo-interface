import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BodyActions from '../../actions/BodyActions';
import LearningObjectivesActions from '../../actions/LearningObjectivesActions';
import CurricularComponentButton from './CurricularComponentButton';
import ExpandableLearningObjectiveItem from './ExpandableLearningObjectiveItem';
import GenericItem from '../common/GenericItem';
import YearButton from './YearButton';
import iconChevronLeft from '../../images/iconChevronLeft.svg';
import iconCloseBig from '../../images/iconCloseBig.svg';
import iconWarning from '../../images/iconWarning.svg';
import styles from './LearningObjectives.css';

class LearningObjectives extends Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  onClickedBack() {
    this.props.hideResults();
  }

  onClickedClose() {
    this.props.hideObjectives();
    this.props.hidePopup();
  }

  onClickedNext() {
    const activeFilters = this.props.filters.filter(item => item.isActive);
    this.props.search(activeFilters);

    const totalWidth = (window.innerWidth > 0) ? window.innerWidth : window.screen.width;
    if (totalWidth < 768) {
      this.props.showPopup();
    }
  }

  onClickedSee() {
    this.props.showObjectives();
    
    const totalWidth = (window.innerWidth > 0) ? window.innerWidth : window.screen.width;
    if (totalWidth < 768) {
      this.props.showPopup();
    }
  }

  componentDidMount() {
    this.props.load();
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
          <ExpandableLearningObjectiveItem key={i} data={item} />
        );
      });

    const totalWidth = (window.innerWidth > 0) ? window.innerWidth : window.screen.width;
    const classes1 = this.props.isShowingObjectives || totalWidth >= 768 ? [styles.objectives, styles.isVisible] : [styles.objectives];
    const classes2 = this.props.isShowingResults ? [styles.results, styles.isVisible] : [styles.results];
    const style = {};

    if (totalWidth >= 768) {
      const height = this.ref.current ? this.ref.current.offsetHeight : 0;
      const marginBottom = this.props.isShowingResults ? 0 : height;
      style.marginTop = `-${height}px`;
      style.marginBottom = `${marginBottom}px`;
    }

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
              <button className={styles.seeObjectives} onClick={this.onClickedSee.bind(this)}>
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
          <div ref={this.ref}>
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
          <div className={classes2.join(' ')} style={style}>
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
  hidePopup: PropTypes.func.isRequired,
  hideResults: PropTypes.func.isRequired,
  search: PropTypes.func.isRequired,
  showObjectives: PropTypes.func.isRequired,
  showPopup: PropTypes.func.isRequired,
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
      dispatch(LearningObjectivesActions.load());
    },
    hideObjectives: () => {
      dispatch(LearningObjectivesActions.hideObjectives());
    },
    hidePopup: () => {
      dispatch(BodyActions.hidePopup());
    },
    hideResults: () => {
      dispatch(LearningObjectivesActions.hideResults());
    },
    search: (filters) => {
      dispatch(LearningObjectivesActions.search(filters));
    },
    showObjectives: () => {
      dispatch(LearningObjectivesActions.showObjectives());
    },
    showPopup: () => {
      dispatch(BodyActions.showPopup());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LearningObjectives);
