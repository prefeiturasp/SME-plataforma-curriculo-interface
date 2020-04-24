import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { API_URL } from 'data/constants';
import styles from './BigPreview.scss';

class BigPreview extends Component {
  render() {
    const { data, label } = this.props;

    const image =
      data.image_attributes && data.image_attributes.default_url ? (
        <img
          className={styles.image}
          src={API_URL + data.image_attributes.default_url}
          srcSet={`${API_URL}${
            data.image_attributes.large.url
          }, ${API_URL}${data.image_attributes.extra_large.url} 2x`}
          alt={data.title}
        />
      ) : null;

    return (
      <div className={styles.wrapper}>
        {image}
        <p>{label}</p>
        <h1>{data.title}</h1>
      </div>
    );
  }
}

BigPreview.propTypes = {
  data: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
};

BigPreview.defaultProps = {
  label: 'Sequência de atividades',
};

export default BigPreview;
