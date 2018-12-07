import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { API_URL } from 'utils/constants';
import ActivityItem from './ActivityItem';
import BodyActions from 'actions/BodyActions';
import GenericItem from 'components/GenericItem';
import Page from 'components/Page';
import ReadMore from 'components/ReadMore';
import SequencesActions from 'actions/SequencesActions';
import iconClock from 'images/icon/clockWhite.svg';
import iconPrint from 'images/icon/print.svg';
import styles from './Sequence.scss';

class Sequence extends Component {
  componentDidMount() {
    this.props.loadItem(this.props.match.params.slug);
  }

  render() {
    const data = this.props.data;

    if (!data) {
      return <span />;
    }

    const linkChars = `/sequencia/${this.props.match.params.slug}/caracteristicas`;
    const linkPrint = `/imprimir/sequencia/${this.props.match.params.slug}`;

    const filters = [
      <GenericItem key={0} data={{name: `${data.year} ano`}} />,
      <GenericItem key={1} data={data.main_curricular_component} />,
    ];

    const word = data.activities.length > 1 ? 'Atividades' : 'Atividade';
    const activitiesTitle = `${data.activities.length} ${word}`;

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
      duration = (
        <div className={styles.duration}>
          <img src={iconClock} alt="Número de aulas" />
          <div>
            <em>{data.estimated_time}</em>
            {word}
          </div>
        </div>
      );
    }

    const description = data.presentation_text.replace(/\r\n/g, '<br>');

    return (
      <Page>
      <section className={styles.wrapper}>
        <header className={styles.header}>
          <div className={styles.banner}>
            {image}
            <ul>
              {filters}
            </ul>
            {duration}
          </div>
          <div className={styles.info}>
            <div>
              <p>Sequência de atividades</p>
              <h1>{data.title}</h1>
            </div>
            <button className={styles.btnSave}>
              <img src={iconPrint} alt="Salvar" />
              Salvar
            </button>
          </div>
          <NavLink className={styles.btnInfo} to={linkChars}>
            Ver características
          </NavLink>
          <NavLink className={styles.btnPrint} to={linkPrint}>
            <img src={iconPrint} alt="Imprimir" />
            Imprimir
          </NavLink>
        </header>
        <div className="container">
          <div className={styles.description}>
            <ReadMore lines={15} children={description} />
          </div>
          <h4>{activitiesTitle}</h4>
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
      </Page>
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
