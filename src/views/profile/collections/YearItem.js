import React from 'react';
import PropTypes from 'prop-types';
import styles from './YearItem.scss';

class YearItem extends React.PureComponent {
  render() {
    return (
      <div
        className={styles.wrapper}
        style={{
          backgroundColor: this.props.color,
        }}
      >
        {this.props.year}
      </div>
    );
  }
}

YearItem.propTypes = {
  color: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
};

export default YearItem;
