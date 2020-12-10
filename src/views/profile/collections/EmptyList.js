import React from 'react';
import { NavLink } from 'react-router-dom';
import createModalLink from 'utils/createModalLink';
import iconCollections from './collections.svg';
import styles from './EmptyList.scss';

class EmptyList extends React.PureComponent {
  render() {
    const link = createModalLink('/perfil/criar-colecao');

    return (
      <section className={styles.wrapper}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3 col-lg-4 offset-lg-4">
              <img src={iconCollections} alt="Coleções" />
              <h3>Você ainda não possui coleções</h3>
              <p>
                Crie uma nova coleção para salvar sequências de atividades, projetos do TCA e
                acessá-los mais tarde.
              </p>
              <NavLink className="btnSmall" to={link}>
                Criar coleção
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default EmptyList;
