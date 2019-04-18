import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Challenge from 'views/technologies/Challenge';
import Contents from './Contents';
import OtherMethodology from './OtherMethodology';
import Page from 'components/layout/Page';
import ProjectContents from './ProjectContents';
import arrowDownGreen from 'images/arrows/downGreen.svg';
import iconDoAndRedo from 'images/illustrations/do-and-redo.svg';
import iconGames from 'images/illustrations/games.svg';
import iconInvestigation from 'images/illustrations/investigation.svg';
import iconProject from 'images/illustrations/project.svg';
import styles from './Methodology.scss';
import styles1 from 'views/technologies/Technologies.scss';

class Methodology extends Component {
  componentDidUpdate(prevProps) {
    if (prevProps.match.params.slug !== this.props.match.params.slug) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    const { methodologies, challenges } = this.props;
    const slug = this.props.match.params.slug;

    const data = methodologies.find(item => item.slug === slug);
    const { image, title } = data;

    const contents = slug === 'projeto' ? <ProjectContents /> : <Contents slug={slug} />;

    const others = methodologies.filter(item => item.slug !== slug);
    const otherItems = others.map((item, i) => {
      return <OtherMethodology key={i} data={item} />;
    });

    const challengeItems = challenges.map((item, i) => {
      return <Challenge key={i} />;
    });

    return (
      <Page>
        <header className={styles.header}>
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-8 offset-md-2">
                <img src={image} alt={title} className={styles.image} />
                <h1>{title}</h1>
                <p>Entenda como alcançar uma aprendizagem significativa ao utilizar este método como base</p>
                <img src={arrowDownGreen} alt="Ver mais" />
              </div>
            </div>
          </div>
        </header>
        {contents}
        <section className={styles.others}>
          <div className="container">
            <h2>Outras metodologias</h2>
            <div className="row">
              {otherItems}
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
  methodologies: PropTypes.array.isRequired,
  challenges: PropTypes.array.isRequired,
};

Methodology.defaultProps = {
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

export default Methodology;
