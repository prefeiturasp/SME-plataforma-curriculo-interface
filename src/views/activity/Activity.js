import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';
import Sticky from 'react-stickynode';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { API_URL } from '../../constants';
import ActivityActions from '../../actions/ActivityActions';
import BodyActions from '../../actions/BodyActions';
import GenericItem from '../common/GenericItem';
import Page from '../common/Page';
import convertQuillToHtml from '../util/convertQuillToHtml';
import getActivityTypeIcon from './getActivityTypeIcon';
import getWindowWidth from '../util/getWindowWidth';
import iconArrowLeft from '../../images/iconArrowLeft.svg';
import iconArrowRight from '../../images/iconArrowRight.svg';
import iconClock from '../../images/iconClockWhite.svg';
import iconPrint from '../../images/iconPrint.svg';
import styles from './Activity.scss';

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
    
    const sequenceImage = data.image_attributes.default_url ? (
      <img
        className={styles.sequenceImage}
        src={API_URL + data.image_attributes.default_url}
        srcSet={`${API_URL}${data.image_attributes.large.url}, ${API_URL}${data.image_attributes.extra_large.url} 2x`}
        alt={sequence.title} />
    ) : null;

    const image = data.image_attributes.default_url ? (
      <img
        className={styles.image}
        src={API_URL + data.image_attributes.default_url}
        srcSet={`${API_URL}${data.image_attributes.large.url}, ${API_URL}${data.image_attributes.extra_large.url} 2x`}
        alt={data.title} />
    ) : null;

    const content = convertQuillToHtml(data.content);
    
    const linkChars = `/sequencia/${sequence.slug}/atividade/${this.props.match.params.slug2}/caracteristicas`;
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
      <Page>
      <section className={styles.wrapper}>
        <Sticky>
          <div className={styles.sequence}>
            {sequenceImage}
            <div>
              <p>Sequência de atividades</p>
              <NavLink to={link}>
                <h1>{sequence.title}</h1>
              </NavLink>
            </div>
            <button className={styles.btnSave}>
              <img src={iconPrint} alt="Salvar" />
              Salvar
            </button>
          </div>
        </Sticky>
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
              <p>Atividade {data.sequence}</p>
              <h1>{data.title}</h1>
            </div>
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
      </Page>
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
