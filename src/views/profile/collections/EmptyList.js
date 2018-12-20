import React from 'react';
import iconCollections from './collections.svg';
import styles from './EmptyList.scss';

class EmptyList extends React.PureComponent {
  render() {
    return (
      <section className={styles.wrapper}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3 col-lg-4 offset-lg-4">
              <img src={iconCollections} alt="Coleções" />
              <h3>Você ainda não possui coleções</h3>
              <p>
                Crie uma nova coleção para salvar sequências de atividades e
                acessá-las mais tarde.
              </p>
              <button className="btn">Criar coleção</button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default EmptyList;
