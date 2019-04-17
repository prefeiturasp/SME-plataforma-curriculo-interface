import React, { Component } from 'react';
import Page from 'components/layout/Page';
import iconClip from 'images/icons/clip.svg';
import imgCurriculum from 'views/curriculum/curriculum.jpg';
import styles from './Methodology.scss';

class Methodology extends Component {
  render() {
    const challenges = [];

    return (
      <Page>
        <header className={styles.header}>
          <div className={styles.image}>
          </div>
          <h1>Investigação</h1>
          <h2>Entenda como alcançar uma aprendizagem significativa ao utilizar este método como base</h2>
        </header>
        <div className="container">
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
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <p>Cras lorem turpis, rhoncus eu elit ut, sollicitudin laoreet sapien. In et libero malesuada, placerat risus vel, tristique nibh. Integer orci magna, vehicula sed ullamcorper vitae, venenatis semper purus. Aenean semper quam, in porta metus bibendum sed. Proin a dui tortor.</p>
            </div>
          </div>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <p>Acesse mais informações sobre esta metodologia.</p>
              <a className="btn" href="arquivo.pdf">
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

export default Methodology;
