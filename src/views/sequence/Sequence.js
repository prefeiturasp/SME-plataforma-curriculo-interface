import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { API_URL } from '../../constants';
import BodyActions from '../../actions/BodyActions';
import SequencesActions from '../../actions/SequencesActions';
import ActivityItem from './ActivityItem';
import CurricularComponentItem from '../common/CurricularComponentItem';
import ExpandableLearningObjectiveItem from '../common/ExpandableLearningObjectiveItem';
import GenericItem from '../common/GenericItem';
import KnowledgeMatrixItem from '../common/KnowledgeMatrixItem';
import SustainableDevGoalItem from '../common/SustainableDevGoalItem';
import convertQuillToHtml from '../util/convertQuillToHtml';
import iconClock from '../../images/iconClock.svg';
import iconHelp from '../../images/iconHelp.svg';
import iconPrint from '../../images/iconPrint.svg';
import styles from './Sequence.css';

class Sequence extends Component {
  componentDidMount() {
    this.props.loadItem(this.props.match.params.slug);
  }

  render() {
    const data = this.props.data;

    if (!data) {
      return <span />;
    }

    const linkPrint = `/imprimir/sequencia/${this.props.match.params.slug}`;

    const filters = [
      <GenericItem key={0} data={{name: `${data.year} ano`}} />,
      <GenericItem key={1} data={data.main_curricular_component} />,
    ];

    const relatedComponents = data.curricular_components.map((item, i) => {
      return (
        <CurricularComponentItem key={i} data={item} isColored={false} />
      );
    });

    const knowledgeMatrices = data.knowledge_matrices.map((item, i) => {
      return (
        <KnowledgeMatrixItem key={i} data={item} isLink={true} />
      );
    });

    const learningObjectives = data.learning_objectives.map((item, i) => {
      return (
        <ExpandableLearningObjectiveItem key={i} data={item} isExpanded={i === 0} />
      );
    });

    const sustainableDevGoals = data.sustainable_development_goals.map((item, i) => {
      return (
        <SustainableDevGoalItem key={i} data={item} isLink={true} />
      );
    });
    
    const booksTitle = data.books ? (
      <div className={styles.title}>Para saber mais:</div>
    ) : null;

    const booksContents = data.books ? (
      <div dangerouslySetInnerHTML={{__html: convertQuillToHtml(data.books)}} />
    ) : null;
    
    const activities = data.activities.map((item, i) => {
      return (
        <ActivityItem
          key={i}
          data={item}
          index={i + 1}
          sequenceSlug={data.slug} />
      );
    });

    const image = data.image_attributes.default_url ? (
        <img
          className={styles.image}
          src={API_URL + data.image_attributes.default_url}
          srcSet={`${API_URL}${data.image_attributes.large.url}, ${API_URL}${data.image_attributes.extra_large.url} 2x`}
          alt={data.title} />
      ) : null;

    let duration = null;
    if (data.estimated_time) {
      const word = data.estimated_time > 1 ? 'aulas' : 'aula';
      const durationText = `${data.estimated_time} ${word}`;
      duration = (
        <div className={styles.duration}>
          <img src={iconClock} alt="Número de aulas" />
          <strong>{durationText}</strong>
          (Tempo estimado)
        </div>
      )
    }

    const description = data.presentation_text.replace(/\r\n/g, '<br>');

    return (
      <section className={styles.wrapper}>
        <header className={styles.header}>
          <div>
            <h1>{data.title}</h1>
            <ul>
              {filters}
            </ul>
            {duration}
          </div>
          <NavLink className="btn" to={linkPrint}>
            <img src={iconPrint} alt="Imprimir" />
            Imprimir
          </NavLink>
        </header>
        <hr />
        <div className={styles.details}>
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className={styles.title}>
                Componentes relacionados
              </div>
              <ul>
                {relatedComponents}
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
                {sustainableDevGoals}
              </ul>
              {booksTitle}
              {booksContents}
            </div>
          </div>
        </div>
        <hr />
        <div className="container">
          {image}
          <div
            className={styles.description}
            dangerouslySetInnerHTML={{__html: description}} />
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
      </section>
    );
  }
}

Sequence.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Sequence);
