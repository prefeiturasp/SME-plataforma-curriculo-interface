import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Page from 'components/layout/Page';
import iconClip from 'images/icons/clip.svg';
import imgCurriculum from 'views/curriculum/curriculum.jpg';
import styles from './Methodology.scss';

class MethodologyProject extends Component {
  render() {
    const challenges = [];

    return (
      <Page>
        <header className={styles.header}>
          <div className={styles.image}>
          </div>
          <h1>Projeto</h1>
          <h2>Entenda como alcançar uma aprendizagem significativa ao utilizar este método como base</h2>
        </header>
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <p>Acesse mais informações sobre esta metodologia.</p>
              <a className="btn" href="#">
                Baixar arquivo
                <img src={iconClip} alt="Baixar arquivo" />
              </a>
            </div>
          </div>
        </div>
        <section className={styles.others}>
          <div className="container">
            <div className="row">
            </div>
          </div>
        </section>
        <section className={styles.challenges}>
          <div className="container">
            <div className="row">
              <h3>Desafios</h3>
              {challenges}
            </div>
          </div>
        </section>
      </Page>
    );
  }
}

export default MethodologyProject;
