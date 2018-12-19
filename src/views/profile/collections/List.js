import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Collection from './Collection';
import iconPlus from 'images/icons/plus.svg';
import styles from './List.scss';

class List extends Component {
  render() {
    const items = this.props.items.map((item, i) => {
      return (
        <Collection
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
        <div className="container">
          <div className={styles.rowTitle}>
            <h3>Coleções</h3>
            <button className="btnSmall">
              Criar coleção
              <img src={iconPlus} alt="Criar coleção" />
            </button>
          </div>
          <div className="row">
            {items}
          </div>
          <div className={styles.rowBelow}>
            <button className="btnFullWidth">
              Criar uma nova coleção
              <img src={iconPlus} alt="Criar coleção" />
            </button>
          </div>
        </div>
      </section>
    );
  }
}

List.propTypes = {
  items: PropTypes.array.isRequired,
};

export default List;
