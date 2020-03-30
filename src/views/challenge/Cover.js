import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Chip from 'components/objects/Chip';
import styles from 'views/sequence/Cover.scss';
import { API_URL } from 'data/constants';

const component = {
  color: '#008080',
  name: 'Tecnologias de Aprendizagem',
};

class Cover extends Component {
  render() {
    const { data } = this.props;

    const image = data.image_attributes.default_url ? (
      <img
        className={styles.image}
        src={API_URL + data.image_attributes.default_url}
        srcSet={`${API_URL}${data.image_attributes.large.url}, ${API_URL}${
          data.image_attributes.extra_large.url
        } 2x`}
        alt={data.title}
      />
    ) : null;

    const classes = image
      ? [styles.wrapper, styles.withImage]
      : [styles.wrapper];
    
    return (
      <div className={classes.join(' ')}>
        {image}
        <div className={styles.overlay} />
        <div className={styles.list}>
          <Chip data={component} />
        </div>
      </div>
    );
  }
}

Cover.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Cover;
