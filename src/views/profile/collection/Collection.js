import React, { Component } from 'react';
import SequencesList from './SequencesList';
import SequencesNone from './SequencesNone';
import imgPlaceholder from 'images/placeholder.jpg';
import styles from './Collection.scss';

class Collection extends Component {
  render() {
    const sequences = [
      {
        name: 'Os Movimentos do nosso Planeta',
        component: 'Ciências Naturais',
        componentColor: '#70b279',
        isCompleted: true,
        image: imgPlaceholder,
        slug: 'os-movimentos-do-nosso-planeta',
      },
      {
        name: 'Animais de estimação',
        component: 'Matemática',
        componentColor: '#ff007f',
        image: imgPlaceholder,
        slug: 'animais-de-estimacao',
      },
    ];

    const name = 'Planeta';
    const count = 1;
    const word = count > 0 ? 'turmas' : 'turma';

    const contents = sequences.length > 0
      ? <SequencesList items={sequences} />
      : <SequencesNone />;

    return (
      <section className={styles.wrapper}>
        <header className={styles.header}>
          <h2>
            {name}
          </h2>
          <p>
            {count} {word}
          </p>
        </header>
        {contents}
      </section>
    );
  }
}

Collection.propTypes = {
};

export default Collection;
