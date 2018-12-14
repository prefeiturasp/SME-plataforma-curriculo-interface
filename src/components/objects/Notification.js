import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AnimateHeight from 'react-animate-height';
import styles from './Notification.scss';

class Notification extends Component {
  state = {
    isExpanded: true,
  };

  onClickedNo = () => {
    this.setState({
      isExpanded: false,
    });
  }

  onClickedYes = () => {

  }

  render() {
    const { labelNo, labelYes, text } = this.props;
    const height = this.state.isExpanded ? 'auto' : 0;

    return (
      <AnimateHeight height={height}>
        <div className={styles.wrapper}>
          <div className="container">
            <p>{text}</p>
            <div className={styles.buttons}>
              <button onClick={this.onClickedNo}>
                {labelNo}
              </button>
              <button onClick={this.onClickedYes}>
                {labelYes}
              </button>
            </div>
          </div>
        </div>
      </AnimateHeight>
    );
  }
}

Notification.propTypes = {
  labelNo: PropTypes.string.isRequired,
  labelYes: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Notification;
