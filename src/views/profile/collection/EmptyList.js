import React from 'react';
import iconCollection from './collection.svg';
import styles from './EmptyList.scss';

class EmptyList extends React.PureComponent {
  render() {
    return (
      <section className={styles.wrapper}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3 col-lg-4 offset-lg-4">
              <img src={iconCollection} alt="Coleção" />
              <h3>Sua coleção está vazia</h3>
              <p>
                Salve sequências ao acessá-las clicando no ícone do marcador de livro.
              </p>
              <button className="btn">Buscar sequências</button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default EmptyList;
