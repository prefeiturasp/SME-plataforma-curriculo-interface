import React from 'react';
import PropTypes from 'prop-types';
import iconStar from 'images/icons/star.png';
import iconStarActive from 'images/icons/starActive.png';
import styles from './Question.scss';

class Question extends React.PureComponent {
  state = {
    value: 0,
  };

  onClickedStar = value => {
    return () => {
      this.props.onChange(this.props.id, value);
      this.setState({ value });
    }
  };

  render() {
    const { title } = this.props;

    const stars = [1, 2, 3, 4, 5].map(i => {
      const icon = i <= this.state.value ? iconStarActive : iconStar;
      return (
        <button key={i} onClick={this.onClickedStar(i)}>
          <img src={icon} alt={i} />
        </button>
      );
    });

    return (
      <div className={styles.wrapper}>
        <p>{title}</p>
        <div className={styles.stars}>{stars}</div>
      </div>
    );
  }
}

Question.propTypes = {
  onChange: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default Question;
