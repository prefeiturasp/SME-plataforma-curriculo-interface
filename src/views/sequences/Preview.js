import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import AnimateHeight from 'react-animate-height';
import ReactTooltip from 'react-tooltip';
import { NavLink } from 'react-router-dom';
import KnowledgeMatrixItem from 'components/objects/KnowledgeMatrixItem';
import LearningObjectiveItem from 'components/objects/LearningObjectiveItem';
import SustainableDevGoalItem from 'components/objects/SustainableDevGoalItem';
import withWidth from 'components/hoc/withWidth';
import iconHelp from 'images/icon/help.svg';
import styles from './Preview.scss';

class Preview extends Component {
  render() {
    const knowledgeMatrices = this.props.data.knowledge_matrices.map((item, i) => {
      return (
        <KnowledgeMatrixItem key={i} data={item} />
      );
    });

    const learningObjectives = this.props.data.learning_objectives.map((item, i) => {
      return (
        <li key={i}>
          <LearningObjectiveItem data={item} />
        </li>
      );
    });

    const sustainableDevGoals = this.props.data.sustainable_development_goals.map((item, i) => {
      return (
        <SustainableDevGoalItem key={i} data={item} />
      );
    });

    const sustainableDevGoalsTitle = sustainableDevGoals.length > 0 ? (
      <div className={styles.title}>
        Objetivos de Desenvolvimento Sustentável (ODS)
        <button data-tip data-for="tooltipDevelopmentGoals">
          <img src={iconHelp} alt="Ajuda" />
        </button>
      </div>
    ) : null;

    const link = `/sequencia/${this.props.data.slug}`;

    const contents = (
      <Fragment>
        <div className={styles.scroll}>
          <div className={styles.title}>
            Matriz de Saberes
            <button data-tip data-for="tooltipKnowledgeMatrices">
              <img src={iconHelp} alt="Ajuda" />
            </button>
          </div>
          <ul>
            {knowledgeMatrices}
          </ul>
          <div className={styles.title}>
            Objetivos de Aprendizagem
            <button data-tip data-for="tooltipLearningObjectives">
              <img src={iconHelp} alt="Ajuda" />
            </button>
          </div>
          <ul className={styles.objectives}>
            {learningObjectives}
          </ul>
          {sustainableDevGoalsTitle}
          <ul>
            {sustainableDevGoals}
          </ul>
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
        <div className={styles.access}>
          <NavLink to={link}>
            Acessar
          </NavLink>
        </div>
      </Fragment>
    );

    if (this.props.windowWidth < 768) {
      const height = this.props.data.isExpanded ? 'auto' : 0;
      return (
        <AnimateHeight height={height}>
          <div className={styles.wrapper}>
            {contents}
          </div>
        </AnimateHeight>
      );
    } else {
      const height = this.props.height;
      const width = this.props.width + 30;
      
      const styleMask = {
        width: this.props.data.isExpanded ? width : 0,
        height,
      };
      
      const styleWrapper = {
        width,
        height,
      };
      
      const classes = [
        styles.mask,
        this.props.data.isExpanded ? styles.isExpanded : '',
        this.props.isLeftAligned ? styles.isLeftAligned : '',
      ];

      return (
        <div className={classes.join(' ')} style={styleMask}>
          <div className={styles.wrapper} style={styleWrapper}>
            {contents}
          </div>
        </div>
      );
    }
  }
}

Preview.propTypes = {
  data: PropTypes.object.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  isLeftAligned: PropTypes.bool.isRequired,
};

export default withWidth(Preview);
