import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  disableBodyScroll,
  clearAllBodyScrollLocks,
  enableBodyScroll,
} from 'body-scroll-lock';
import { withRouter } from 'react-router';
import withWidth from 'components/hoc/withWidth';
import styles from './DesktopModal.scss';

class DesktopModal extends Component {
  target = null;

  componentDidMount() {
    this.target = document.querySelector('#desktopModal');
  }

  componentDidUpdate(prevProps) {
    if (this.props.windowWidth !== prevProps.windowWidth) {
      if (this.props.windowWidth < 768) {
        enableBodyScroll(this.target);
      } else {
        disableBodyScroll(this.target);
      }
    }
  }

  componentWillUnmount() {
    clearAllBodyScrollLocks();
  }

  render() {
    const classes = this.props.isSmall
      ? [styles.modal, styles.isSmall]
      : [styles.modal];

    return (
      <div id="desktopModal" className={classes.join(' ')}>
        {this.props.children}
      </div>
    );
  }
}

DesktopModal.propTypes = {
  isSmall: PropTypes.bool,
};

export default withRouter(withWidth(DesktopModal));
