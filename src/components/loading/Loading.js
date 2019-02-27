import React from 'react';
import PropTypes from 'prop-types';
import iconLoading from 'images/icons/loading.png';
import styles from './Loading.scss';

class Loading extends React.PureComponent {
  render() {
    return (
      <img
        className={styles.wrapper}
        src={iconLoading}
        width={this.props.size}
        height={this.props.size}
        alt="Carregando"
      />
    );
  }
}

Loading.propTypes = {
  size: PropTypes.number,
};

Loading.defaultProps = {
  size: 56,
};

export default Loading;
