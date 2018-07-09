import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import BodyActions from '../../actions/BodyActions';
import HomeActions from '../../actions/HomeActions';
import GridItem from './GridItem';
import iconActivities from '../../images/iconActivities.svg';
import iconCurriculum from '../../images/iconCurriculum.svg';
import iconKnowledgeMatrix from '../../images/iconKnowledgeMatrix.svg';
import iconLearningObjectives from '../../images/iconLearningObjectives.svg';
import iconSequences from '../../images/iconSequences.svg';
import iconSustainableDevGoals from '../../images/iconSustainableDevGoals.svg';
import imgHome from '../../images/imgHome.jpg';
import styles from './Home.css';

class Home extends Component {
  componentDidMount() {
    this.props.enterHome();
    this.props.load();
  }

  componentWillUnmount() {
    this.props.exitHome();
  }

  render() {
    const style = { backgroundImage: `url(${imgHome})` };
    const sequences = this.props.sequences.map((item, i) => {
      return (
        <GridItem key={i} index={i} data={item} />
      );
    });

    return (
      <section className={styles.wrapper}>
        <header className={styles.header} style={style}>
          <div className="container">
            <div className="row">
              <div className="col-md-8 offset-md-2">
                <p>Bem vindo!</p>
                <h1>Currículo da Cidade de São Paulo</h1>
              </div>
            </div>
          </div>
        </header>
        <div className={styles.intro}>
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <p>Olá, encontre atividades do currículo da cidade para a sala de aula. As atividades estão organizadas em sequências relacionadas a temas específicos do currículo.</p>
            </div>
          </div>
          <ul className="row">
            <li className="col-md-4">
              <img src={iconCurriculum} alt="Conheça e explore o Currículo da Cidade" />
              <div>Conheça e explore o Currículo da Cidade</div>
            </li>
            <li className="col-md-4">
              <img src={iconSequences} alt="Veja as sequências de atividades" />
              <div>Veja as sequências de atividades</div>
            </li>
            <li className="col-md-4">
              <img src={iconActivities} alt="Tenha acesso às atividades" />
              <div>Tenha acesso às atividades</div>
            </li>
          </ul>
          <NavLink to="/sequencias" className={styles.button}>
            Encontre as sequências de atividades
          </NavLink>
        </div>
        <div className={styles.sequences}>
          <div className="container">
            <div className="row">
              <div className="col-md-6 offset-md-3">
                <h2>Veja alguns exemplos de Sequências de Atividades</h2>
              </div>
            </div>
            <ul className="row">
              {sequences}
            </ul>
            <NavLink to="/sequencias" className={styles.button}>
              Ver outras sequências
            </NavLink>
          </div>
        </div>
        <div className={styles.curriculum}>
          <h2>O que é o novo Currículo da Cidade</h2>
          <ul className="row">
            <li className="col-md-4">
              <img src={iconSustainableDevGoals} alt="Objetivos de Desenvolvimento Sustentável (ODS)" />
              <div>Objetivos de Desenvolvimento Sustentável (ODS)</div>
            </li>
            <li className="col-md-4">
              <img src={iconKnowledgeMatrix} alt="Matriz de Saberes" />
              <div>Matriz de Saberes</div>
            </li>
            <li className="col-md-4">
              <img src={iconLearningObjectives} alt="Objetivos de Aprendizagem" />
              <div>Objetivos de Aprendizagem</div>
            </li>
          </ul>
          <NavLink to="/curriculo" className={styles.button}>
            Quero saber mais sobre o currículo
          </NavLink>
        </div>
        <div className={styles.discover}>
          <div className="container">
            <div className="row">
              <div className="col-md-10 offset-md-1">
                <p>A plataforma ainda está crescendo, veja o que vem por aí!<br />Este é só o começo.</p>
                <NavLink to="/descobrir" className={styles.button}>
                  Quero descobrir
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Home.propTypes = {
  sequences: PropTypes.array.isRequired,
  enterHome: PropTypes.func.isRequired,
  exitHome: PropTypes.func.isRequired,
  load: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  const items = state.HomeReducer.items;
  return {
    sequences: items.length < 4 ? items : items.slice(0, 4),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    enterHome: () => {
      dispatch(BodyActions.enterHome());
    },
    exitHome: () => {
      dispatch(BodyActions.exitHome());
    },
    load: () => {
      dispatch(BodyActions.showLoading());
      dispatch(HomeActions.load());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
