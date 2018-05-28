import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';
import { connect } from 'react-redux'
import SequencesActions from '../../actions/SequencesActions.js'
import styles from'./Sequence.css';

class Sequence extends Component {
  render() {
    const filters = [];
    const components = [];
    const knowledgeMatrices = [];
    const learningObjectives = [];
    const developmentGoals = [];
    const books = [];
    const activities = [];

    return (
      <div className="wrapper">
        <div className="container">
          <h3>Ciências Naturais</h3>
          <h2>Vibrando com o som</h2>
          <div className="">
            {filters}
            <div className="">
              <i className="fa fa-clock"></i>
              <span>16 aulas</span>
              <span className="">(Tempo estimado)</span>
            </div>
          </div>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className={styles.title}>
                Componentes relacionados
              </div>
              <ul>
                {components}
              </ul>
              <div className={styles.title}>
                Matriz de saberes
                <button data-tip data-for="tooltipKnowledgeMatrices">
                  <i className="fa fa-question-circle" title="Ajuda"></i>
                </button>
              </div>
              <ul>
                {knowledgeMatrices}
              </ul>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className={styles.title}>
                Objetivos de aprendizagem
                <button data-tip data-for="tooltipLearningObjectives">
                  <i className="fa fa-question-circle" title="Ajuda"></i>
                </button>
              </div>
              <ul>
                {learningObjectives}
              </ul>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4">
              <div className={styles.title}>
                Objetivos de Desenvolvimento Sustentável (ODS)
                <button data-tip data-for="tooltipDevelopmentGoals">
                  <i className="fa fa-question-circle" title="Ajuda"></i>
                </button>
              </div>
              <ul>
                {developmentGoals}
              </ul>
              <div className={styles.title}>
                Livros para o professor:
              </div>
              <ul>
                {books}
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div className="container">
          <img src="" alt="" />
          <p>Nesta unidade, as sequências de atividades oferecem diferentes oportunidades para que os estudantes possam ouvir, ler e escrever os textos literários. É importante que mesmo sem saber ler e escrever convencionalmente as crianças participem das situações de intercâmbio de leitores, para elaborar suas próprias interpretações sobre as obras lidas, confrontar ideias de outros colegas e construir significados cada vez mais elaborados sobre textos, preservando assim, o sentido das práticas de linguagem que exercem fora da escola.</p>
          <h4>Atividades</h4>
          {activities}
        </div>
        <ReactTooltip
          place="bottom"
          type="dark"
          effect="solid"
          id="tooltipKnowledgeMatrices"
          className="tooltip">
          <strong>O que são as matrizes de saberes?</strong>
          <p>O desenvolvimento que procura satisfazer as necessidades da geração atual, sem comprometer a capacidades das gerações futuras de satisfazerem as suas próprias necessidades.</p>
        </ReactTooltip>
        <ReactTooltip
          place="bottom"
          type="dark"
          effect="solid"
          id="tooltipLearningObjectives"
          className="tooltip">
          <strong>O que são os objetivos de aprendizagem?</strong>
          <p>O desenvolvimento que procura satisfazer as necessidades da geração atual, sem comprometer a capacidades das gerações futuras de satisfazerem as suas próprias necessidades.</p>
        </ReactTooltip>
        <ReactTooltip
          place="bottom"
          type="dark"
          effect="solid"
          id="tooltipDevelopmentGoals"
          className="tooltip">
          <strong>O que são os ODS?</strong>
          <p>O desenvolvimento que procura satisfazer as necessidades da geração atual, sem comprometer a capacidades das gerações futuras de satisfazerem as suas próprias necessidades.</p>
        </ReactTooltip>
      </div>
    );
  }
}

Sequence.propTypes = {
  data: PropTypes.object,
  load: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    data: state.SequencesReducer.currSequence,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    load: () => {
      dispatch(SequencesActions.load());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sequence);
