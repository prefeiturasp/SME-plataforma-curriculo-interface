import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SequencesActions from '../../actions/SequencesActions';
import ActivityPrint from '../activity/ActivityPrint';
import CurricularComponentItem from '../common/CurricularComponentItem';
import ExpandableLearningObjectiveItem from './ExpandableLearningObjectiveItem';
import GenericItem from '../common/GenericItem';
import KnowledgeMatrixItem from '../common/KnowledgeMatrixItem';
import SustainableDevGoalItem from '../common/SustainableDevGoalItem';
import ListItem from '../common/ListItem';
import iconClock from '../../images/iconClock.svg';
import styles from'./Sequence.css';

class SequencePrint extends Component {
  render() {
    const filters = [
      <GenericItem key={0} data={this.props.data.year} />,
      <GenericItem key={1} data={this.props.data.curricularComponent} />,
    ];

    const relatedComponents = this.props.data.relatedComponents.map((item, i) => {
      return (
        <CurricularComponentItem key={i} data={item} isColored={false} />
      );
    });

    const knowledgeMatrices = this.props.data.knowledgeMatrices.map((item, i) => {
      return (
        <KnowledgeMatrixItem key={i} data={item} />
      );
    });

    const learningObjectives = this.props.data.learningObjectives.map((item, i) => {
      return (
        <ExpandableLearningObjectiveItem key={i} data={item} isExpanded={true} />
      );
    });

    const sustainableDevGoals = this.props.data.sustainableDevGoals.map((item, i) => {
      return (
        <SustainableDevGoalItem key={i} data={item} />
      );
    });
    
    const books = this.props.data.books.map((item, i) => {
      return (
        <ListItem key={i} string={item} />
      );
    });
    
    const activities = this.props.data.activities.map((item, i) => {
      return (
        <ActivityPrint key={i} data={item} index={i + 1} />
      );
    });

    return (
      <section className={styles.wrapper}>
        <header className={styles.header}>
          <div>
            <h1>{this.props.data.name}</h1>
            <ul>
              {filters}
            </ul>
            <div className={styles.duration}>
              <img src={iconClock} alt="Número de aulas" />
              <strong>{this.props.data.classes} aulas</strong>
              (Tempo estimado)
            </div>
          </div>
        </header>
        <hr />
        <div className={styles.details}>
          <div className="row">
            <div className="col-4">
              <div className={styles.title}>
                Componentes relacionados
              </div>
              <ul>
                {relatedComponents}
              </ul>
              <div className={styles.title}>
                Matriz de saberes
              </div>
              <ul>
                {knowledgeMatrices}
              </ul>
            </div>
            <div className="col-4">
              <div className={styles.title}>
                Objetivos de aprendizagem
              </div>
              <ul>
                {learningObjectives}
              </ul>
            </div>
            <div className="col-4">
              <div className={styles.title}>
                Objetivos de Desenvolvimento Sustentável (ODS)
              </div>
              <ul>
                {sustainableDevGoals}
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
      </section>
    );
  }
}

SequencePrint.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(SequencePrint);
