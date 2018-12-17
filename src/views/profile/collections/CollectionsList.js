import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CollectionItem from './CollectionItem';
import styles from './CollectionsList.scss';

class CollectionsList extends Component {
  render() {
    const items = this.props.items.map((item, i) => {
      return (
        <CollectionItem
          key={i}
          id={item.id}
          title={item.title}
          sequences={item.sequences}
          classrooms={item.classrooms}
          years={item.years}
        />
      );
    });

    return (
      <section className={styles.wrapper}>
        <h3>Coleções</h3>
        {items}
        <button className="btnFullWidth">Criar uma nova coleção</button>
      </section>
    );
  }
}

CollectionsList.propTypes = {
  items: PropTypes.array.isRequired,
};

export default CollectionsList;
