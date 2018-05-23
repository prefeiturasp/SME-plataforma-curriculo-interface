import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './SequenceItemPreview.css';

export class SequenceItemPreview extends Component {
  onClickedHelpMatrices() {

  }

  onClickedHelpLearningObjectives() {

  }

  onClickedHelpDevelopmentGoals() {

  }

  render() {
    const knowledgeMatrices = this.props.sequence.knowledgeMatrices.map((item, i) => {
      return (
        <li key={i} className={styles.matrix}>
          <div>{item.number}</div>
          <div>{item.name}</div>
        </li>
      );
    });

    const learningObjectives = this.props.sequence.learningObjectives.map((item, i) => {
      return (
        <li key={i} className={styles.learningObjective}>
          {item.code1}
          <span style={{color:item.color}}>{item.code2}</span>
          {item.code3}
        </li>
      );
    });

    const developmentGoals = this.props.sequence.developmentGoals.map((item, i) => {
      return (
        <img
          key={i}
          src={item.image}
          alt={item.name}
          className={styles.developmentGoal} />
      );
    });

    const link = `/sequencia/${this.props.sequence.id}`;

    return (
      <div className={styles.container} style={{height:`${this.props.height}px`}}>
        <div className={styles.scroll}>
          <div className={styles.title}>
            Matriz de Saberes
            <button onClick={this.onClickedHelpMatrices.bind(this)}>
              <i className="fa fa-question-circle" title="Ajuda"></i>
            </button>
          </div>
          <ul>
            {knowledgeMatrices}
          </ul>
          <div className={styles.title}>
            Objetivos de Aprendizagem
            <button onClick={this.onClickedHelpLearningObjectives.bind(this)}>
              <i className="fa fa-question-circle" title="Ajuda"></i>
            </button>
          </div>
          <ul>
            {learningObjectives}
          </ul>
          <div className={styles.title}>
            Objetivos de Desenvolvimento Sustentável (ODS)
            <button onClick={this.onClickedHelpDevelopmentGoals.bind(this)}>
              <i className="fa fa-question-circle" title="Ajuda"></i>
            </button>
          </div>
          <ul>
            {developmentGoals}
          </ul>
        </div>
        <NavLink to={link} className={styles.access}>
          Acessar
        </NavLink>
      </div>
    );
  }
}

export default SequenceItemPreview;
