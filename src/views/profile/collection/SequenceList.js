import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Sequence from './Sequence';
import styles from 'views/profile/collections/CollectionList.scss';

class SequenceList extends Component {
  render() {
    const count = this.props.items.length;
    const word = count > 1 ? 'sequências' : 'sequência';
    const items = this.props.items.map((item, i) => {
      return (
        <Sequence key={i} collectionId={this.props.collectionId} {...item} />
      );
    });

    return (
      <section className={styles.wrapper}>
        <div className="container">
          <div className={styles.rowTitle}>
            <h3>
              {count} {word}
            </h3>
            <NavLink className="btnSmall" to="/sequencias">
              Buscar mais sequências
            </NavLink>
          </div>
          <div className="row">{items}</div>
          <div className={styles.rowBelow}>
            <NavLink className="btnFullWidth" to="/sequencias">
              Buscar mais sequências
            </NavLink>
          </div>
        </div>
      </section>
    );
  }
}

SequenceList.propTypes = {
  collectionId: PropTypes.number.isRequired,
  items: PropTypes.array.isRequired,
};

export default SequenceList;
