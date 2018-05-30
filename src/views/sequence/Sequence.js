import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';
import { connect } from 'react-redux'
import SequencesActions from '../../actions/SequencesActions.js'
import ActivityItem from './ActivityItem'
import ComponentItem from '../common/ComponentItem'
import DevelopmentGoalItem from '../common/DevelopmentGoalItem'
import ExpandableLearningObjectiveItem from './ExpandableLearningObjectiveItem'
import GenericItem from '../common/GenericItem'
import KnowledgeMatrixItem from '../common/KnowledgeMatrixItem'
import ListItem from '../common/ListItem'
import iconClock from '../../images/iconClock.svg';
import iconHelp from '../../images/iconHelp.svg';
import styles from'./Sequence.css';

class Sequence extends Component {
  render() {
    const filters = [
      <GenericItem key={0} data={this.props.data.year} />,
      <GenericItem key={1} data={this.props.data.component} />,
    ];

    const components = this.props.data.relatedComponents.map((item, i) => {
      return (
        <ComponentItem key={i} data={item} isColored={false} />
      );
    });

    const knowledgeMatrices = this.props.data.knowledgeMatrices.map((item, i) => {
      return (
        <KnowledgeMatrixItem key={i} data={item} />
      );
    });

    const learningObjectives = this.props.data.learningObjectives.map((item, i) => {
      return (
        <ExpandableLearningObjectiveItem key={i} data={item} isExpanded={i === 0} />
      );
    });

    const developmentGoals = this.props.data.developmentGoals.map((item, i) => {
      return (
        <DevelopmentGoalItem key={i} data={item} />
      );
    });
    
    const books = this.props.data.books.map((item, i) => {
      return (
        <ListItem key={i} string={item} />
      );
    });
    
    const activities = this.props.data.activities.map((item, i) => {
      return (
        <ActivityItem key={i} data={item} index={i + 1} />
      );
    });

    return (
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h2>{this.props.data.name}</h2>
          <div className={styles.infos}>
            <ul>
              {filters}
            </ul>
            <div className={styles.duration}>
              <img src={iconClock} alt="Número de aulas" />
              <strong>{this.props.data.classes} aulas</strong>
              (Tempo estimado)
            </div>
          </div>
        </div>
        <hr />
        <div className={styles.details}>
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
                  <img src={iconHelp} alt="Ajuda" />
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
                  <img src={iconHelp} alt="Ajuda" />
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
                  <img src={iconHelp} alt="Ajuda" />
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
          <img
            className={styles.image}
            src={this.props.data.image}
            alt={this.props.data.title} />
          <div className={styles.description}>
            {this.props.data.description}
          </div>
          <h4>Atividades</h4>
          <ul className="row">
            {activities}
          </ul>
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
