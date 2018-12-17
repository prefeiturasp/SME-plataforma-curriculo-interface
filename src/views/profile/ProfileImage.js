import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProfileImage.scss';

class ProfileImage extends React.PureComponent {
  render() {
    const contents = this.props.photo ? (
      <img
        className={styles.image}
        src={this.props.photo}
        alt={this.props.nickname}
      />
    ) : (
      <div
        className={styles.letter}
        style={{
          fontSize: this.props.size * 0.3,
        }}
      >
        {this.props.nickname.length
          ? this.props.nickname.charAt(0).toUpperCase()
          : ''}
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

ProfileImage.propTypes = {
  nickname: PropTypes.string.isRequired,
  photo: PropTypes.string,
  size: PropTypes.number.isRequired,
};

export default ProfileImage;
