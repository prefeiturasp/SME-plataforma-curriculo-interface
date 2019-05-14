import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { history } from 'index';
import AxisItem from 'components/objects/AxisItem';
import Chip from 'components/objects/Chip';
import ExpandableLearningObjective from 'components/objects/ExpandableLearningObjective';
import KnowledgeMatrixItem from 'components/objects/KnowledgeMatrixItem';
import SustainableDevGoalItem from 'components/objects/SustainableDevGoalItem';
import Tooltips from 'components/Tooltips';
import iconHelp from 'images/icons/help.svg';
import iconPrint from 'images/icons/print.svg';
import styles from 'views/sequence/chars/SequenceChars.scss';

class ChallengeChars extends Component {
  state = { isShowingAllLearningObjectives: false };

  onClickedAllLearningObjectives = () => {
    this.setState({ isShowingAllLearningObjectives: true });
  };

  onClickedPrint = () => {
    if (this.props.isPrint) {
      window.print();
    } else {
      history.push(`/imprimir/sequencia/${this.props.data.slug}`);
    }
  };

  render() {
    const { data } = this.props;

    if (!data) {
      return <span />;
    }

    // HACK: filter repeated curricular components, should fix data coming from API
    const uniqueCurricularComponents = data.curricular_components.filter(
      (component, index, self) =>
        index === self.findIndex(t => t.name === component.name)
    );

    const relatedComponents = uniqueCurricularComponents.map((item, i) => {
      return <Chip key={i} data={item} isOutlined={true} />;
    });

    const knowledgeMatrices = data.knowledge_matrices.map((item, i) => {
      return <KnowledgeMatrixItem key={i} data={item} isLink={true} />;
    });

    const learningObjectivesList = this.state.isShowingAllLearningObjectives
      ? data.learning_objectives
      : data.learning_objectives.slice(0, 3);

    const learningObjectives = learningObjectivesList.map((item, i) => {
      return (
        <ExpandableLearningObjective key={i} data={item} isExpanded={i === 0} />
      );
    });

    const btnAllLearningObjectives =
      learningObjectivesList.length ===
      data.learning_objectives.length ? null : (
        <button
          className={styles.btnAllLearningObjectives}
          onClick={this.onClickedAllLearningObjectives}
        >
          Ver Todos os Objetivos
        </button>
      );

    const sustainableDevGoals = data.sustainable_development_goals.map(
      (item, i) => {
        return <SustainableDevGoalItem key={i} data={item} isLink={true} />;
      }
    );

    const axes = data.axes.map(
      (item, i) => {
        return <AxisItem key={i} data={item} />;
      }
    );

    return (
      <div className={styles.wrapper}>
        <div className={styles.title}>Componentes relacionados</div>
        <div>{relatedComponents}</div>
        <div className={styles.spacer} />
        <div className={styles.title}>
          Objetivos de aprendizagem
          <button data-tip data-for="tooltipLearningObjectives">
            <img src={iconHelp} alt="Ajuda" />
          </button>
        </div>
        <div>{learningObjectives}</div>
        {btnAllLearningObjectives}
        <div className={styles.spacer} />
        <div className={styles.title}>
          Objetivos de Desenvolvimento Sustentável (ODS)
          <button data-tip data-for="tooltipDevelopmentGoals">
            <img src={iconHelp} alt="Ajuda" />
          </button>
        </div>
        <div>{sustainableDevGoals}</div>
        <div className={styles.spacer} />
        <div className={styles.title}>
          Matriz de saberes
          <button data-tip data-for="tooltipKnowledgeMatrices">
            <img src={iconHelp} alt="Ajuda" />
          </button>
        </div>
        <div>{knowledgeMatrices}</div>
        <div className={styles.spacer} />
        <div className={styles.title}>
          Eixos
        </div>
        <div>{axes}</div>
        <button className={styles.btnPrint} onClick={this.onClickedPrint}>
          <img src={iconPrint} alt="Imprimir" />
          Imprimir
        </button>
        <Tooltips />
      </div>
    );
  }
}

ChallengeChars.propTypes = {
  data: PropTypes.object,
  isPrint: PropTypes.bool,
};

export default ChallengeChars;
