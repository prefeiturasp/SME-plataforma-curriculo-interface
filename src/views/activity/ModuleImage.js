import React, { Component } from 'react';
import PropTypes from 'prop-types';
import imgHome from '../../images/imgHome.jpg';
import styles from './ModuleImage.scss';

class ModuleImage extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <img src={imgHome} alt="Lorem ipsum" />
        <p className="source">Fonte: Adaptado de <em>A Surdez de Beethoven, o Desafio de um Gênio</em></p>
      </div>
    );
  }
}

export default ModuleImage;
