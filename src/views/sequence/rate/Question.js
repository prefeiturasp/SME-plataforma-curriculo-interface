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
    };
  };

  componentDidMount() {
    if (this.props.value) {
      this.setState({ value: this.props.value });
    }
  }

  render() {
    const { description, isDisabled } = this.props;

    const stars = [1, 2, 3, 4, 5].map(i => {
      const icon = i <= this.state.value ? iconStarActive : iconStar;
      const onClick = isDisabled ? null : this.onClickedStar(i);
      return (
        <button key={i} onClick={onClick}>
          <img src={icon} alt={i} />
        </button>
      );
    });

    return (
      <div className={styles.wrapper}>
        <p>{description}</p>
        <div className={styles.stars}>{stars}</div>
      </div>
    );
  }
}

Question.propTypes = {
  onChange: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
  value: PropTypes.number,
};

Question.defaultProps = {
  isDisabled: false,
};

export default Question;
