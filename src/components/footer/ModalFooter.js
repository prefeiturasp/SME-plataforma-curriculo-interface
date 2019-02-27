import React from 'react';
import PropTypes from 'prop-types';
import Loading from 'components/loading/Loading';
import styles from './ModalFooter.scss';

class ModalFooter extends React.PureComponent {
  render() {
    const { isLoading, label, onClick } = this.props;
    const content = isLoading
      ? <Loading size={24} />
      : label;

    return (
      <footer className={styles.wrapper}>
        <button className={styles.button} onClick={onClick}>
          {content}
        </button>
      </footer>
    );
  }
}

ModalFooter.propTypes = {
  isLoading: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ModalFooter;
