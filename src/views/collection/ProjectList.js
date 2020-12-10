import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Project from './Project';
import styles from 'views/profile/collections/CollectionList.scss';

class ProjectList extends Component {
  render() {
    const count = this.props.items.length;
    const word = count > 1 ? 'projetos' : 'projeto';
    const items = this.props.items.map((item, i) => {
      return (
        <Project
          key={i}
          id={item.id}
          collectionId={this.props.collectionId}
          curricularComponents={item.curricular_components}
          image={item.cover_image}
          slug={item.slug}
          title={item.title}
        />
      );
    });

    return (
      <section className={styles.wrapper}>
        <div className="container">
          <div className={styles.rowTitle}>
            <h3>
              {count} {word}
            </h3>
            <NavLink className="btnSmall" to="/projetos">
              Buscar mais projetos
            </NavLink>
          </div>
          <div className="row">{items}</div>
          <div className={styles.rowBelow}>
            <NavLink className="btnFullWidth" to="/projetos">
              Buscar mais projetos
            </NavLink>
          </div>
        </div>
      </section>
    );
  }
}

ProjectList.propTypes = {
  collectionId: PropTypes.number.isRequired,
  items: PropTypes.array.isRequired,
};

export default ProjectList;
