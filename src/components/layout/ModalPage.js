import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ModalPage.scss';

class ModalPage extends Component {
  render() {
    return (
      <div
        className={styles.wrapper}
        id={this.props.id}
      >
        {this.props.children}
      </div>
    );
  }
}

ModalPage.propTypes = {
  id: PropTypes.string,
};

export default ModalPage;
