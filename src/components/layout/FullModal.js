import React from 'react';
import PropTypes from 'prop-types';
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

class FullModal extends React.PureComponent {
  state = { animationStatus: null };

  enter = () => {
    this.setState({ animationStatus: 'enter' });
    setTimeout(this.onEntered, 1000);
  }

  onEntered = () => {
    this.setState({ animationStatus: 'entered' });
  };

  componentDidMount() {
    disableBodyScroll(document.querySelector("#fullModal"));
    if (this.props.isVisible) {
      this.enter();
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.isVisible && !prevProps.isVisible) {
      this.enter();
    }
  }

  componentWillUnmount() {
    clearAllBodyScrollLocks();
  }

  render() {
    const classes = ['fullModal'];
    if (this.state.animationStatus) {
      classes.push(this.state.animationStatus);
    }

    return (
      <div className={classes.join(' ')} id="fullModal">
        {this.props.children}
      </div>
    );
  }
}

FullModal.propTypes = {
  isVisible: PropTypes.bool,
};

export default FullModal;
