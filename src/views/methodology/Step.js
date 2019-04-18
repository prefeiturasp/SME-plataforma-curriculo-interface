import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Step.scss';

class Step extends Component {
  render() {
    const { image, step, title, text } = this.props.data;

    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.image}>
            <img src={image} alt={title} />
            <div>{step}</div>
          </div>
          <div className={styles.text}>
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        </div>
      </div>
    );
  }
}

Step.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Step;
