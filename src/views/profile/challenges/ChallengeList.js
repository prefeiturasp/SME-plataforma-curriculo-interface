import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Challenge from './Challenge';
import createModalLink from 'utils/createModalLink';
import styles from 'views/profile/collections/CollectionList.scss';

class ChallengeList extends Component {
  render() {
    const items = this.props.items.map((item, i) => {
      return (
        <Challenge
          key={i}
          id={item.id}
          component={item.main_curricular_component}
          hasPerformed={item.performeds_status.performed}
          image={item.image_attributes}
          slug={item.slug}
          title={item.title}
        />
      );
    });

    const word = items.length === 1 ? 'desafio salvo' : 'desafios salvos';
    const link = createModalLink('/perfil/criar-colecao');

    return (
      <section className={styles.wrapper}>
        <div className="container">
          <div className={styles.rowTitle}>
            <h3>{items.length} {word}</h3>
          </div>
          <div className="row">{items}</div>
          <div className={styles.rowBelow}>
            <NavLink className="btnFullWidth" to={link}>
              Buscar mais desafios
            </NavLink>
          </div>
        </div>
      </section>
    );
  }
}

ChallengeList.propTypes = {
  items: PropTypes.array.isRequired,
};

export default ChallengeList;
