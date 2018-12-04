import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ModuleExercise.scss';

class ModuleExercise extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <h5>Roda de conversa</h5>
        <p>Converse com seus colegas sobre como vocês imaginam ser possível alguém que não escuta poder compor e tocar músicas.</p>
        <ol>
          <li>Desenhe e explique, em seu caderno, como você acha que os sons são produzidos e percebidos pelas pessoas que escutam.</li>
          <li>Desenhe e explique como você acha que Beethoven conseguia perceber o som de suas composições ao piano.</li>
        </ol>
      </div>
    );
  }
}

export default ModuleExercise;
