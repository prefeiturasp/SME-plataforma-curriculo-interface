import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import styles from './Preview.css';

export class Preview extends Component {
  onClickedHelpMatrices() {

  }

  onClickedHelpLearningObjectives() {

  }

  onClickedHelpDevelopmentGoals() {

  }

  render() {
    const knowledgeMatrices = this.props.data.knowledgeMatrices.map((item, i) => {
      return (
        <li key={i} className={styles.matrix}>
          <div>{item.number}</div>
          <div>{item.name}</div>
        </li>
      );
    });

    const learningObjectives = this.props.data.learningObjectives.map((item, i) => {
      return (
        <li key={i} className={styles.learningObjective}>
          {item.code1}
          <span style={{color:item.color}}>{item.code2}</span>
          {item.code3}
        </li>
      );
    });

    const developmentGoals = this.props.data.developmentGoals.map((item, i) => {
      return (
        <img
          key={i}
          src={item.image}
          alt={item.name}
          className={styles.developmentGoal} />
      );
    });

    const link = `/sequencia/${this.props.data.id}`;

    return (
      <div className={styles.wrapper} style={{height:`${this.props.height}px`}}>
        <div className={styles.scroll}>
          <div className={styles.title}>
            Matriz de Saberes
            <button data-tip data-for="tooltipKnowledgeMatrices">
              <i className="fa fa-question-circle" title="Ajuda"></i>
            </button>
          </div>
          <ul>
            {knowledgeMatrices}
          </ul>
          <div className={styles.title}>
            Objetivos de Aprendizagem
            <button data-tip data-for="tooltipLearningObjectives">
              <i className="fa fa-question-circle" title="Ajuda"></i>
            </button>
          </div>
          <ul>
            {learningObjectives}
          </ul>
          <div className={styles.title}>
            Objetivos de Desenvolvimento Sustentável (ODS)
            <button data-tip data-for="tooltipDevelopmentGoals">
              <i className="fa fa-question-circle" title="Ajuda"></i>
            </button>
          </div>
          <ul>
            {developmentGoals}
          </ul>
        </div>
        <NavLink to={link} className={styles.access}>
          Acessar
        </NavLink>
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

Preview.propTypes = {
  data: PropTypes.object.isRequired,
  height: PropTypes.number.isRequired,
};

export default Preview;
