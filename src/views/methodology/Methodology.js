import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Challenge from 'views/technologies/Challenge';
import Page from 'components/layout/Page';
import arrowDownGreen from 'images/arrows/downGreen.svg';
import iconClip from 'images/icons/clip.svg';
import iconInvestigation from 'views/technologies/images/investigacao.svg';
import imgCurriculum from 'views/curriculum/curriculum.jpg';
import styles from './Methodology.scss';
import styles1 from 'views/technologies/Technologies.scss';

class Methodology extends Component {
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
                <img src={iconInvestigation} alt="Investigação" className={styles.illustration} />
                <h1>Investigação</h1>
                <p>Entenda como alcançar uma aprendizagem significativa ao utilizar este método como base</p>
                <img src={arrowDownGreen} alt="Ver mais" />
              </div>
            </div>
          </div>
        </header>
        <div className={styles.contents}>
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam varius rutrum odio in laoreet. Maecenas quis fringilla nibh. Vestibulum consectetur, odio eget faucibus faucibus, tellus enim scelerisque odio, nec aliquam nibh ipsum sit amet tellus. Aenean semper faucibus quam, in porta metus bibendum sed. Proin a dui tortor.</p>
              <p>Cras lorem turpis, rhoncus eu elit ut, sollicitudin laoreet sapien. In et libero malesuada, placerat risus vel, tristique nibh. Integer orci magna, vehicula sed ullamcorper vitae, venenatis semper purus.</p>
              <p>Curabitur iaculis lacinia condimentum. Pellentesque rhoncus, erat et imperdiet consequat, libero mi egestas dolor, nec dignissim metus arcu sed arcu. Nunc nec enim in nisi iaculis consequat quis sed turpis.</p>
              <p>Mauris facilisis pharetra lacus. Proin quam lacus, iaculis dictum lobortis quis, tincidunt et felis. Morbi pulvinar vulputate leo, in iaculis purus interdum ac. Aliquam bibendum nisi sed euismod fringilla. Vivamus mollis ullamcorper auctor. In hac habitasse platea dictumst. Nam id lectus fermentum leo aliquet tempus eget a metus. Ut sed ligula tincidunt turpis laoreet convallis et a quam. Suspendisse nec molestie massa, sit amet euismod elit. Maecenas eleifend ex a orci euismod congue.</p>
              <img src={imgCurriculum} alt="" />
            </div>
          </div>
        </div>
        <hr />
        <div className={styles.quote}>
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <p>Cras lorem turpis, rhoncus eu elit ut, sollicitudin laoreet sapien. In et libero malesuada, placerat risus vel, tristique nibh. Integer orci magna, vehicula sed ullamcorper vitae, venenatis semper purus. Aenean semper quam, in porta metus bibendum sed. Proin a dui tortor.</p>
            </div>
          </div>
        </div>
        <hr />
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

Methodology.propTypes = {
  challenges: PropTypes.array.isRequired,
};

Methodology.defaultProps = {
  challenges: [
    {},
    {},
    {},
  ],
};

export default Methodology;
