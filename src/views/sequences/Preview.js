import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';
import { NavLink } from 'react-router-dom';
import KnowledgeMatrixItem from '../common/KnowledgeMatrixItem';
import LearningObjectiveItem from '../common/LearningObjectiveItem';
import SustainableDevGoalItem from '../common/SustainableDevGoalItem';
import getWindowWidth from '../util/getWindowWidth';
import iconHelp from '../../images/iconHelp.svg';
import styles from './Preview.css';

class Preview extends Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  render() {
    const knowledgeMatrices = this.props.data.knowledge_matrices.map((item, i) => {
      return (
        <KnowledgeMatrixItem key={i} data={item} />
      );
    });

    const learningObjectives = this.props.data.learning_objectives.map((item, i) => {
      return (
        <LearningObjectiveItem key={i} data={item} />
      );
    });

    const sustainableDevGoals = this.props.data.sustainable_development_goals.map((item, i) => {
      return (
        <SustainableDevGoalItem key={i} data={item} />
      );
    });

    let height = this.props.height;

    if (getWindowWidth() < 768) {
      if (this.props.data.isExpanded) {
        height = this.ref.current ? this.ref.current.scrollHeight : 0;
      } else {
        height = 0;
      }
    }

    const width = this.props.width + 30;
    const style1 = { height: `${height}px` };
    const style2 = { width: `${width}px`, ...style1 };

    const link = `/sequencia/${this.props.data.slug}`;
    const classes = [styles.mask];
    if (this.props.data.isExpanded) classes.push(styles.isExpanded)
    if (this.props.isLeftAligned) classes.push(styles.isLeftAligned)

    return (
      <div className={classes.join(' ')} style={style1}>
        <div className={styles.wrapper} style={style2} ref={this.ref}>
          <div className={styles.scroll}>
            <div className={styles.title}>
              Matriz de Saberes
              <button data-tip data-for="tooltipKnowledgeMatrices">
                <img src={iconHelp} alt="Ajuda" />
              </button>
            </div>
            <ul>
              {knowledgeMatrices}
            </ul>
            <div className={styles.title}>
              Objetivos de Aprendizagem
              <button data-tip data-for="tooltipLearningObjectives">
                <img src={iconHelp} alt="Ajuda" />
              </button>
            </div>
            <ul>
              {learningObjectives}
            </ul>
            <div className={styles.title}>
              Objetivos de Desenvolvimento Sustentável (ODS)
              <button data-tip data-for="tooltipDevelopmentGoals">
                <img src={iconHelp} alt="Ajuda" />
              </button>
            </div>
            <ul>
              {sustainableDevGoals}
            </ul>
          </div>
          <NavLink to={link} className={styles.access}>
            Acessar
          </NavLink>
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
      </div>
    );
  }
}

Preview.propTypes = {
  data: PropTypes.object.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  isLeftAligned: PropTypes.bool.isRequired,
};

export default Preview;
