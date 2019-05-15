import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { API_URL } from 'data/constants';
import styles from './Step.scss';

class Step extends Component {
  render() {
    const { data, step } = this.props;
    const { title, description } = data;

    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className="row">
            <div className="col-sm-12 col-md-10 offset-md-1">
              <h3>{title}</h3>
              <div className={styles.image}>
                <img src={API_URL + data.image_attributes.default_url} alt={title} />
                <div>{step}</div>
              </div>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Step.propTypes = {
  data: PropTypes.object.isRequired,
  step: PropTypes.number.isRequired,
};

export default Step;
