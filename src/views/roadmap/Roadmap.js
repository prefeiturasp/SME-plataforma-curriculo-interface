import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import RoadmapItem from './RoadmapItem';
import styles from './Roadmap.css';

class Roadmap extends Component {
  render() {
    const items = this.props.data.map((item, i) => {
      return (
        <RoadmapItem
          key={i}
          index={i}
          data={item} />
      );
    });

    return (
      <section className={styles.wrapper}>
        <header className={styles.header}>
          <div className="col-md-8 offset-md-2">
            <h1>O que vem por aí</h1>
            <p>O projeto do currículo digital da cidade está em constante evolução. Veja aqui o que já temos planejado para esta plataforma.</p>
          </div>
        </header>
        <hr />
        <div className="container">
          <div className="row">
            <ul className={styles.list}>
              {items}
            </ul>
          </div>
        </div>
        <hr />
        <footer className={styles.footer}>
          <NavLink to="/sequencias" class={styles.button}>
            Encontre sequências de atividades
          </NavLink>
        </footer>
      </section>
    );
  }
}

Roadmap.propTypes = {
  data: PropTypes.array,
};

const mapStateToProps = state => {
  return {
    data: state.RoadmapReducer.items,
  };
};

export default connect(mapStateToProps)(Roadmap);
