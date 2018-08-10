import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { API_URL } from '../../constants';
import ActivityActions from '../../actions/ActivityActions';
import BodyActions from '../../actions/BodyActions';
import ExpandableLearningObjectiveItem from '../common/ExpandableLearningObjectiveItem';
import GenericItem from '../common/GenericItem';
import convertQuillToHtml from '../util/convertQuillToHtml';
import getActivityTypeIcon from './getActivityTypeIcon';
import getWindowWidth from '../util/getWindowWidth';
import iconArrowLeft from '../../images/iconArrowLeft.svg';
import iconArrowRight from '../../images/iconArrowRight.svg';
import iconClock from '../../images/iconClock.svg';
import iconHelp from '../../images/iconHelp.svg';
import iconPrint from '../../images/iconPrint.svg';
import styles from './Activity.css';

class Activity extends Component {
  constructor(props) {
    super(props);
    this.state = { isShowingAllLearningObjectives: false };
  }

  onClickedAllLearningObjectives() {
    this.setState({ isShowingAllLearningObjectives: true });
  }

  onResized() {
    const totalWidth = getWindowWidth();
    this.setState({ totalWidth });
  }

  componentWillMount() {
    this.onResized();
  }

  componentDidMount() {
    window.addEventListener('resize', this.onResized.bind(this));
    const params = this.props.match.params;
    this.props.load(params.slug1, params.slug2);
  }

  componentDidUpdate(prevProps) {
    const params = this.props.match.params;
    const prevParams = prevProps.match.params;
    if (params.slug2 !== prevParams.slug2) {
      this.props.load(params.slug1, params.slug2);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResized.bind(this));
  }

  render() {
    if (this.props.data == null) {
      return <span />;
    }

    const data = this.props.data;
    const sequence = data.activity_sequence;

    const filters = [
      <GenericItem key={0} data={{name: sequence.year}} />,
      <GenericItem key={1} data={sequence.main_curricular_component} />,
    ];

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

    const learningObjectivesTitle = data.learning_objectives.length > 0 ? (
      <div className={styles.title}>
        Objetivos de aprendizagem
        <button data-tip data-for="tooltipLearningObjectives">
          <img src={iconHelp} alt="Ajuda" />
        </button>
      </div>
    ) : null;

    const learningObjectivesList = this.state.isShowingAllLearningObjectives ? data.learning_objectives : data.learning_objectives.slice(0, 3);

    const learningObjectives = learningObjectivesList.map((item, i) => {
      return (
        <ExpandableLearningObjectiveItem key={i} data={item} isExpanded={i === 0} />
      );
    });

    const btnAllLearningObjectives = learningObjectivesList.length === data.learning_objectives.length ? null : (
      <button className={styles.btnAllLearningObjectives} onClick={this.onClickedAllLearningObjectives.bind(this)}>
        Ver Todos os Objetivos
      </button>
    );

    const iconsItems = data.activity_types.map((item, i) => {
      const icon = getActivityTypeIcon(item.name);
      return (
        <li key={i}>
          <img src={icon} alt={item.name} />
          <div>{item.name}</div>
        </li>
      );
    });
    const icons = (
      <ul className={styles.icons}>
        {iconsItems}
      </ul>
    );
    const icons1 = this.state.totalWidth < 992 ? null : icons;
    const icons2 = this.state.totalWidth < 992 ? icons : null;

    const cover = data.image_attributes.default_url ? (
      <div className="container">
        <img
          className={styles.cover}
          src={API_URL + data.image_attributes.default_url}
          srcSet={`${API_URL}${data.image_attributes.large.url}, ${API_URL}${data.image_attributes.extra_large.url} 2x`}
          alt={data.title} />
      </div>
    ) : null;

    const content = convertQuillToHtml(data.content);
    
    const linkPrint = `/imprimir/sequencia/${sequence.slug}/atividade/${this.props.match.params.slug2}`;
    const linkPrev = `/sequencia/${sequence.slug}/atividade/${data.last_activity}`;
    const linkNext = `/sequencia/${sequence.slug}/atividade/${data.next_activity}`;
    const link = `/sequencia/${sequence.slug}`;

    const arrowPrev = data.last_activity ? (
      <NavLink className={styles.prev} to={linkPrev}>
        <img src={iconArrowLeft} alt="Seta" />
        Atividade {data.sequence - 1}
      </NavLink>
    ) : <span />;

    const arrowNext = data.next_activity ? (
      <NavLink className={styles.next} to={linkNext}>
        Atividade {data.sequence + 1}
        <img src={iconArrowRight} alt="Seta" />
      </NavLink>
    ) : null;

    return (
      <section className={styles.wrapper}>
        <div className={styles.header}>
          <div>
            <h3>Atividade {data.sequence}</h3>
            <h1>{data.title}</h1>
            <h2>Sequência didática: {sequence.title}</h2>
          </div>
          <NavLink className="btn" to={linkPrint}>
            <img src={iconPrint} alt="Imprimir" />
            Imprimir
          </NavLink>
        </div>
        <div className={styles.infos}>
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-3">
              <ul>
                {filters}
              </ul>
              {duration}
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              {learningObjectivesTitle}
              <ul>
                {learningObjectives}
              </ul>
              {btnAllLearningObjectives}
            </div>
            <div className="col-sm-12 col-md-6 col-lg-2 offset-lg-1">
              {icons1}
            </div>
          </div>
        </div>
        {cover}
        {icons2}
        <hr />
        <div className="container">
          <div className="row">
            <div className={styles.description} dangerouslySetInnerHTML={{__html: content}} />
          </div>
        </div>
        <hr />
        <div className={styles.arrows}>
          {arrowPrev}
          {arrowNext}
        </div>
        <div className={styles.footer}>
          <NavLink className={styles.back} to={link}>
            Voltar para a sequência
          </NavLink>
        </div>
        <ReactTooltip
          place="bottom"
          type="dark"
          effect="solid"
          id="tooltipLearningObjectives"
          className="tooltip">
          <strong>O que são os objetivos de aprendizagem?</strong>
          <p>O desenvolvimento que procura satisfazer as necessidades da geração atual, sem comprometer a capacidades das gerações futuras de satisfazerem as suas próprias necessidades.</p>
        </ReactTooltip>
      </section>
    );
  }
}

Activity.propTypes = {
  data: PropTypes.object,
  load: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  let slug = '';
  if (ownProps.match) {
    const params = ownProps.match.params;
    slug = `${params.slug1}_${params.slug2}`;
  } else {
    slug = `${ownProps.slug1}_${ownProps.slug2}`;
  }

  return {
    data: state.ActivityReducer[slug],
  };
};

const mapDispatchToProps = dispatch => {
  return {
    load: (slug1, slug2) => {
      dispatch(BodyActions.showLoading());
      dispatch(ActivityActions.load(slug1, slug2));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Activity);
