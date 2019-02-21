import React, { Component } from 'react';
import AnimateHeight from 'react-animate-height';
import styles from './Notification.scss';

class Notification extends Component {
  state = {
    isExpanded: true,
  };

  onClickedNo = () => {
    this.setState({
      isExpanded: false,
    });
  }

  onClickedYes = () => {

  }

  render() {
    const height = this.state.isExpanded ? 'auto' : 0;

    return (
      <AnimateHeight height={height}>
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
      </AnimateHeight>
    );
  }
}

export default Notification;
