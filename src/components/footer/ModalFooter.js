import React from 'react';
import PropTypes from 'prop-types';
import styles from './ModalFooter.scss';

class ModalFooter extends React.PureComponent {
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

ModalFooter.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ModalFooter;
