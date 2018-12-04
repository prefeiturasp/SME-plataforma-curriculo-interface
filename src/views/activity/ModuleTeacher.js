import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ModuleTeacher.scss';

class ModuleTeacher extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <h4>Professor(a):</h4>
        <p>Apresentar a história de Beethoven e possibilitar a escuta de algumas de suas composições, pode enriquecer essa contextualização, além de ampliar o repertório musical das crianças. Há alguns vídeos na internet que, além de possibilitarem a escuta de trechos de composições, abordam aspectos da biografia de Beethoven, tais como:</p>
        <p>Durante o próximo exercício que é a observação das imagens é importante que você interaja com os(as) estudantes, buscando que eles(as) descrevam cada uma delas. Além disso, poderá questioná-los(las) sobre quais tipos de sons podem ser presenciados em cada uma das situações.</p>
      </div>
    );
  }
}

export default ModuleTeacher;
