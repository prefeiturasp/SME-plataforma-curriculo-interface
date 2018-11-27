import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';
import { connect } from 'react-redux';
import BodyActions from '../../actions/BodyActions';
import SequencesActions from '../../actions/SequencesActions';
import CurricularComponentItem from '../common/CurricularComponentItem';
import ExpandableLearningObjectiveItem from '../common/ExpandableLearningObjectiveItem';
import KnowledgeMatrixItem from '../common/KnowledgeMatrixItem';
import SustainableDevGoalItem from '../common/SustainableDevGoalItem';
import iconHelp from '../../images/iconHelp.svg';
import styles from './Sequence.scss';

class SequenceChars extends Component {
  state = { isShowingAllLearningObjectives: false };
  
  onClickedAllLearningObjectives = () => {
    this.setState({ isShowingAllLearningObjectives: true });
  }

  componentDidMount() {
    this.props.loadItem(this.props.match.params.slug);
  }

  render() {
    const data = this.props.data;

    if (!data) {
      return <span />;
    }

    // HACK: filter repeated curricular components, should fix data coming from API
    const uniqueCurricularComponents = data.curricular_components.filter((component, index, self) =>
      index === self.findIndex((t) => (
        t.name === component.name
      ))
    );

    const relatedComponents = uniqueCurricularComponents.map((item, i) => {
      return (
        <CurricularComponentItem key={i} data={item} isColored={false} />
      );
    });

    const knowledgeMatrices = data.knowledge_matrices.map((item, i) => {
      return (
        <KnowledgeMatrixItem key={i} data={item} isLink={true} />
      );
    });

    const learningObjectivesList = this.state.isShowingAllLearningObjectives ? data.learning_objectives : data.learning_objectives.slice(0, 3);

    const learningObjectives = learningObjectivesList.map((item, i) => {
      return (
        <ExpandableLearningObjectiveItem key={i} data={item} isExpanded={i === 0} />
      );
    });

    const btnAllLearningObjectives = learningObjectivesList.length === data.learning_objectives.length ? null : (
      <button className={styles.btnAllLearningObjectives} onClick={this.onClickedAllLearningObjectives}>
        Ver Todos os Objetivos
      </button>
    );

    const sustainableDevGoals = data.sustainable_development_goals.map((item, i) => {
      return (
        <SustainableDevGoalItem key={i} data={item} isLink={true} />
      );
    });

    return (
      <section className={styles.wrapper}>
        <div className={styles.details}>
          <div className={styles.title}>
            Componentes relacionados
          </div>
          <ul>
            {relatedComponents}
          </ul>
        
          <div className={styles.title}>
            Objetivos de aprendizagem
            <button data-tip data-for="tooltipLearningObjectives">
              <img src={iconHelp} alt="Ajuda" />
            </button>
          </div>
          <ul>
            {learningObjectives}
          </ul>
          {btnAllLearningObjectives}
        
          <div className={styles.title}>
            Objetivos de Desenvolvimento Sustentável (ODS)
            <button data-tip data-for="tooltipDevelopmentGoals">
              <img src={iconHelp} alt="Ajuda" />
            </button>
          </div>
          <ul>
            {sustainableDevGoals}
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
      </section>
    );
  }
}

SequenceChars.propTypes = {
  data: PropTypes.object,
  loadItem: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    data: state.SequencesReducer.currItem,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadItem: (slug) => {
      dispatch(BodyActions.showLoading());
      dispatch(SequencesActions.loadItem(slug));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SequenceChars);
