import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Element, scroller } from 'react-scroll';
import Challenge from './Challenge';
import Methodology from './Methodology';
import Page from 'components/layout/Page';
import iconDoAndRedo from './images/fazer-e-refazer.svg';
import iconGames from './images/jogos.svg';
import iconInvestigation from './images/investigacao.svg';
import iconProject from './images/projeto.svg';
import iconLiteracy from './images/literacy.png';
import iconProgramming from './images/programming.png';
import iconTechnologies from './images/technologies.png';
import iconTechnologies1 from './images/technologies.svg';
import styles from './Technologies.scss';

class Technologies extends Component {
  onClickedChallenges = () => {
    scroller.scrollTo('desafios', {
      duration: 300,
      smooth: true,
    });
  };

  onClickedLoadChallenges = () => {
    
  };

  render() {
    const { methodologies, challenges } = this.props;
    
    const methodologyItems = methodologies.map((item, i) => {
      return <Methodology key={i} data={item} />;
    });

    const challengeItems = challenges.map((item, i) => {
      return <Challenge key={i} />;
    });

    return (
      <Page>
        <header className={styles.header}>
          <div className={styles.headerContainer}>
            <div className={styles.headerRow}>
              <div className={styles.headerCol1}>
                <h1>Tecnologias para Aprendizagem</h1>
                <p>Lorem ipsum dolor sit amet consectetur</p>
                <button className="btn" onClick={this.onClickedChallenges}>
                  Ver desafios
                </button>
              </div>
              <div className={styles.headerCol2}>
                <img src={iconTechnologies1} alt="Tecnologias para Aprendizagem" />
              </div>
            </div>
          </div>
        </header>
        <div className={styles.whatItIs}>
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <h2>O que é?</h2>
              <p>A orientação metodológica apresentada toma por base a concretização da “espiral de aprendizagem”, explicitada no Currículo da Cidade de Tecnologias para Aprendizagem, que destaca, como um dos grandes ganhos propiciados pela adoção das tecnologias digitais para aprendizagem, a possibilidade desses ciclos de ações encadeadas serem enriquecidos, ampliados e aprofundados a partir de estratégias pedagógicas específicas mediadas por tecnologias de informação e comunicação.</p>
            </div>
          </div>
        </div>
        <div className={styles.axes}>
          <h2>Eixos</h2>
          <div className="row">
            <div className="col-sm-12 col-md-4">
              <img src={iconProgramming} alt="Programação" />
              <h3>Programação</h3>
              <p>A intencionalidade da compreensão da lógica do pensamento computacional e do desenvolvimento da linguagem de programação como possibilidades de expressão e participação na sociedade</p>
            </div>
            <div className="col-sm-12 col-md-4">
              <img src={iconLiteracy} alt="Letramento digital" />
              <h3>Letramento digital</h3>
              <p>A interação responsável, ética e crítica nos meios tecnológicos, envolvendo as práticas sociais</p>
            </div>
            <div className="col-sm-12 col-md-4">
              <img src={iconTechnologies} alt="Tecnologias de Informação e Comunicação" />
              <h3>Tecnologias de Informação e Comunicação</h3>
              <p>A utilização dos recursos digitais disponíveis com a finalidade de informar e comunicar socialmente</p>
            </div>
          </div>
        </div>
        <div className={styles.methodologies}>
          <div className="container">
            <h2>Metodologias</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam varius rutrum odio in laoreet.</p>
            <div className="row">
              {methodologyItems}
            </div>
          </div>
        </div>
        <div className={styles.objectives}>
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <h2>Objetivos de Aprendizagem</h2>
              <p>No Currículo da Cidade, os objetivos de aprendizagem e desenvolvimento orientam-se pela Educação Integral a partir da matriz de saberes e indicam o que os estudantes devem alcançar a cada ano como resultado das experiências de ensino e de aprendizagem intencionalmente previstas para esse fim.</p>
              <NavLink className="btn" to="/objetivos-de-aprendizagem">
                Explore e encontre sequências
              </NavLink>
            </div>
          </div>
        </div>
        <section className={styles.challenges}>
          <div className="container">
            <Element name="desafios" />
            <h2>Desafios</h2>
            <div className="row">
              {challengeItems}
            </div>
            <div className={styles.center}>
              <button className={styles.btnChallenges} onClick={this.onClickedLoadChallenges}>
                Ver desafios encerrados
              </button>
            </div>
          </div>
        </section>
      </Page>
    );
  }
}

Technologies.propTypes = {
  methodologies: PropTypes.array.isRequired,
  challenges: PropTypes.array.isRequired,
};

Technologies.defaultProps = {
  methodologies: [
    {
      image: iconProject,
      slug: 'projeto',
      title: 'Projeto',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam varius rutrum odio in laoreet. Maecenas quis fringilla nibh. Vestibulum consectetur, odio eget faucibus faucibus, tellus enim scelerisque odio, nec aliquam nibh ipsum sit amet tellus. Aenean semper faucibus quam, in porta metus.',
    },
    {
      image: iconInvestigation,
      slug: 'investigacao',
      title: 'Investigação',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam varius rutrum odio in laoreet. Maecenas quis fringilla nibh. Vestibulum consectetur, odio eget faucibus faucibus, tellus enim scelerisque odio, nec aliquam nibh ipsum sit amet tellus. Aenean semper faucibus quam, in porta metus.',
    },
    {
      image: iconGames,
      slug: 'jogos',
      title: 'Jogos',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam varius rutrum odio in laoreet. Maecenas quis fringilla nibh. Vestibulum consectetur, odio eget faucibus faucibus, tellus enim scelerisque odio, nec aliquam nibh ipsum sit amet tellus. Aenean semper faucibus quam, in porta metus.',
    },
    {
      image: iconDoAndRedo,
      slug: 'fazer-e-refazer',
      title: 'Fazer e refazer',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam varius rutrum odio in laoreet. Maecenas quis fringilla nibh. Vestibulum consectetur, odio eget faucibus faucibus, tellus enim scelerisque odio, nec aliquam nibh ipsum sit amet tellus. Aenean semper faucibus quam, in porta metus.',
    },
  ],
  challenges: [
    {},
    {},
    {},
  ],
};

export default Technologies;