import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { API_URL } from 'data/constants';
import styles from './Avatar.scss';

class Avatar extends React.PureComponent {
  render() {
    const { nickname, photo, size } = this.props;

    const letter = nickname.length ? nickname.charAt(0).toUpperCase() : '';

    const contents = photo ? (
      <img className={styles.image} src={API_URL + photo} alt={nickname} />
    ) : (
      <div
        className={styles.letter}
        style={{
          fontSize: size * 0.3,
        }}
      >
        {letter}
      </div>
    );

    return (
      <div
        className={styles.wrapper}
        style={{
          width: this.props.size,
          height: this.props.size,
        }}
      >
        {contents}
      </div>
    );
  }
}

Avatar.propTypes = {
  nickname: PropTypes.string.isRequired,
  photo: PropTypes.string,
  size: PropTypes.number.isRequired,
};

Avatar.defaultProps = {
  size: 35,
};

export default Avatar;
