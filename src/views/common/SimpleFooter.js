import React from 'react';
import PropTypes from 'prop-types';
import styles from './SimpleFooter.scss';

class SimpleFooter extends React.PureComponent {
  render() {
    return (
      <footer className={styles.wrapper}>
        <button className={styles.button} onClick={this.props.onClick}>
          {this.props.label}
        </button>
      </footer>
    );
  }
}

SimpleFooter.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SimpleFooter;
