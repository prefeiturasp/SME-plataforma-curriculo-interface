import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ExpandableLearningObjective from 'components/objects/ExpandableLearningObjective';
import Tooltips from 'components/Tooltips';
import getEnvironmentIconAndLabel from './getEnvironmentIconAndLabel';
import iconHelp from 'images/icons/help.svg';
import iconPrint from 'images/icons/print.svg';
import styles from 'views/sequence/chars/SequenceChars.scss';
import styles1 from './ActivityChars.scss';

class ActivityChars extends Component {
  onClickedPrint = () => {
    window.print();
  }

  render() {
    const { data, isPrint } = this.props;

    if (!data) {
      return <span />;
    }

    const environment = getEnvironmentIconAndLabel(data.environment);

    const learningObjectivesTitle = data.learning_objectives.length ? (
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

    const btnPrint = isPrint
      ? null
      : <button className={styles.btnPrint} onClick={this.onClickedPrint}>
          <img src={iconPrint} alt="Imprimir" />
          Imprimir
        </button>;

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
        {btnPrint}
        <Tooltips />
      </section>
    );
  }
}

ActivityChars.propTypes = {
  data: PropTypes.object,
  isPrint: PropTypes.bool,
};

export default ActivityChars;
