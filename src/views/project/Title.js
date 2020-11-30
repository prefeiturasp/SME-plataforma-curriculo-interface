import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Title.scss';

class Title extends Component {

  render() {
    const { text, project } = this.props;

    return (
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <p>{text}</p>
          <h1>{project.title}</h1>
        </div>
      </div>
    );
  }
}

Title.propTypes = {
  text: PropTypes.string.isRequired,
  project: PropTypes.object.isRequired,
};

export default Title;
