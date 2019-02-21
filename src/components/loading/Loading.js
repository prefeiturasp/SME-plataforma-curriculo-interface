import React from 'react';
import iconLoading from 'images/icons/loading.png';
import styles from './Loading.scss';

class Loading extends React.PureComponent {
  render() {
    return (
      <img className={styles.wrapper} src={iconLoading} alt="Carregando" />
    );
  }
}

export default Loading;
