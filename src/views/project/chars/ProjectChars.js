import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { history } from 'index';
import Chip from 'components/objects/Chip';
import ExpandableLearningObjective from 'components/objects/ExpandableLearningObjective';
import KnowledgeMatrixItem from 'components/objects/KnowledgeMatrixItem';
import SustainableDevGoalItem from 'components/objects/SustainableDevGoalItem';
import Tooltips from 'components/Tooltips';
import iconHelp from 'images/icons/help.svg';
import iconPrint from 'images/icons/print.svg';
import styles from './ProjectChars.scss';

function onlyUnique(value, index, self) {
    if (value === undefined) {
      return false
    }
    return self.indexOf(value) === index;
}


class ProjectChars extends Component {
    render() {
    const { data } = this.props;
    let studentProtagonisms = [];
    let learningObjectives = [];
    let sustainableDevGoals = [];
    let knowledgeMatrices = [];


    if (!data) {
      return <span />;
    }

    if (this.props.data.student_protagonisms) {
      studentProtagonisms = this.props.data.student_protagonisms.map((sp, i) => {
        return <Chip key={i} data={{ name: sp.title, color: sp.color}} />
      })
    }

    if (this.props.data.learning_objectives) {
      learningObjectives = this.props.data.learning_objectives.map((lo, i) => {
        return <Chip key={i} data={{ name: lo.code}}/>
      })
    }



    if (this.props.data.sustainable_development_goals) {
      const ods = this.props.data.sustainable_development_goals.map((item, i) => {
        return item.name;
      }).filter(onlyUnique);
      sustainableDevGoals = ods.map((item, i) => {
        let sustainableDevGoal = this.props.data.sustainable_development_goals.filter((itm) => { return itm.name === item});
        return <SustainableDevGoalItem key={i} data={sustainableDevGoal[0]} />;
      });
    }

    if (this.props.data.knowledge_matrices) {
      knowledgeMatrices = this.props.data.knowledge_matrices.map((km, i) => {
        return <KnowledgeMatrixItem key={i} data={km} isLink={true} />;
      })
    }

    return (
      <div className={styles.wrapper}>
        <div className={styles.title}>
          Protagonismo Estudantil
          <div>
            <div className={styles.spacer} />
            {studentProtagonisms.length && (
              studentProtagonisms
            )}
          </div>
        </div>
        <div className={styles.title}>
          Objetivos de aprendizagem
          <button data-tip data-for="tooltipLearningObjectives">
            <img src={iconHelp} alt="Ajuda" />
          </button>
          <div>
            <div className={styles.spacer} />
            {learningObjectives.length && (
              learningObjectives
            )}
          </div>
        </div>
        <div className={styles.title}>
          Objetivos de Desenvolvimento Sustentável (ODS)
          <button data-tip data-for="tooltipDevelopmentGoals">
            <img src={iconHelp} alt="Ajuda" />
          </button>
          <div>
            <div className={styles.spacer} />
            {sustainableDevGoals.length && (
              sustainableDevGoals
            )}
          </div>
        </div>
        <div className={styles.spacer} />
        <div className={styles.title}>
          Matriz de saberes
          <button data-tip data-for="tooltipKnowledgeMatrices">
            <img src={iconHelp} alt="Ajuda" />
          </button>
          <div>
            <div className={styles.spacer} />
            {knowledgeMatrices.length && (
              knowledgeMatrices
            )}
          </div>
        </div>
        <div className={styles.spacer} />
        <Tooltips />
      </div>
    );
  }
}

ProjectChars.propTypes = {
  data: PropTypes.object,
  isPrint: PropTypes.bool,
};

export default ProjectChars;
