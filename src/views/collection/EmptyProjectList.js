import React from 'react';
import { NavLink } from 'react-router-dom';
import iconCollection from './collection.svg';
import styles from 'views/profile/collections/EmptyList.scss';

class EmptyProjectList extends React.PureComponent {
  render() {
    return (
      <section className={styles.wrapper}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3 col-lg-4 offset-lg-4">
              <img src={iconCollection} alt="Coleção" />
              <h3>Sua coleção não tem projetos</h3>
              <p>
                Salve projetos ao acessá-las clicando no ícone do marcador de
                livro.
              </p>
              <NavLink className="btn" to="/projetos">
                Buscar projetos
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default EmptyProjectList;
