import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ModuleStudent.scss';

class ModuleStudent extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <h4>Para o(a) estudante:</h4>
        <p>Essa atividade tem como abordagens temáticas as práticas e processos de investigação, propiciando a utilização de diferentes ferramentas e recursos para propor as estratégias e hipóteses para resolver as situações observadas. A prática científica tem como plano de trabalho a transformação de curiosidades em ações de investigação. Ciclo investigativo: conceitualização e investigação.</p>
      </div>
    );
  }
}

export default ModuleStudent;
