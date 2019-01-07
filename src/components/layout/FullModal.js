import React from 'react';
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

class FullModal extends React.PureComponent {
  componentDidMount() {
    disableBodyScroll(document.querySelector('#fullModal'));
  }

  componentWillUnmount() {
    clearAllBodyScrollLocks();
  }

  render() {
    return <div id="fullModal">{this.props.children}</div>;
  }
}

export default FullModal;
