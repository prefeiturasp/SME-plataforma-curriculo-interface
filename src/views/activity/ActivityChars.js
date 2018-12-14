import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ActivityActions from 'actions/ActivityActions';
import BodyActions from 'actions/BodyActions';
import ExpandableLearningObjectiveItem from 'components/objects/ExpandableLearningObjectiveItem';
import SimpleHeader from 'components/header/SimpleHeader';
import Tooltips from 'components/Tooltips';
import getEnvironmentIconAndLabel from './getEnvironmentIconAndLabel';
import iconHelp from 'images/icons/help.svg';
import styles from 'views/sequence/SequenceChars.scss';
import styles1 from './ActivityChars.scss';

class ActivityChars extends Component {
  componentDidMount() {
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

  render() {
    if (this.props.data == null) {
      return <span />;
    }

    const data = this.props.data;
    
    const sequence = data.activity_sequence;
    const linkBack = `/sequencia/${sequence.slug}/atividade/${this.props.match.params.slug2}`;
    
    const environment = getEnvironmentIconAndLabel(data.environment);
    
    const learningObjectivesTitle = data.learning_objectives.length > 0 ? (
      <div className={styles.title}>
        Objetivos de aprendizagem
        <button data-tip data-for="tooltipLearningObjectives">
          <img src={iconHelp} alt="Ajuda" />
        </button>
      </div>
    ) : null;

    const learningObjectives = data.learning_objectives.map((item, i) => {
      return (
        <ExpandableLearningObjectiveItem key={i} data={item} isExpanded={i === 0} />
      );
    });

    return (
      <section className={styles.wrapper}>
        <SimpleHeader
          back={{ url: linkBack }}
          title="Características"
        />

        <div className={styles.title}>
          Ambiente
        </div>
        <div className={styles1.environment}>
          <img src={environment.icon} alt={environment.label} />
          {environment.label}
        </div>
        
        {learningObjectivesTitle}
        <ul>
          {learningObjectives}
        </ul>

        <Tooltips />
      </section>
    );
  }
}

ActivityChars.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(ActivityChars);
