import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './Avatar.scss';

class Avatar extends React.PureComponent {
  render() {
    const { nickname, photo, size } = this.props;

    const letter = nickname.length ? nickname.charAt(0).toUpperCase() : '';

    const contents = photo ? (
      <img
        className={styles.image}
        src={photo}
        alt={nickname}
      />
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

const mapStateToProps = state => {
  return {
    nickname: state.ProfileReducer.nickname,
  }
};

export default connect(mapStateToProps)(Avatar);
