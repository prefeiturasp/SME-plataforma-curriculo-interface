import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Challenge from 'views/technologies/Challenge';
import Page from 'components/layout/Page';
import arrowDownGreen from 'images/arrows/downGreen.svg';
import iconClip from 'images/icons/clip.svg';
import iconProject from 'views/technologies/images/projeto.svg';
import styles from './Methodology.scss';
import styles1 from 'views/technologies/Technologies.scss';

class MethodologyProject extends Component {
  render() {
    const { challenges } = this.props;

    const challengeItems = challenges.map((item, i) => {
      return <Challenge key={i} />;
    });

    return (
      <Page>
        <header className={styles.header}>
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-8 offset-md-2">
                <img src={iconProject} alt="Projeto" className={styles.illustration} />
                <h1>Projeto</h1>
                <p>Entenda como alcançar uma aprendizagem significativa ao utilizar este método como base</p>
                <img src={arrowDownGreen} alt="Ver mais" />
              </div>
            </div>
          </div>
        </header>
        <div className={styles.contents}>
          <div className="row">
            <div className="col-md-8 offset-md-2">
              
            </div>
          </div>
        </div>
        <div className={styles.download}>
          <p>Acesse mais informações sobre esta metodologia.</p>
          <a className="btnSmall" href="arquivo.pdf">
            Baixar arquivo
            <img src={iconClip} alt="Baixar arquivo" />
          </a>
        </div>
        <section className={styles.others}>
          <div className="container">
            <div className="row">
            </div>
          </div>
        </section>
        <section className={styles1.challenges}>
          <div className="container">
            <h2>Desafios</h2>
            <div className="row">
              {challengeItems}
            </div>
            <div className={styles1.center}>
              <button className={styles1.btnChallenges} onClick={this.onClickedLoadChallenges}>
                Ver desafios encerrados
              </button>
            </div>
          </div>
        </section>
      </Page>
    );
  }
}

MethodologyProject.propTypes = {
  challenges: PropTypes.array.isRequired,
};

MethodologyProject.defaultProps = {
  challenges: [
    {},
    {},
    {},
  ],
};

export default MethodologyProject;
