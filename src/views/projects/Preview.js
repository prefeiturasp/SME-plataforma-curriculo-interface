import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Collapse from '@material-ui/core/Collapse';
import { NavLink } from 'react-router-dom';
import KnowledgeMatrixItem from 'components/objects/KnowledgeMatrixItem';
import LearningObjectiveItem from 'components/objects/LearningObjectiveItem';
import SustainableDevGoalItem from 'components/objects/SustainableDevGoalItem';
import Tooltips from 'components/Tooltips';
import withWidth from 'components/hoc/withWidth';
import iconHelp from 'images/icons/help.svg';
import styles from './Preview.scss';

class Preview extends Component {
  render() {
    const { data, isLeftAligned, windowWidth } = this.props;

    const knowledgeMatrices = data.knowledge_matrices.map(
      (item, i) => {
        return <KnowledgeMatrixItem key={i} data={item} />;
      }
    );

    const learningObjectives = data.learning_objectives.map(
      (item, i) => {
        return (
          <div key={i}>
            <LearningObjectiveItem data={item} />
          </div>
        );
      }
    );

    const sustainableDevGoals = data.sustainable_development_goals.map(
      (item, i) => {
        return <SustainableDevGoalItem key={i} data={item} />;
      }
    );

    const salt = data.id;

    const sustainableDevGoalsTitle = sustainableDevGoals.length ? (
      <div className={styles.title}>
        Objetivos de Desenvolvimento Sustentável (ODS)
        <button data-tip data-for={`tooltipDevelopmentGoals-${salt}`}>
          <img src={iconHelp} alt="Ajuda" />
        </button>
      </div>
    ) : null;

    const link = `/projeto/${data.slug}`;

    const contents = (
      <Fragment>
        <div className={styles.scroll}>
          <div className={styles.title}>
            Matriz de Saberes
            <button data-tip data-for={`tooltipKnowledgeMatrices-${salt}`}>
              <img src={iconHelp} alt="Ajuda" />
            </button>
          </div>
          <div>{knowledgeMatrices}</div>
          <div className={styles.title}>
            Objetivos de Aprendizagem
            <button data-tip data-for={`tooltipLearningObjectives-${salt}`}>
              <img src={iconHelp} alt="Ajuda" />
            </button>
          </div>
          <div className={styles.objectives}>{learningObjectives}</div>
          {sustainableDevGoalsTitle}
          <div>{sustainableDevGoals}</div>
        </div>
        <div className={styles.access}>
          <NavLink to={link}>Acessar</NavLink>
        </div>
        <Tooltips salt={salt} />
      </Fragment>
    );

    if (windowWidth < 768) {
      return (
        <Collapse in={data.isExpanded}>
          <div className={styles.wrapper}>{contents}</div>
        </Collapse>
      );
    } else {
      const height = this.props.height;
      const width = this.props.width + 30;

      const styleMask = {
        width: data.isExpanded ? width : 0,
        height,
      };

      const styleWrapper = {
        width,
        height,
      };

      const classes = [
        styles.mask,
        data.isExpanded ? styles.isExpanded : '',
        isLeftAligned ? styles.isLeftAligned : '',
      ];

      return (
        <div className={classes.join(' ')} style={styleMask}>
          <div className={styles.wrapper} style={styleWrapper}>
            {contents}
          </div>
        </div>
      );
    }
  }
}

Preview.propTypes = {
  data: PropTypes.object.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  isLeftAligned: PropTypes.bool.isRequired,
};

export default withWidth(Preview);
