import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Collection from './Collection';
import createModalLink from 'utils/createModalLink';
import iconPlus from 'images/icons/plus.svg';
import styles from './CollectionList.scss';

class CollectionList extends Component {
  render() {
    const items = this.props.items.map((item, i) => {
      return <Collection key={i} {...item} />;
    });

    const link = createModalLink('/perfil/criar-colecao');

    return (
      <section className={styles.wrapper}>
        <div className="container">
          <div className={styles.rowTitle}>
            <h3>Coleções</h3>
            <NavLink className="btnSmall" to={link}>
              Criar coleção
              <img src={iconPlus} alt="Criar coleção" />
            </NavLink>
          </div>
          <div className="row">{items}</div>
          <div className={styles.rowBelow}>
            <NavLink className="btnFullWidth" to={link}>
              Criar uma nova coleção
              <img src={iconPlus} alt="Criar coleção" />
            </NavLink>
          </div>
        </div>
      </section>
    );
  }
}

CollectionList.propTypes = {
  items: PropTypes.array.isRequired,
};

export default CollectionList;
