import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Step.scss';

class Step extends Component {
  render() {
    const { image, step, title, text } = this.props.data;

    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className="row">
            <div className="col-sm-12 col-md-10 offset-md-1">
              <h3>{title}</h3>
              <div className={styles.image}>
                <img src={image} alt={title} />
                <div>{step}</div>
              </div>
              <p>{text}</p>
            </div>
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
