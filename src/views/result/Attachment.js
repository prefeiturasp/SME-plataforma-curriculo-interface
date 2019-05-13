import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { API_URL } from 'data/constants';
import iconClip from 'images/icons/clip.svg';
import styles from './Attachment.scss';

class Attachment extends Component {
  render() {
    const { data } = this.props;
    
    return (
      <a href={API_URL + data.url} className={styles.wrapper} aria-label={data.name} target="_blank">
        <div className={styles.icon}>
          <img src={iconClip} alt="Anexo" />
        </div>
        <div>
          <div className={styles.name}>{data.name}</div>
          <div className={styles.size}>10 MB</div>
        </div>
      </a>
    );
  }
}

Attachment.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Attachment;
