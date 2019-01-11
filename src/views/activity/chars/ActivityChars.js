import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import ExpandableLearningObjective from 'components/objects/ExpandableLearningObjective';
import Tooltips from 'components/Tooltips';
import getEnvironmentIconAndLabel from './getEnvironmentIconAndLabel';
import iconHelp from 'images/icons/help.svg';
import iconPrint from 'images/icons/print.svg';
import styles from 'views/sequence/chars/SequenceChars.scss';
import styles1 from './ActivityChars.scss';

class ActivityChars extends Component {
  render() {
    const data = this.props.data;

    if (!data) {
      return <span />;
    }

    const environment = getEnvironmentIconAndLabel(data.environment);

    const learningObjectivesTitle =
      data.learning_objectives.length ? (
        <div className={styles.title}>
          Objetivos de aprendizagem
          <button data-tip data-for="tooltipLearningObjectives">
            <img src={iconHelp} alt="Ajuda" />
          </button>
        </div>
      ) : null;

    const learningObjectives = data.learning_objectives.map((item, i) => {
      return (
        <ExpandableLearningObjective key={i} data={item} isExpanded={i === 0} />
      );
    });

    const linkPrint = `/imprimir/sequencia/xxx/atividade/yyy`;

    return (
      <section className={styles.wrapper}>
        <div className={styles.title}>Ambiente</div>
        <div className={styles1.environment}>
          <img src={environment.icon} alt={environment.label} />
          {environment.label}
        </div>
        <div className={styles.spacer} />
        {learningObjectivesTitle}
        <div>{learningObjectives}</div>
        <div className={styles.spacer} />
        <NavLink className={styles.btnPrint} to={linkPrint}>
          <img src={iconPrint} alt="Imprimir" />
          Imprimir
        </NavLink>
        <Tooltips />
      </section>
    );
  }
}

ActivityChars.propTypes = {
  data: PropTypes.object,
};

export default ActivityChars;
