import React from 'react';
import iconCollections from '../../../images/iconCollections.svg';
import styles from './CollectionsNone.scss';

class CollectionsNone extends React.PureComponent {
  render() {
    return (
      <section className={styles.wrapper}>
        <img
          src={iconCollections}
          alt="Coleções"
        />
        <h3>Você ainda não possui coleções</h3>
        <p>Crie uma nova coleção para salvar sequências de atividades e acessá-las mais tarde.</p>
        <button className="btn">
          Criar coleção
        </button>
      </section>
    );
  }
}

export default CollectionsNone;
