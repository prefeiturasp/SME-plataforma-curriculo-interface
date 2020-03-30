import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  disableBodyScroll,
  clearAllBodyScrollLocks,
  enableBodyScroll,
} from 'body-scroll-lock';
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
    const { children, isFixed, isSmall } = this.props;
    const classes = [styles.modal];
    
    if (isFixed) {
      classes.push(styles.isFixed);
    }

    if (isSmall) {
      classes.push(styles.isSmall);
    }

    return (
      <div id="desktopModal" className={classes.join(' ')}>
        {children}
      </div>
    );
  }
}

DesktopModal.propTypes = {
  isFixed: PropTypes.bool,
  isSmall: PropTypes.bool,
};

export default withWidth(DesktopModal);
