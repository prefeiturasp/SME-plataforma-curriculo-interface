import React, { Component } from 'react';
import styles from './Notification.scss';

class Notification extends Component {
  onClickedNo = () => {

  }

  onClickedYes = () => {

  }

  render() {
    return (
      <div className={styles.wrapper}>
        <p>Você completou 3 sequências de atividades recentemente. Avalie agora e nos ajude a construir novos conteúdos.</p>
        <div className={styles.buttons}>
          <button onClick={this.onClickedNo}>
            Agora não
          </button>
          <button onClick={this.onClickedYes}>
            Avaliar sequência
          </button>
        </div>
      </div>
    );
  }
}

export default Notification;
