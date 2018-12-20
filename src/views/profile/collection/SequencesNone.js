import React from 'react';
import iconCollection from './collection.svg';
import styles from './SequencesNone.scss';

class SequencesNone extends React.PureComponent {
  render() {
    return (
      <section className={styles.wrapper}>
        <img
          src={iconCollection}
          alt="Coleção"
        />
        <h3>Sua coleção está vazia</h3>
        <p>Salve sequências ao acessá-las clicando no ícone do marcador de livro.</p>
        <button className="btn">
          Buscar sequências
        </button>
      </section>
    );
  }
}

export default SequencesNone;
