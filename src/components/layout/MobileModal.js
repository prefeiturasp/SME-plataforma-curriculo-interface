import React from 'react';
import PropTypes from 'prop-types';
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock';
import styles from './MobileModal.scss';

class MobileModal extends React.PureComponent {
  target = null;

  componentDidMount() {
    this.target = document.querySelector(`#${this.props.htmlId}`);
  }

  componentDidUpdate(prevProps) {
    if (this.props.isExpanded && !prevProps.isExpanded) {
      disableBodyScroll(this.target);
    } else if (!this.props.isExpanded && prevProps.isExpanded) {
      enableBodyScroll(this.target);
    }
  }

  componentWillUnmount() {
    clearAllBodyScrollLocks();
  }

  render() {
    const { children, isExpanded } = this.props;

    const classes = isExpanded
      ? [styles.wrapper, styles.isExpanded]
      : [styles.wrapper];

    return <div className={classes.join(' ')}>{children}</div>;
  }
}

MobileModal.propTypes = {
  htmlId: PropTypes.string.isRequired,
  isExpanded: PropTypes.bool,
};

export default MobileModal;
