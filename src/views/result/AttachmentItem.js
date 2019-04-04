import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import iconClip from 'images/icons/clip.svg';
import styles from './AttachmentItem.scss';

class AttachmentItem extends Component {
  render() {
    const { data } = this.props;
    
    return (
      <NavLink to={data.url} className={styles.wrapper} aria-label={data.fileName}>
        <div className={styles.icon}>
          <img src={iconClip} alt="Anexo" />
        </div>
        <div>
          <div className={styles.name}>Projeto.pdf</div>
          <div className={styles.size}>10 MB</div>
        </div>
      </NavLink>
    );
  }
}

AttachmentItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AttachmentItem;
