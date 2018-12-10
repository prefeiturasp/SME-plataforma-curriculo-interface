import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SequenceItem from './SequenceItem';
import styles from './SequencesList.scss';

class SequencesList extends Component {
  render() {
    const count = this.props.items.length;
    const word = count > 0 ? 'sequências' : 'sequência';
    const items = this.props.items.map((item, i) => {
      return (
        <SequenceItem
          key={i}
          name={item.name}
          component={item.component}
          componentColor={item.componentColor}
          isCompleted={item.isCompleted}
          image={item.image}
          slug={item.slug}
        />
      );
    });

    return (
      <section className={styles.wrapper}>
        <h3>
          {count} {word}
        </h3>
        {items}
        <button className="btnFullWidth">
          Buscar mais sequências
        </button>
      </section>
    );
  }
}

SequencesList.propTypes = {
  items: PropTypes.array.isRequired,
};

export default SequencesList;
