import React from 'react';
import iconLoading from 'images/icon/loading.png';
import styles from './Loading.css';

class Loading extends React.PureComponent {
  render() {
    return (
      <img
        className={styles.wrapper}
        src={iconLoading}
        alt="Carregando" />
    );
  }
}

export default Loading;
