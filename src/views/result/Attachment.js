import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { API_URL } from 'data/constants';
import formatFileSize from 'utils/formatFileSize';
import iconClip from 'images/icons/clip.svg';
import styles from './Attachment.scss';

class Attachment extends Component {
  render() {
    const { data } = this.props;
    const { name, size, url } = data;
    
    const formattedSize = formatFileSize(size);

    return (
      <a href={API_URL + url} className={styles.wrapper} aria-label={name} target="_blank" rel="noopener noreferrer">
        <div className={styles.icon}>
          <img src={iconClip} alt="Anexo" />
        </div>
        <div>
          <div className={styles.name}>{name}</div>
          <div className={styles.size}>{formattedSize}</div>
        </div>
      </a>
    );
  }
}

Attachment.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Attachment;
