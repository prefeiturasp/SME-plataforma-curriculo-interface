import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Chip from 'components/objects/Chip';
import styles from './Cover.scss';
import logoPrefecture from './images/prefecture.jpg';

class Cover extends Component {

  render() {
    const { project } = this.props;

    const image = project.cover_image ? (
      <img
        className={styles.image}
        src={project.cover_image}
        alt={project.title}
      />
  ) : (
      <img
        className={styles.image}
        src={logoPrefecture}
        alt={project.title}
      />
  );

    const classes = image
      ? [styles.wrapper, styles.withImage]
      : [styles.wrapper];


    let years = null;
    if (project.years) {
      years = project.years.map((year, idx) => {
        return <Chip key={idx} data={{ name: year.name }} />
      });
    }

    let curricularComponents = null;
    if (project.curricular_components) {
      curricularComponents = project.curricular_components.map((curricularComponent, idx) => {
        return <Chip key={idx} data={{ name: curricularComponent.name, color: curricularComponent.color}} />
      });
    }

    return (
      <div className={classes.join(' ')}>
        {image}
        <div className={styles.overlay} />
        <div className={styles.list}>
          {years}
          {curricularComponents}
        </div>
      </div>
    );
  }
}

Cover.propTypes = {
  project: PropTypes.object.isRequired,
};

export default Cover;
