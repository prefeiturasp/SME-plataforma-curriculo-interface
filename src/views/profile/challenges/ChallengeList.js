import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Challenge from './Challenge';
import styles from 'views/profile/collections/CollectionList.scss';
import styles1 from './ChallengeList.scss';

class ChallengeList extends Component {
  render() {
    const items = this.props.items.map((item, i) => {
      return (
        <Challenge
          key={i}
          id={item.id}
          component={item.main_curricular_component}
          hasPerformed={false}
          image={item.image_attributes}
          slug={item.slug}
          title={item.title}
        />
      );
    });

    const message = items.length ? null : (
      <div className={styles1.message}>Salve desafios para acessá-los mais tarde.</div>
    );

    const word = items.length === 1 ? 'desafio salvo' : 'desafios salvos';
    const btnLabel = items.length ? 'Buscar mais desafios' : 'Buscar desafios';

    return (
      <section className={styles.wrapper}>
        <br></br>
        <br></br>
        <div className="container">
          <h2>Meus Desafios</h2>
          <div className={styles.rowTitle}>
            <h3>{items.length} {word}</h3>
            <NavLink className="btnSmall" to="/tecnologias-para-aprendizagem">
              {btnLabel}
            </NavLink>
          </div>
          <div className="row">
            {items}
            {message}
          </div>
          <div className={styles.rowBelow}>
            <NavLink className="btnFullWidth" to="/tecnologias-para-aprendizagem">
              {btnLabel}
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
