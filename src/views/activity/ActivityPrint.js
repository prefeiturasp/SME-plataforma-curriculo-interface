import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { API_URL } from 'data/constants';
import ActivityActions from 'actions/ActivityActions';
import ExpandableLearningObjectiveItem from 'components/objects/ExpandableLearningObjectiveItem';
import GenericItem from 'components/objects/GenericItem';
import convertQuillToHtml from 'utils/convertQuillToHtml';
import getActivityTypeIcon from './getActivityTypeIcon';
import getWindowWidth from 'utils/getWindowWidth';
import iconClock from 'images/icon/clock.svg';
import styles from './Activity.scss';

let hasPrinted = false;

class ActivityPrint extends Component {
  state = {};
  
  onResized = () => {
    const totalWidth = getWindowWidth();
    this.setState({ totalWidth });
  }

  componentWillMount() {
    this.onResized();
  }

  componentDidMount() {
    window.addEventListener('resize', this.onResized);
    if (this.props.match) {
      const params = this.props.match.params;
      this.props.load(params.slug1, params.slug2);
    } else {
      this.props.load(this.props.slug1, this.props.slug2);
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.match) {
      const params = this.props.match.params;
      const prevParams = prevProps.match.params;
      if (params.slug2 !== prevParams.slug2) {
        this.props.load(params.slug1, params.slug2);
      }
    }

    if (!prevProps.data && this.props.data && !hasPrinted) {
      hasPrinted = true;
      setTimeout(window.print, 2000);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResized);
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
      </div>
    ) : null;

    const learningObjectivesList = data.learning_objectives;

    const learningObjectives = learningObjectivesList.map((item, i) => {
      return (
        <ExpandableLearningObjectiveItem key={i} data={item} isExpanded={true} />
      );
    });

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
    const icons1 = this.state.totalWidth < 768 ? null : icons;
    const icons2 = this.state.totalWidth < 768 ? icons : null;

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

    return (
      <section className={styles.wrapper}>
        <div className={styles.header}>
          <div>
            <h3>Atividade {data.sequence}</h3>
            <h1>{data.title}</h1>
            <h2>Sequência didática: {sequence.title}</h2>
          </div>
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
      </section>
    );
  }
}

ActivityPrint.propTypes = {
  data: PropTypes.object,
  slug1: PropTypes.string,
  slug2: PropTypes.string,
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
      dispatch(ActivityActions.load(slug1, slug2));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ActivityPrint);
